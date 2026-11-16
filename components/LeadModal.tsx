'use client';
import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const storageKey = 'mgu-admission-help-shown';
const phonePattern = /^(\+91)?[6-9]\d{9}$/;
type FormErrors = { name?: string; phone?: string; form?: string };

export default function LeadModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const backdrop = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    try {
      if (!sessionStorage.getItem(storageKey)) {
        timer = setTimeout(() => {
          try { sessionStorage.setItem(storageKey, '1'); } catch { /* The current visit still shows the form once. */ }
          previousFocus.current = document.activeElement as HTMLElement;
          setOpen(true);
        }, 30_000);
      }
    } catch { /* Storage may be disabled; the modal still works for this page visit. */ }
    return () => { if (timer) clearTimeout(timer); if (closeTimer.current) clearTimeout(closeTimer.current); };
  }, []);

  useEffect(() => {
    if (!open || !panel.current || !backdrop.current) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (reduced) { gsap.set(backdrop.current, { opacity: 1 }); gsap.set(panel.current, { opacity: 1, y: 0, scale: 1 }); return; }
      gsap.fromTo(backdrop.current, { opacity: 0 }, { opacity: 1, duration: .22 });
      gsap.fromTo(panel.current, { opacity: 0, y: 30, scale: .9 }, { opacity: 1, y: 0, scale: 1, duration: .5, ease: 'back.out(1.6)' });
    });
    const first = panel.current.querySelector<HTMLElement>('input,button');
    first?.focus();
    return () => ctx.revert();
  }, [open]);

  function close() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (!panel.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setOpen(false); previousFocus.current?.focus(); return;
    }
    gsap.to([panel.current, backdrop.current], { opacity: 0, duration: .2, ease: 'power1.in', onComplete: () => { setOpen(false); previousFocus.current?.focus(); } });
  }

  function validate() {
    const cleanPhone = phone.replace(/[\s-]/g, '');
    const next: FormErrors = {};
    if (name.trim().length < 2) next.name = 'Please enter at least 2 characters.';
    if (!phonePattern.test(cleanPhone)) next.phone = 'Enter a valid Indian mobile number.';
    setErrors(next);
    return { valid: Object.keys(next).length === 0, cleanPhone };
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = validate();
    if (!result.valid) return;
    setErrors({});
    try {
      const response = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: name.trim(), phone: result.cleanPhone }) });
      if (!response.ok) throw new Error('Request failed');
      setSent(true);
      closeTimer.current = setTimeout(close, 2500);
    } catch { setErrors({ form: 'We could not send your request. Please try again later.' }); }
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Escape') { event.stopPropagation(); close(); return; }
    if (event.key !== 'Tab' || !panel.current) return;
    const focusable = Array.from(panel.current.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),input:not([disabled])'));
    if (!focusable.length) return;
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }

  if (!open) return null;
  return <div ref={backdrop} className="modal-backdrop" onMouseDown={(event)=>{if(event.target===backdrop.current)close();}} onKeyDown={onKeyDown}>
    <section ref={panel} role="dialog" aria-modal="true" aria-labelledby="lead-title" aria-describedby="lead-description" className="glass relative w-full max-w-lg p-6 sm:p-9">
      <button type="button" className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-xl hover:bg-white/20" onClick={close} aria-label="Close admission help form">×</button>
      {sent ? <div className="py-8 text-center"><div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-blue-400/20 text-2xl" aria-hidden="true">✓</div><h2 id="lead-title" className="display mt-5 text-4xl">Thank you!</h2><p className="mt-3 text-white/75">Your request has been received.</p></div> : <>
        <span className="eyebrow">Admissions support</span><h2 id="lead-title" className="display mt-3 pr-8 text-4xl">Need admission help?</h2><p id="lead-description" className="mt-3 text-sm text-white/75">Leave your name and phone number and our team will call you back.</p>
        <form className="mt-6 grid gap-4" onSubmit={submit} noValidate>
          <label className="grid gap-1.5 text-sm font-semibold" htmlFor="lead-name">Name<input id="lead-name" name="name" autoComplete="name" value={name} onChange={e=>setName(e.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name?'name-error':undefined} className="rounded-xl border border-white/20 bg-[#061b42]/70 px-4 py-3 text-white placeholder:text-white/40" placeholder="Your name"/>{errors.name&&<span id="name-error" className="text-xs font-normal text-rose-200">{errors.name}</span>}</label>
          <label className="grid gap-1.5 text-sm font-semibold" htmlFor="lead-phone">Phone<input id="lead-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" value={phone} onChange={e=>setPhone(e.target.value)} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone?'phone-error':undefined} className="rounded-xl border border-white/20 bg-[#061b42]/70 px-4 py-3 text-white placeholder:text-white/40" placeholder="+91 98765 43210"/>{errors.phone&&<span id="phone-error" className="text-xs font-normal text-rose-200">{errors.phone}</span>}</label>
          {errors.form&&<p role="alert" className="text-sm text-rose-200">{errors.form}</p>}
          <button type="submit" className="btn btn-primary mt-1 w-full">Request a call</button>
        </form>
      </>}
    </section>
  </div>;
}

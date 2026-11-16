'use client';
import { useState } from 'react';
import { navigation, siteLinks } from '@/data/content';
import Logo from './Logo';

export default function Header() {
  const [open, setOpen] = useState(false);
  return <header data-entrance="nav" className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-6">
    <div className="wrap glass flex min-h-[70px] items-center justify-between gap-4 px-4 py-2 sm:px-6">
      <a href="#top" aria-label="MGU home"><Logo /></a>
      <nav aria-label="Main navigation" className="desktop-nav hidden items-center gap-1 xl:flex">
        {navigation.map((item) => <a key={item.label} href={item.href} className="rounded-full px-2.5 py-2 text-[.76rem] text-white/75 transition hover:bg-white/10 hover:text-white">{item.label}</a>)}
      </nav>
      <a className="btn btn-primary hidden min-h-10 px-4 text-xs xl:inline-flex" href={siteLinks.apply}>Click to apply <span aria-hidden="true">↗</span></a>
      <button className="mobile-nav hidden rounded-full border border-white/20 p-2" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setOpen(!open)}><span aria-hidden="true">{open ? '×' : '☰'}</span></button>
    </div>
    {open && <nav id="mobile-menu" aria-label="Mobile navigation" className="glass wrap mt-2 grid gap-1 p-3 xl:hidden">
      {navigation.map((item) => <a key={item.label} onClick={() => setOpen(false)} href={item.href} className="rounded-lg px-3 py-2 text-sm text-white/85 hover:bg-white/10">{item.label}</a>)}
      <a className="btn btn-primary mt-2" href={siteLinks.apply}>Click to apply ↗</a>
    </nav>}
  </header>;
}

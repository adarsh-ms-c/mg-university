'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { tickerItems } from '@/data/content';

export default function Ticker() {
  const root = useRef<HTMLDivElement>(null);
  const animation = useRef<gsap.core.Tween | null>(null);
  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const track = el.querySelector<HTMLElement>('[data-track]');
    if (!track) return;
    const ctx = gsap.context(() => {
      animation.current = gsap.to(track, { xPercent: -50, duration: 34, ease: 'none', repeat: -1 });
    }, el);
    return () => { ctx.revert(); animation.current = null; };
  }, []);
  return <section className="wrap pb-6" aria-label="Flash news">
    <div ref={root} className="glass flex min-h-16 items-center overflow-hidden">
      <span className="gradient-pill ml-2 shrink-0">Flash News</span>
      <div className="overflow-hidden" aria-live="off" onMouseEnter={()=>animation.current?.pause()} onMouseLeave={()=>animation.current?.resume()} onFocus={()=>animation.current?.pause()} onBlur={()=>animation.current?.resume()}><div data-track className="ticker-track">
        {tickerItems.map((item,index)=><span key={`item-${index}`} className="ticker-item text-sm text-white/85">{item}</span>)}
        {tickerItems.map((item,index)=><span aria-hidden="true" key={`duplicate-${index}`} className="ticker-item ticker-duplicate text-sm text-white/85">{item}</span>)}
      </div></div>
    </div>
  </section>;
}

'use client';
import { useEffect, useRef } from 'react';
import { gsap, registerScrollTrigger } from './gsapClient';
import { stats } from '@/data/content';

export default function Stats() {
  const section = useRef<HTMLElement>(null);
  useEffect(() => {
    const root = section.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    registerScrollTrigger();
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-count]').forEach((node) => {
        const target = Number(node.dataset.count);
        const state = { value: 0 };
        gsap.to(state, { value: target, duration: 1.6, ease: 'power2.out', snap: { value: 1 }, scrollTrigger: { trigger: node, start: 'top 88%', once: true }, onUpdate: () => { node.textContent = `${Math.round(state.value)}${node.dataset.suffix ?? ''}`; } });
      });
    }, root);
    return () => ctx.revert();
  }, []);
  return <section ref={section} className="wrap section" aria-labelledby="stats-title">
    <div className="section-heading" data-reveal><span className="eyebrow">A growing community</span><h2 id="stats-title" className="display">MGU in numbers</h2><p>Academic schools and centres connect students, researchers and communities across the region.</p></div>
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {stats.map((stat)=><article key={stat.label} data-reveal className="glass hover-card p-5 sm:p-7"><b className="display counter block text-5xl text-white sm:text-6xl" data-count={stat.value} data-suffix={stat.suffix}>{stat.value}{stat.suffix}</b><h3 className="mt-3 text-sm font-semibold text-white/70">{stat.label}</h3></article>)}
    </div>
  </section>;
}

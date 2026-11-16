'use client';
import { useEffect, type ReactNode } from 'react';
import { gsap, registerScrollTrigger } from './gsapClient';

export default function MotionShell({ children }: { children: ReactNode }) {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    registerScrollTrigger();
    const ctx = gsap.context(() => {
      const nav = document.querySelector('[data-entrance="nav"]');
      const hero = gsap.utils.toArray<HTMLElement>('[data-entrance="hero"]');
      const card = document.querySelector('[data-entrance="hero-card"]');
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
      if (nav) intro.from(nav, { y: -35, opacity: 0, duration: .7 });
      if (hero.length) intro.from(hero, { y: 28, opacity: 0, duration: .7, stagger: .12 }, '-=.35');
      if (card) {
        intro.from(card, { scale: .84, rotation: 3, opacity: 0, duration: .9, ease: 'back.out(1.5)' }, '-=.55');
        gsap.to(card, { y: -10, duration: 2.5, ease: 'sine.inOut', yoyo: true, repeat: -1 });
      }
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((node) => gsap.from(node, { y: 30, opacity: 0, duration: .75, ease: 'power2.out', scrollTrigger: { trigger: node, start: 'top 88%', once: true } }));
      gsap.to('body', { backgroundPosition: '50% 28%', ease: 'none', scrollTrigger: { trigger: document.documentElement, start: 'top top', end: 'bottom bottom', scrub: .5 } });
    });
    return () => ctx.revert();
  }, []);
  return <>{children}</>;
}

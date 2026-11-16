import Link from 'next/link';
import { siteLinks } from '@/data/content';
import Logo from './Logo';

export default function Hero() {
  return <section id="top" className="wrap grid min-h-[760px] items-center gap-12 pb-16 pt-36 lg:grid-cols-[1.08fr_.92fr] lg:pt-40" aria-labelledby="hero-title">
    <div className="hero-copy max-w-3xl">
      <div data-entrance="hero" className="gradient-pill"><span aria-hidden="true">✦</span> Re-accredited by NAAC with A++ Grade</div>
      <h1 data-entrance="hero" id="hero-title" className="display display-hero my-7 text-[clamp(4rem,9vw,8rem)]">Mahatma<br className="hidden sm:block"/> Gandhi University</h1>
      <p data-entrance="hero" className="max-w-2xl text-base text-white/75 sm:text-lg">A centre for learning, research and innovation in Kerala. Explore academic programmes, university services and the work of our campus community in Kottayam.</p>
      <div data-entrance="hero" className="mt-8 flex flex-wrap gap-3">
        <a className="btn btn-primary" href={siteLinks.admissions}>Admissions <span aria-hidden="true">↗</span></a>
        <a className="btn" href={siteLinks.virtualTour}>360° Virtual Tour <span aria-hidden="true">↗</span></a>
        <a className="btn" href={siteLinks.contact}>Contact Us <span aria-hidden="true">↗</span></a>
      </div>
      <p data-entrance="hero" className="mt-9 text-xs font-semibold uppercase tracking-[.18em] text-white/50">Priyadarsini Hills · Kottayam · Kerala, India</p>
    </div>
    <div data-entrance="hero-card" className="hero-card glass relative mx-auto w-full max-w-[510px] overflow-hidden p-7 sm:p-10">
      <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" aria-hidden="true"/>
      <div className="relative flex items-center justify-between"><Logo compact/><span className="eyebrow text-[.62rem]">University at a glance</span></div>
      <div className="relative mt-10 text-center"><div className="display text-[clamp(7rem,20vw,12rem)] leading-none text-white">A++</div><p className="mt-3 text-xs font-bold uppercase tracking-[.25em] text-blue-100">Re-accredited Grade</p></div>
      <div className="relative mt-9 grid grid-cols-3 divide-x divide-white/15 text-center">
        {[['31','Schools'],['14','Centres'],['260+','Colleges']].map(([value,label])=><div key={label} className="px-2"><b className="display block text-3xl sm:text-4xl">{value}</b><span className="text-[.65rem] uppercase tracking-[.12em] text-white/65 sm:text-xs">{label}</span></div>)}
      </div>
      <Link href="https://www.mgu.ac.in/about-mgu/" className="relative mt-8 block text-center text-sm font-semibold text-blue-100 hover:text-white">Discover MGU <span aria-hidden="true">→</span></Link>
    </div>
  </section>;
}

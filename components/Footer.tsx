import { footerLinks } from '@/data/content';
import Logo from './Logo';

export default function Footer() {
  return <footer className="mt-12 border-t border-white/15 bg-[#020b20]/35">
    <div className="wrap grid gap-8 py-10 lg:grid-cols-[1fr_2fr]">
      <div><a href="#top"><Logo/></a><p className="mt-4 max-w-sm text-sm text-white/65">Mahatma Gandhi University<br/>Priyadarsini Hills, Kottayam, Kerala, India – 686560</p></div>
      <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-3 lg:grid-cols-4">{footerLinks.map(item=><a key={item.label} href={item.href} className="text-sm text-white/65 transition hover:text-white">{item.label}</a>)}</nav>
    </div>
    <div className="border-t border-white/10"><div className="wrap flex flex-wrap justify-between gap-2 py-5 text-xs text-white/55"><span>© 2026 Mahatma Gandhi University, Priyadarsini Hills, Kottayam, Kerala, India – 686560</span><a href="#top" className="hover:text-white">Back to top ↑</a></div></div>
  </footer>;
}

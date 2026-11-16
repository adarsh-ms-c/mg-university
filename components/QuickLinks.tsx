import { quickLinks } from '@/data/content';

export default function QuickLinks() {
  return <section id="quick-links" className="wrap section pt-3" aria-labelledby="links-title">
    <div data-reveal className="section-heading"><span className="eyebrow">Useful destinations</span><h2 id="links-title" className="display">Quick links</h2></div>
    <ul className="grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 lg:grid-cols-4">
      {quickLinks.map((item,index)=><li data-reveal key={item.label}><a href={item.href} className="glass group flex min-h-16 items-center gap-3 p-4 text-sm font-semibold text-white/75 transition hover:bg-white hover:text-[#09265b]"><span className="text-xs text-blue-200 group-hover:text-blue-700">{String(index+1).padStart(2,'0')}</span><span>{item.label}</span></a></li>)}
    </ul>
  </section>;
}

import { announcements } from '@/data/content';

export default function Announcements() {
  return <section id="announcements" className="wrap section" aria-labelledby="announcements-title">
    <div className="grid items-start gap-8 lg:grid-cols-[.72fr_1.28fr]">
      <div data-reveal className="section-heading"><span className="eyebrow">Stay informed</span><h2 id="announcements-title" className="display">Announcements</h2><p>Important notices, opportunities and updates for the MGU community.</p><a href="https://www.mgu.ac.in/orders-notifications/" className="btn btn-primary mt-5">View all announcements <span aria-hidden="true">↗</span></a></div>
      <ul className="glass divide-y divide-white/10 px-5 sm:px-7">
        {announcements.map((item,index)=><li data-reveal key={item.title}><a href={item.href} className="group flex items-center gap-4 py-5 text-sm font-medium text-white/85 hover:text-white"><span className="text-xs font-bold text-blue-200">0{index+1}</span><span className="flex-1">{item.title}</span><span className="text-lg transition-transform group-hover:translate-x-1" aria-hidden="true">→</span></a></li>)}
      </ul>
    </div>
  </section>;
}

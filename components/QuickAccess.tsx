import { quickAccess } from '@/data/content';

export default function QuickAccess() {
  return <section className="wrap section pt-5" aria-labelledby="access-title">
    <div data-reveal className="section-heading"><span className="eyebrow">Find it quickly</span><h2 id="access-title" className="display">Quick access</h2></div>
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {quickAccess.map((item)=><a data-reveal key={item.label} href={item.href} className="glass group hover-card flex min-h-48 flex-col justify-between p-6 hover:bg-gradient-to-br hover:from-[#3b8bff] hover:to-[#1553c9]">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl" aria-hidden="true">{item.icon}</span><span><b className="display block text-2xl">{item.label}</b><span className="mt-1 block text-sm text-white/70 group-hover:text-white/85">{item.detail}</span></span><span className="self-end text-xl" aria-hidden="true">↗</span>
      </a>)}
    </div>
  </section>;
}

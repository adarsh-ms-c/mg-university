import { highlights, latest, news } from '@/data/content';

function StoryCard({ item, featured = false }: { item: { title: string; description: string; href: string; category?: string; date?: string; tag?: string }; featured?: boolean }) {
  return <article data-reveal className={`glass hover-card flex h-full flex-col p-6 ${featured ? 'min-h-64 sm:p-8' : ''}`}>
    <span className="eyebrow">{item.category ?? item.tag}</span><h3 className={`display mt-4 text-2xl leading-tight sm:text-3xl ${featured ? 'sm:text-4xl' : ''}`}>{item.title}</h3>
    <p className="mt-3 flex-1 text-sm text-white/70">{item.description}</p>
    <a className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-blue-100 hover:text-white" href={item.href}>Read more <span aria-hidden="true">↗</span></a>
  </article>;
}

export default function NewsSection() {
  return <>
    <section id="news" className="wrap section" aria-labelledby="news-title">
      <div data-reveal className="section-heading"><span className="eyebrow">From the university</span><h2 id="news-title" className="display">News & updates</h2><p>Research, campus and community stories from Mahatma Gandhi University.</p></div>
      <div className="grid gap-4 lg:grid-cols-3">{news.map(item=><StoryCard key={item.title} item={item}/>)}</div>
    </section>
    <section className="wrap pb-14" aria-labelledby="latest-title">
      <div data-reveal className="mb-6 flex items-end justify-between gap-3"><div><span className="eyebrow">What's happening</span><h2 id="latest-title" className="display mt-2 text-4xl sm:text-5xl">Latest</h2></div><a className="text-sm font-bold text-blue-100 hover:text-white" href="https://www.mgu.ac.in/category/news/">All news ↗</a></div>
      <div className="grid gap-4 lg:grid-cols-2">{latest.map(item=><StoryCard key={item.title} item={item}/>)}</div>
    </section>
    <section className="wrap pb-16" aria-labelledby="highlights-title">
      <div data-reveal className="mb-6"><span className="eyebrow">People of MGU</span><h2 id="highlights-title" className="display mt-2 text-4xl sm:text-5xl">Highlights</h2></div>
      <div className="grid gap-4 lg:grid-cols-2">{highlights.map(item=><StoryCard key={item.title} item={item} featured/>)}</div>
    </section>
  </>;
}

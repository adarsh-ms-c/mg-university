export default function Logo({ compact = false }: { compact?: boolean }) {
  return <span className="flex items-center gap-3" aria-label="Mahatma Gandhi University">
    <svg aria-hidden="true" viewBox="0 0 72 64" className="h-11 w-12 shrink-0 drop-shadow-[0_0_12px_rgba(100,165,255,.75)]" fill="none">
      <path d="M8 45C12 20 29 5 61 5 49 9 39 17 33 29c-4 8-10 14-25 16Z" fill="white"/>
      <path d="M17 55c5-17 18-28 42-30-9 5-15 12-19 21-5 7-12 10-23 9Z" fill="white" opacity=".88"/>
      <path d="M44 54c4-10 11-15 21-16-5 4-8 9-9 15-4 3-8 4-12 1Z" fill="white" opacity=".76"/>
    </svg>
    {!compact && <span className="leading-tight"><b className="display text-2xl">MGU</b><small className="block text-[.56rem] font-bold tracking-[.12em] text-white/70">MAHATMA GANDHI UNIVERSITY</small></span>}
  </span>;
}

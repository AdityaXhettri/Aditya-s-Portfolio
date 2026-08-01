import { useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ['about', 'About'],
    ['skills', 'Skills'],
    ['projects', 'Projects'],
    ['experience', 'Experience'],
    ['blog', 'Blog'],
    ['contact', 'Contact'],
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-paper/80 border-b border-ink/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-serif-display text-2xl text-ink">
          Aditya<span className="italic-serif">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="text-neutral-700 hover:text-ink transition">
              {label}
            </a>
          ))}
        </div>
        <a href="#contact" className="btn-pill hidden md:inline-flex">
          Hire me <span aria-hidden>→</span>
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-ink" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-ink/10">
          <div className="px-6 py-4 flex flex-col gap-4 text-sm">
            {links.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="text-neutral-700">
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

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
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-bold text-xl tracking-tight">
          <span className="gradient-text">AC</span>
          <span className="text-white">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="text-gray-300 hover:text-white transition">{label}</a>
          ))}
        </div>
        <a href="#contact" className="hidden md:inline-block px-4 py-2 text-sm font-medium bg-accent-500 hover:bg-accent-600 rounded-lg transition">
          Hire Me
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5">
          <div className="px-6 py-4 flex flex-col gap-4 text-sm">
            {links.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="text-gray-300 hover:text-white">
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

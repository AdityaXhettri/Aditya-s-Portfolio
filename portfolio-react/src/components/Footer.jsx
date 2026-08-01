const SERIF = { fontFamily: '"Instrument Serif", Georgia, serif', fontWeight: 400, letterSpacing: '-0.02em' };

export default function Footer() {
  return (
    <footer className="py-12 border-t border-ink/10" style={{ backgroundColor: '#f5f1ea' }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
        <div style={{ ...SERIF, fontSize: '1.5rem', color: '#0a0a0a' }}>
          Aditya<span style={{ fontStyle: 'italic' }}>.</span>
        </div>
        <div className="text-xs text-neutral-700">
          © {new Date().getFullYear()} · Designed & built by Aditya Chettri.
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a href="https://github.com/AdityaXhettri" target="_blank" rel="noopener noreferrer" className="btn-link text-neutral-800">GitHub</a>
          <a href="https://instagram.com/_aditya_chhetri__" target="_blank" rel="noopener noreferrer" className="btn-link text-neutral-800">Instagram</a>
          <a href="mailto:aditya74949830@gmail.com" className="btn-link text-neutral-800">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="py-12 paper-bg border-t border-ink/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
        <div className="font-serif-display text-2xl text-ink">
          Aditya<span className="italic-serif">.</span>
        </div>
        <div className="text-xs text-neutral-600">
          © {new Date().getFullYear()} · Built with React, Vite, Bun.
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="btn-link text-neutral-700">GitHub</a>
          <a href="#" className="btn-link text-neutral-700">LinkedIn</a>
          <a href="mailto:your.email@example.com" className="btn-link text-neutral-700">Email</a>
        </div>
      </div>
    </footer>
  );
}

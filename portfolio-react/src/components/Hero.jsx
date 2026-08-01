import TextStorm from './TextStorm';

const SERIF = { fontFamily: '"Instrument Serif", Georgia, serif', fontWeight: 400, letterSpacing: '-0.02em' };

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24 pb-12" style={{ backgroundColor: '#f5f1ea' }}>
      {/* Text storm on the right half */}
      <TextStorm />

      {/* Content overlay */}
      <div className="relative max-w-6xl mx-auto px-6 pt-12" style={{ zIndex: 10 }}>
        <div className="text-xs uppercase tracking-[0.3em] text-neutral-700 mb-6">
          Portfolio · 2026
        </div>

        <h1
          className="text-ink mb-8 max-w-5xl leading-[0.9]"
          style={{ ...SERIF, fontSize: 'clamp(3rem, 10vw, 9rem)' }}
        >
          Where ideas<br />
          <span style={{ fontStyle: 'italic' }}>take shape.</span>
        </h1>

        <div className="flex flex-wrap items-end justify-between gap-8 mt-12">
          <p className="max-w-md text-neutral-800 text-lg leading-relaxed">
            <span style={{ ...SERIF, fontStyle: 'italic', color: '#0a0a0a' }}>Full-stack developer</span>{' '}
            building modern web apps, AI-powered tools, and real-world software products.
            <span className="block mt-2 text-sm text-neutral-700">Live for an NGO.</span>
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a href="#projects" className="btn-pill">
              View my work <span aria-hidden>→</span>
            </a>
            <a href="#contact" className="btn-link">
              Get in touch <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import TextStorm from './TextStorm';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen paper-bg overflow-hidden pt-24 pb-12">
      <TextStorm />

      <div className="relative max-w-6xl mx-auto px-6 pt-12">
        <div className="text-xs uppercase tracking-[0.3em] text-neutral-600 mb-6">
          Portfolio · 2026
        </div>

        <h1 className="font-serif-display text-[18vw] md:text-[10vw] leading-[0.9] text-ink mb-8 max-w-5xl">
          Where ideas<br />
          <span className="italic-serif">take shape.</span>
        </h1>

        <div className="flex flex-wrap items-end justify-between gap-8 mt-12">
          <p className="max-w-md text-neutral-700 text-lg leading-relaxed">
            <span className="italic-serif text-ink">Full-stack developer</span> building modern web apps, AI-powered tools, and real-world software products.
            <span className="block mt-2 text-sm text-neutral-600">Live for an NGO.</span>
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

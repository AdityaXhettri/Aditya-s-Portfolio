import { useState } from 'react';
import Lightbox from './Lightbox';

const SERIF = { fontFamily: '"Instrument Serif", Georgia, serif', fontWeight: 400, letterSpacing: '-0.02em' };

const projects = [
  {
    featured: true,
    title: 'NGO Website',
    sub: 'Freelance · First paid client',
    desc: 'A complete responsive website built for an NGO. Modern UI, optimized performance, deployed to production for real users.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    cover: '/ngo.png',
  },
  {
    title: 'Football Tournament Manager',
    sub: 'Web platform',
    desc: 'Team registration, fixtures, live scores, and standings for football tournaments.',
    tags: ['React', 'Node.js', 'MongoDB'],
    cover: '/football.jpg',
  },
  {
    title: 'AI Automation Tool',
    sub: 'Personal project',
    desc: 'Automation project integrating AI APIs for smart workflows. Prompt engineering and AI integrations.',
    tags: ['Python', 'FastAPI', 'AI API'],
    cover: '/ai.png',
  },
];

export default function Projects() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="projects" className="py-32 border-t border-ink/10" style={{ backgroundColor: '#f5f1ea' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 mb-16 reveal">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.3em] text-neutral-700 mb-4">Selected work</div>
            <div style={{ ...SERIF, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#0a0a0a', lineHeight: 1.05 }}>
              <span style={{ backgroundColor: 'rgba(10, 10, 10, 0.12)', padding: '0 0.3em', boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }}>Things I've</span> <span style={{ fontStyle: 'italic' }}>built.</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`reveal border border-ink/15 rounded-2xl overflow-hidden hover:border-ink/40 transition group ${p.featured ? 'md:col-span-2' : ''}`}
              style={{ backgroundColor: '#ebe6dc' }}
            >
              <div
                className={`relative ${p.featured ? 'h-72' : 'h-56'} bg-center flex items-center justify-center overflow-hidden group/cover`}
                style={p.cover ? { cursor: 'zoom-in' } : undefined}
                onClick={p.cover ? () => setLightbox(p.cover) : undefined}
              >
                {p.cover && (
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover/cover:scale-105"
                    style={{ backgroundImage: `url(${p.cover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  ></div>
                )}
                {!p.cover && <div className="absolute inset-0" style={{ backgroundColor: '#d4cec0' }}></div>}
                {!p.cover && (
                  <div className="text-7xl relative" style={{ ...SERIF, color: 'rgba(10,10,10,0.15)' }}>
                    {i === 0 ? 'NGO' : 'AI'}
                  </div>
                )}
                {p.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#0a0a0a', color: '#f5f1ea' }}>
                    Live · Client paid
                  </div>
                )}
              </div>
              <div className="p-8">
                <div className="text-xs uppercase tracking-widest text-neutral-700 mb-2">{p.sub}</div>
                <h3 style={{ ...SERIF, fontSize: '2rem', color: '#0a0a0a', marginBottom: '0.75rem' }}>{p.title}</h3>
                <p className="text-neutral-800 leading-relaxed mb-6">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs text-neutral-800 border border-ink/20 px-2.5 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6">
                  <a href="https://dikshawelfare.com/" target="_blank" rel="noopener noreferrer" className="btn-link">Live demo <span aria-hidden>→</span></a>
                  <a href="https://dikshawelfare.com/" target="_blank" rel="noopener noreferrer" className="btn-link text-neutral-700">Source <span aria-hidden>→</span></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Lightbox src={lightbox} onClose={() => setLightbox(null)} />
    </section>
  );
}

const SERIF = { fontFamily: '"Instrument Serif", Georgia, serif', fontWeight: 400, letterSpacing: '-0.02em' };

const experiences = [
  {
    title: 'Deloitte Virtual Internship',
    role: 'Software Engineering Track',
    desc: 'Exposure to professional workflows, business problem-solving, and industry practices through a structured virtual program.',
    period: '2025',
  },
  {
    title: 'Hackathon',
    role: 'Team-based competition',
    desc: 'Built a project under time pressure alongside a team, strengthening collaboration, communication, and problem-solving.',
    period: '2024',
  },
  {
    title: 'Freelance Web Developer — NGO',
    role: 'First paid client',
    desc: 'Built and delivered a complete responsive website for an NGO. Earned my first freelance income and shipped a real product to production.',
    period: '2024 — Present',
    highlight: true,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 border-t border-ink/10" style={{ backgroundColor: '#f5f1ea' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 mb-16 reveal">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.3em] text-neutral-700 mb-4">Experience</div>
            <div style={{ ...SERIF, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#0a0a0a', lineHeight: 1.05 }}>
              A short <span style={{ fontStyle: 'italic' }}>trail.</span>
            </div>
          </div>
        </div>

        <div className="divide-y divide-ink/10 reveal">
          {experiences.map((e) => (
            <div key={e.title} className="grid md:grid-cols-12 gap-6 py-8 group">
              <div className="md:col-span-3 text-sm text-neutral-700 uppercase tracking-wider">{e.period}</div>
              <div className="md:col-span-7">
                <h3 style={{ ...SERIF, fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: '#0a0a0a', marginBottom: '0.25rem' }}>{e.title}</h3>
                <div className="text-sm text-neutral-700 mb-3" style={{ ...SERIF, fontStyle: 'italic' }}>{e.role}</div>
                <p className="text-neutral-800 max-w-2xl">{e.desc}</p>
              </div>
              <div className="md:col-span-2 flex md:justify-end items-start">
                {e.highlight && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                    Live
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

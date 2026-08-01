const SERIF = { fontFamily: '"Instrument Serif", Georgia, serif', fontWeight: 400, letterSpacing: '-0.02em' };

const posts = [
  {
    tag: 'Coming soon',
    title: 'How I landed my first paid freelance project',
    desc: 'Lessons from building a website for an NGO — client communication, deadlines, and shipping.',
    time: '5 min read',
    cat: 'Web Dev',
  },
  {
    tag: 'Coming soon',
    title: 'Prompt engineering basics for developers',
    desc: 'A practical intro to designing prompts that get reliable, useful output from AI APIs.',
    time: '7 min read',
    cat: 'AI',
  },
  {
    tag: 'Coming soon',
    title: 'My 3rd-year CSE roadmap',
    desc: "Skills, projects, and habits I'm focusing on to land a software engineering internship and freelance work.",
    time: '6 min read',
    cat: 'Career',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-32 border-t border-ink/10" style={{ backgroundColor: '#f5f1ea' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 mb-16 reveal">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.3em] text-neutral-700 mb-4">Writings</div>
            <div style={{ ...SERIF, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#0a0a0a', lineHeight: 1.05 }}>
              <span style={{ backgroundColor: 'rgba(10, 10, 10, 0.12)', padding: '0 0.3em', boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }}>Notes from</span> <span style={{ fontStyle: 'italic' }}>the work.</span>
            </div>
          </div>
        </div>

        <div className="divide-y divide-ink/10 reveal">
          {posts.map((p, i) => (
            <article key={p.title} className="grid md:grid-cols-12 gap-6 py-10 group cursor-pointer">
              <div className="md:col-span-2 text-sm text-neutral-700 font-mono">0{i + 1} — {p.cat}</div>
              <div className="md:col-span-7">
                <h3 style={{ ...SERIF, fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: '#0a0a0a', marginBottom: '0.75rem' }} className="group-hover:italic transition">{p.title}</h3>
                <p className="text-neutral-800 max-w-2xl">{p.desc}</p>
              </div>
              <div className="md:col-span-3 flex md:justify-end items-start">
                <span className="text-xs text-neutral-700 uppercase tracking-wider">{p.time}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

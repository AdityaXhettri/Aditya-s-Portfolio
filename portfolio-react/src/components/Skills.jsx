const SERIF = { fontFamily: '"Instrument Serif", Georgia, serif', fontWeight: 400, letterSpacing: '-0.02em' };

const categories = [
  { n: '01', title: 'Languages', items: [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  ]},
  { n: '02', title: 'Frontend', items: [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  ]},
  { n: '03', title: 'Backend', items: [
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', learning: true },
  ]},
  { n: '04', title: 'Databases', items: [
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  ]},
  { n: '05', title: 'Tools', items: [
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  ]},
  { n: '06', title: 'AI', items: [
    { name: 'AI APIs', svg: 'robot' },
    { name: 'Prompts', svg: 'chat' },
    { name: 'Automation', svg: 'bolt' },
  ]},
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 border-t border-ink/10" style={{ backgroundColor: '#f5f1ea' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 mb-16 reveal">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.3em] text-neutral-700 mb-4">Stack</div>
            <div style={{ ...SERIF, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#0a0a0a', lineHeight: 1.05 }}>
              <span style={{ backgroundColor: 'rgba(10, 10, 10, 0.12)', padding: '0 0.3em', boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }}>Tools I use to</span> <span style={{ fontStyle: 'italic' }}>ship.</span>
            </div>
          </div>
        </div>

        <div className="space-y-12 reveal">
          {categories.map((cat) => (
            <div key={cat.n} className="grid grid-cols-[60px_1fr] md:grid-cols-[120px_1fr] gap-6 items-start">
              <div className="pt-1">
                <div className="font-mono text-neutral-700" style={{ fontSize: '0.95rem' }}>{cat.n}</div>
              </div>
              <div>
                <div className="text-sm uppercase tracking-widest mb-4 font-medium" style={{ color: '#0a0a0a' }}>{cat.title}</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                  {cat.items.map((item) => (
                    <div key={item.name} className="border border-ink/15 rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:border-ink/40 transition aspect-square relative" style={{ backgroundColor: '#ebe6dc' }}>
                      {item.svg ? (
                        <svg className="w-10 h-10 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={
                            item.svg === 'robot' ? 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h.01M15 9h.01M9 13h.01M15 13h.01' :
                            item.svg === 'chat' ? 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' :
                            'M13 10V3L4 14h7v7l9-11h-7z'
                          } />
                        </svg>
                      ) : (
                        <img src={item.icon} alt={item.name} className="w-10 h-10" />
                      )}
                      <span className="text-xs text-neutral-800" style={item.learning ? { ...SERIF, fontStyle: 'italic', color: '#0a0a0a' } : undefined}>{item.name}</span>
                      {item.learning && (
                        <span className="absolute top-1.5 right-1.5 text-[9px] font-mono text-neutral-700 border border-ink/20 px-1.5 py-0.5 rounded">
                          learning
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

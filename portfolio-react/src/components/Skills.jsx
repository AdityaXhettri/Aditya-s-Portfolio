const categories = [
  {
    n: '01',
    title: 'Languages',
    items: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    ],
  },
  {
    n: '02',
    title: 'Frontend',
    items: [
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    ],
  },
  {
    n: '03',
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invert: true },
      { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', learning: true },
    ],
  },
  {
    n: '04',
    title: 'Databases',
    items: [
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ],
  },
  {
    n: '05',
    title: 'Tools',
    items: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invert: true },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    ],
  },
  {
    n: '06',
    title: 'AI',
    items: [
      { name: 'AI APIs', svg: 'robot' },
      { name: 'Prompts', svg: 'chat' },
      { name: 'Automation', svg: 'bolt' },
    ],
  },
];

function TechIcon({ item }) {
  if (item.svg) {
    const paths = {
      robot: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h.01M15 9h.01M9 13h.01M15 13h.01',
      chat: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
      bolt: 'M13 10V3L4 14h7v7l9-11h-7z',
    };
    return (
      <svg className="w-10 h-10 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={paths[item.svg]} />
      </svg>
    );
  }
  return (
    <img
      src={item.icon}
      alt={item.name}
      className="w-10 h-10"
      style={item.invert ? { filter: 'brightness(0) invert(1)' } : undefined}
    />
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Skills & <span className="gradient-text">Tech Stack</span></h2>
          <p className="text-gray-400">Tools I use to ship production-ready products</p>
          <div className="w-16 h-1 bg-accent-500 mx-auto rounded-full mt-3"></div>
        </div>

        <div className="space-y-10 reveal">
          {categories.map((cat) => (
            <div key={cat.n} className="grid grid-cols-[80px_1fr] gap-4 items-start">
              <div className="pt-2">
                <span className="text-xs font-mono text-accent-400 block">{cat.n}</span>
                <h3 className="text-sm font-semibold text-white tracking-wide uppercase mt-1">{cat.title}</h3>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="glass rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:border-accent-500/40 transition aspect-square relative"
                  >
                    <TechIcon item={item} />
                    <span className={`text-xs ${item.learning ? 'text-accent-300' : 'text-gray-300'}`}>{item.name}</span>
                    {item.learning && (
                      <span className="absolute top-1.5 right-1.5 text-[9px] font-mono text-accent-400 bg-accent-500/10 border border-accent-500/30 px-1.5 py-0.5 rounded">
                        learning
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

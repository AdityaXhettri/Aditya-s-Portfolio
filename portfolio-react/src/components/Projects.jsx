const projects = [
  {
    featured: true,
    title: 'NGO Website — Freelance',
    desc: 'A complete responsive website built for an NGO as my first paid freelance project. Includes modern UI, optimized performance, and deployed to production for real users.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    badge: 'Live · Client Paid',
    cover: null,
  },
  {
    title: 'Football Tournament Manager',
    desc: 'A web platform to manage football tournaments — team registration, fixtures, live scores, and standings.',
    tags: ['React', 'Node.js', 'MongoDB'],
    cover: '/football.jpg',
  },
  {
    title: 'AI-Powered Automation Tool',
    desc: 'Automation project integrating AI APIs for smart workflows. Built to explore prompt engineering and AI integrations.',
    tags: ['Python', 'FastAPI', 'AI API'],
    cover: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured <span className="gradient-text">Projects</span></h2>
          <p className="text-gray-400">Real-world products I've built and shipped</p>
          <div className="w-16 h-1 bg-accent-500 mx-auto rounded-full mt-3"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`glass rounded-2xl overflow-hidden hover:border-accent-500/40 transition group reveal ${p.featured ? 'md:col-span-2' : ''}`}
            >
              <div
                className={`relative ${p.featured ? 'h-64' : 'h-48'} bg-cover bg-center flex items-center justify-center`}
                style={p.cover ? { backgroundImage: `url(${p.cover})` } : undefined}
              >
                {!p.cover && (
                  <div
                    className={`absolute inset-0 ${
                      i === 0
                        ? 'bg-gradient-to-br from-accent-500/30 via-blue-500/20 to-purple-500/30'
                        : 'bg-gradient-to-br from-purple-500/30 to-pink-500/20'
                    }`}
                  ></div>
                )}
                {!p.cover && (
                  <div className="text-6xl font-bold text-white/20 relative">
                    {i === 0 ? 'NGO' : '��'}
                  </div>
                )}
                {p.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-green-500/20 border border-green-500/40 rounded-full text-xs text-green-300 font-medium flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    {p.badge}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                <p className="text-gray-400 mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs bg-accent-500/10 border border-accent-500/30 rounded-full text-accent-300">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href="#" className="px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white text-sm rounded-lg transition">
                    Live Demo
                  </a>
                  <a href="#" className="px-4 py-2 glass hover:bg-white/5 text-white text-sm rounded-lg transition">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

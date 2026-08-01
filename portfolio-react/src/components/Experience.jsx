const experiences = [
  {
    title: 'Deloitte Virtual Internship',
    role: 'Software Engineering Track',
    desc: 'Gained exposure to professional workflows, business problem-solving, and industry practices through a structured virtual internship program.',
    status: 'Completed',
    color: 'border-l-accent-500',
  },
  {
    title: 'Hackathon Participant',
    role: 'Team-based Competition',
    desc: 'Built a project under time pressure alongside a team, strengthening collaboration, communication, and problem-solving skills.',
    status: 'Completed',
    color: 'border-l-blue-500',
  },
  {
    title: 'Freelance Web Developer — NGO',
    role: 'First Paid Client',
    desc: 'Built and delivered a complete responsive website for an NGO. Earned my first freelance income and shipped a real product to production.',
    status: 'Live · Paid',
    color: 'border-l-green-500',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Experience & <span className="gradient-text">Achievements</span></h2>
          <div className="w-16 h-1 bg-accent-500 mx-auto rounded-full mt-3"></div>
        </div>

        <div className="space-y-6 reveal">
          {experiences.map((e) => (
            <div key={e.title} className={`glass p-6 rounded-2xl hover:border-accent-500/40 transition border-l-4 ${e.color}`}>
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <h3 className="text-lg font-semibold text-white">{e.title}</h3>
                <span className="text-xs text-gray-400 px-3 py-1 bg-white/5 rounded-full">{e.status}</span>
              </div>
              <p className="text-sm text-accent-400 mb-2">{e.role}</p>
              <p className="text-gray-400 text-sm">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

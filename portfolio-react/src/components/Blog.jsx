const posts = [
  {
    tag: 'Coming Soon',
    title: 'How I Landed My First Paid Freelance Project',
    desc: 'Lessons from building a website for an NGO — what I learned about client communication, deadlines, and shipping.',
    time: '5 min read',
    cat: 'Web Dev',
  },
  {
    tag: 'Coming Soon',
    title: 'Prompt Engineering Basics for Developers',
    desc: 'A practical intro to designing prompts that get reliable, useful output from AI APIs.',
    time: '7 min read',
    cat: 'AI',
  },
  {
    tag: 'Coming Soon',
    title: 'My 3rd-Year CSE Roadmap',
    desc: "Skills, projects, and habits I'm focusing on to land a software engineering internship and freelance work.",
    time: '6 min read',
    cat: 'Career',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Latest <span className="gradient-text">Writings</span></h2>
          <p className="text-gray-400">Thoughts on development, AI, and learning</p>
          <div className="w-16 h-1 bg-accent-500 mx-auto rounded-full mt-3"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 reveal">
          {posts.map((p) => (
            <article key={p.title} className="glass p-6 rounded-2xl hover:border-accent-500/40 transition group cursor-pointer">
              <div className="text-xs text-accent-400 mb-2">{p.tag}</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent-400 transition">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{p.desc}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{p.time}</span>
                <span>{p.cat}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

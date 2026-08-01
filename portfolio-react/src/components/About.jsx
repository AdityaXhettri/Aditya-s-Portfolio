export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">About <span className="gradient-text">Me</span></h2>
          <div className="w-16 h-1 bg-accent-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="aspect-square max-w-sm mx-auto rounded-2xl bg-gradient-to-br from-accent-500/30 to-blue-500/30 p-1 glow">
              <div className="w-full h-full rounded-2xl bg-ink-800 flex items-center justify-center overflow-hidden">
                <div className="text-7xl font-bold gradient-text">AC</div>
              </div>
            </div>
          </div>
          <div className="reveal">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              I'm a third-year <span className="text-white font-medium">B.Tech Computer Science Engineering</span> student passionate about building modern web applications, AI-powered solutions, and real-world software projects.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              I enjoy transforming ideas into functional digital products using clean code and modern technologies. My primary interests include Full-Stack Development, Artificial Intelligence, Software Engineering, and Automation.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              So far, I've delivered a <span className="text-accent-400 font-medium">live website for an NGO</span> — my first paid project — and built a football tournament management platform, gaining hands-on experience in responsive design, user-focused interfaces, and deployment.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="glass p-4 rounded-lg text-center">
                <div className="text-2xl font-bold gradient-text">20+</div>
                <div className="text-xs text-gray-400 mt-1">Projects Shipped</div>
              </div>
              <div className="glass p-4 rounded-lg text-center">
                <div className="text-2xl font-bold gradient-text">1</div>
                <div className="text-xs text-gray-400 mt-1">Paid Client</div>
              </div>
              <div className="glass p-4 rounded-lg text-center">
                <div className="text-2xl font-bold gradient-text">3rd</div>
                <div className="text-xs text-gray-400 mt-1">Year CSE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

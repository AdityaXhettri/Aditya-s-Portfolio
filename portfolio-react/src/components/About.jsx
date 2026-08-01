export default function About() {
  return (
    <section id="about" className="py-32 paper-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4 reveal">
            <div className="text-xs uppercase tracking-[0.3em] text-neutral-600 mb-4">About</div>
            <div className="font-serif-display text-5xl text-ink">A brief<br /><span className="italic-serif">introduction.</span></div>
          </div>

          <div className="md:col-span-8 reveal">
            <p className="text-xl md:text-2xl text-ink leading-snug mb-8 font-serif-display">
              I'm a third-year <span className="italic-serif">B.Tech Computer Science</span> student — building modern web applications, AI-powered solutions, and real-world software products.
            </p>
            <p className="text-neutral-700 leading-relaxed mb-6">
              I enjoy transforming ideas into functional digital products using clean code and modern technologies. My focus is on Full-Stack Development, Artificial Intelligence, Software Engineering, and Automation.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              I delivered a <span className="italic-serif text-ink">live website for an NGO</span> as my first paid project, and built a football tournament management platform — gaining hands-on experience in responsive design, user-focused interfaces, and deployment.
            </p>

            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-ink/10">
              <div>
                <div className="font-serif-display text-5xl text-ink">20+</div>
                <div className="text-xs uppercase tracking-wider text-neutral-600 mt-2">Projects shipped</div>
              </div>
              <div>
                <div className="font-serif-display text-5xl text-ink">1</div>
                <div className="text-xs uppercase tracking-wider text-neutral-600 mt-2">Paid client</div>
              </div>
              <div>
                <div className="font-serif-display text-5xl text-ink">3rd</div>
                <div className="text-xs uppercase tracking-wider text-neutral-600 mt-2">Year CSE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SERIF = { fontFamily: '"Instrument Serif", Georgia, serif', fontWeight: 400, letterSpacing: '-0.02em' };

export default function About() {
  return (
    <section id="about" className="py-32" style={{ backgroundColor: '#f5f1ea' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4 reveal">
            <div className="text-xs uppercase tracking-[0.3em] text-neutral-700 mb-4">About</div>
            <div style={{ ...SERIF, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#0a0a0a', lineHeight: 1.05 }}>
              A brief<br />
              <span style={{ fontStyle: 'italic' }}>introduction.</span>
            </div>
          </div>

          <div className="md:col-span-8 reveal">
            <p
              className="leading-snug mb-8"
              style={{ ...SERIF, fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)', color: '#0a0a0a' }}
            >
              I'm a third-year <span style={{ fontStyle: 'italic', color: '#0a0a0a' }}>B.Tech Computer Science</span> student — building modern web applications, AI-powered solutions, and real-world software products.
            </p>
            <p className="text-neutral-800 leading-relaxed mb-6">
              I enjoy transforming ideas into functional digital products using clean code and modern technologies. My focus is on Full-Stack Development, Artificial Intelligence, Software Engineering, and Automation.
            </p>
            <p className="text-neutral-800 leading-relaxed">
              I delivered a <span style={{ ...SERIF, fontStyle: 'italic', color: '#0a0a0a' }}>live website for an NGO</span> as my first paid project, and built a football tournament management platform — gaining hands-on experience in responsive design, user-focused interfaces, and deployment.
            </p>

            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-ink/10">
              <div>
                <div style={{ ...SERIF, fontSize: '3rem', color: '#0a0a0a', lineHeight: 1 }}>20+</div>
                <div className="text-xs uppercase tracking-wider text-neutral-700 mt-2">Projects shipped</div>
              </div>
              <div>
                <div style={{ ...SERIF, fontSize: '3rem', color: '#0a0a0a', lineHeight: 1 }}>1</div>
                <div className="text-xs uppercase tracking-wider text-neutral-700 mt-2">Paid client</div>
              </div>
              <div>
                <div style={{ ...SERIF, fontSize: '3rem', color: '#0a0a0a', lineHeight: 1 }}>3rd</div>
                <div className="text-xs uppercase tracking-wider text-neutral-700 mt-2">Year CSE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

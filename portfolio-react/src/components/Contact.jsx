import { useState } from 'react';

const SERIF = { fontFamily: '"Instrument Serif", Georgia, serif', fontWeight: 400, letterSpacing: '-0.02em' };

export default function Contact() {
  const [status, setStatus] = useState({ text: '', cls: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setStatus({ text: 'Sending...', cls: 'text-neutral-700' });
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      const json = await res.json();
      if (json.success) {
        setStatus({ text: "Message sent. I'll get back to you soon.", cls: 'text-ink' });
        e.target.reset();
      } else {
        setStatus({ text: 'Failed to send. Please email me directly.', cls: 'text-red-700' });
      }
    } catch {
      setStatus({ text: 'Network error. Please email me directly.', cls: 'text-red-700' });
    }
  };

  return (
    <section id="contact" className="py-32 border-t border-ink/10" style={{ backgroundColor: '#f5f1ea' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-neutral-700 mb-4">Get in touch</div>
          <h2 style={{ ...SERIF, fontSize: 'clamp(3rem, 8vw, 6rem)', color: '#0a0a0a', lineHeight: 1, marginBottom: '1.5rem' }}>
            Let's build <span style={{ fontStyle: 'italic' }}>together.</span>
          </h2>
          <p className="text-neutral-800 max-w-xl mx-auto">
            Open to internships, freelance work, and collaboration. Drop a message — I usually reply within a day.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 reveal">
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
          <input type="hidden" name="subject" value="New Portfolio Message" />
          <input type="checkbox" name="botcheck" className="hidden" />

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-neutral-700 mb-2">Name</label>
              <input type="text" name="name" required className="w-full px-0 py-3 bg-transparent border-b border-ink/30 focus:outline-none transition" style={{ color: '#0a0a0a' }} placeholder="Your name" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-neutral-700 mb-2">Email</label>
              <input type="email" name="email" required className="w-full px-0 py-3 bg-transparent border-b border-ink/30 focus:outline-none transition" style={{ color: '#0a0a0a' }} placeholder="you@example.com" />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-neutral-700 mb-2">Message</label>
            <textarea name="message" rows="4" required className="w-full px-0 py-3 bg-transparent border-b border-ink/30 focus:outline-none transition resize-none" style={{ color: '#0a0a0a' }} placeholder="Tell me about your project..."></textarea>
          </div>

          <div className="flex items-center justify-between pt-4">
            <button type="submit" className="btn-pill">
              Send message <span aria-hidden>→</span>
            </button>
            <div className={`text-sm ${status.cls}`}>{status.text}</div>
          </div>
        </form>
      </div>
    </section>
  );
}

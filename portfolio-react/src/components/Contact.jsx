import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState({ text: '', cls: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setStatus({ text: 'Sending...', cls: 'text-gray-400' });
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      const json = await res.json();
      if (json.success) {
        setStatus({ text: "✅ Message sent! I'll get back to you soon.", cls: 'text-green-400' });
        e.target.reset();
      } else {
        setStatus({ text: '❌ Failed to send. Please email me directly.', cls: 'text-red-400' });
      }
    } catch {
      setStatus({ text: '❌ Network error. Please email me directly.', cls: 'text-red-400' });
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Get in <span className="gradient-text">Touch</span></h2>
          <p className="text-gray-400">Open to internships, freelance, and collaboration</p>
          <div className="w-16 h-1 bg-accent-500 mx-auto rounded-full mt-3"></div>
        </div>

        <div className="glass p-8 rounded-2xl reveal">
          <form onSubmit={handleSubmit} className="space-y-5">
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
            <input type="hidden" name="subject" value="New Portfolio Message" />
            <input type="checkbox" name="botcheck" className="hidden" />

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-gray-300 mb-2">Name</label>
                <input type="text" name="name" required className="w-full px-4 py-3 bg-ink-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent-500 transition" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-2">Email</label>
                <input type="email" name="email" required className="w-full px-4 py-3 bg-ink-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent-500 transition" placeholder="you@example.com" />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Message</label>
              <textarea name="message" rows="5" required className="w-full px-4 py-3 bg-ink-900 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent-500 transition resize-none" placeholder="Tell me about your project or opportunity..."></textarea>
            </div>

            <button type="submit" className="w-full px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-lg font-medium transition shadow-lg shadow-accent-500/30">
              Send Message
            </button>

            <div className={`text-center text-sm ${status.cls}`}>{status.text}</div>
          </form>
        </div>
      </div>
    </section>
  );
}

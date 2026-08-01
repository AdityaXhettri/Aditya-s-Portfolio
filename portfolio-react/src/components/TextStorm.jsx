import { useEffect, useRef } from 'react';

export default function TextStorm() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let particles = [];
    let w, h;

    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*<>{}[]';

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    };

    const spawn = () => {
      // Spawn from right side, flowing toward the left-bottom
      const x = w + Math.random() * 80;
      const y = Math.random() * h * 0.5;
      const size = 8 + Math.random() * 22;
      return {
        x,
        y,
        z: Math.random(),           // depth for size + opacity
        vx: -(0.4 + Math.random() * 1.2),
        vy: 0.3 + Math.random() * 0.8,
        size,
        char: CHARS[Math.floor(Math.random() * CHARS.length)],
        opacity: 0,
        target: 0.3 + Math.random() * 0.7,
        life: 0,
        maxLife: 400 + Math.random() * 400,
      };
    };

    const init = () => {
      particles = [];
      for (let i = 0; i < 180; i++) particles.push(spawn());
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        // Fade in / out
        if (p.life < 60) p.opacity = (p.life / 60) * p.target;
        else if (p.life > p.maxLife - 60) p.opacity = ((p.maxLife - p.life) / 60) * p.target;
        else p.opacity = p.target;

        // Draw
        const fontSize = p.size * (0.6 + p.z * 0.8);
        ctx.font = `${fontSize}px "Instrument Serif", Georgia, serif`;
        ctx.fillStyle = `rgba(10, 10, 10, ${p.opacity})`;
        ctx.textBaseline = 'middle';
        ctx.fillText(p.char, p.x, p.y);

        // Recycle
        if (p.life > p.maxLife || p.x < -50 || p.y > h + 50) {
          particles[i] = spawn();
        }
      }
      raf = requestAnimationFrame(tick);
    };

    resize();
    init();
    tick();
    window.addEventListener('resize', () => { resize(); init(); });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Aditya Chettri. Built with React, Vite, Bun & a lot of ☕</p>
      </div>
    </footer>
  );
}

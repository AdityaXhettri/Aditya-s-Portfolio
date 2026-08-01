export default function Lightbox({ src, onClose }) {
  if (!src) return null;
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 cursor-zoom-out"
      style={{ backgroundColor: 'rgba(10, 10, 10, 0.85)', backdropFilter: 'blur(8px)' }}
    >
      <img
        src={src}
        alt="Expanded view"
        className="max-w-[92vw] max-h-[92vh] object-contain rounded-xl shadow-2xl cursor-default"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center text-white"
        style={{ backgroundColor: 'rgba(245, 241, 234, 0.15)' }}
        aria-label="Close"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

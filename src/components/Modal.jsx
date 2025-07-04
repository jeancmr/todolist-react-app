import { useRef, useEffect } from 'react';

export default function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <dialog
      ref={modalRef}
      className="p-8 rounded-md backdrop:bg-black/50 fixed inset-0 m-auto open:flex open:flex-col open:items-center open:justify-center max-w-md bg-gray-800 text-white border-none"
    >
      {children}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 cursor-pointer px-2 py-1 bg-red-500 text-white rounded-xl"
      >
        &#x2716;
      </button>
    </dialog>
  );
}

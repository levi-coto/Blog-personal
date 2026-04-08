import { motion, AnimatePresence } from 'motion/react';

interface LanguageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (lang: 'es' | 'en') => void;
}

export function LanguageModal({ isOpen, onClose, onSelect }: LanguageModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-[100] backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white border border-black p-12 z-[101]"
          >
            <div className="text-center">
              <p className="quote-label mb-8 text-gray-400 uppercase tracking-widest">Select Language</p>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-12">Idioma</h2>
              
              <div className="grid grid-cols-1 gap-4">
                <button 
                  onClick={() => onSelect('es')}
                  className="group flex items-center justify-between border border-black p-6 hover:bg-black hover:text-white transition-all"
                >
                  <span className="text-xl font-bold uppercase">Español</span>
                  <span className="quote-label group-hover:text-white/50 uppercase tracking-widest">ES</span>
                </button>
                
                <button 
                  onClick={() => onSelect('en')}
                  className="group flex items-center justify-between border border-black p-6 hover:bg-black hover:text-white transition-all"
                >
                  <span className="text-xl font-bold uppercase">English</span>
                  <span className="quote-label group-hover:text-white/50 uppercase tracking-widest">EN</span>
                </button>
              </div>

              <button 
                onClick={onClose}
                className="mt-12 quote-label hover:line-through text-gray-400 uppercase tracking-widest"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

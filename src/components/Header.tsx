import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export function Header() {
  return (
    <header className="w-full border-b border-black bg-white sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-8 flex justify-between items-end">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="text-4xl font-black tracking-tighter uppercase leading-none"
          >
            Leví Coto
          </motion.h1>
          <p className="quote-label mt-2 uppercase tracking-widest">Personal Blog</p>
        </div>
        <nav className="flex gap-8">
          <Link to="/" className="quote-label hover:line-through transition-all uppercase tracking-widest">Home</Link>
          <Link to="/about" className="quote-label hover:line-through transition-all uppercase tracking-widest">About</Link>
        </nav>
      </div>
    </header>
  );
}

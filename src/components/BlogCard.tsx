import { format } from 'date-fns';
import { cn } from '../lib/utils';

interface BlogCardProps {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  onClick: () => void;
}

export function BlogCard({ title, date, excerpt, slug, onClick }: BlogCardProps) {
  return (
    <article className="group border-b border-black py-12 last:border-0">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <p className="quote-label text-gray-500 uppercase tracking-widest">Date</p>
          <p className="font-mono text-sm mt-1">{date}</p>
        </div>
        <div className="md:w-3/4">
          <button onClick={onClick} className="block group text-left w-full">
            <p className="text-xs font-mono text-gray-400 mb-2 italic">También disponible en español</p>
            <h2 className="text-3xl font-bold tracking-tight mb-4 group-hover:italic transition-all uppercase">
              {title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {excerpt}
            </p>
            <div className="flex items-center gap-2">
              <span className="quote-label uppercase tracking-widest">Read More</span>
              <div className="h-[1px] w-12 bg-black group-hover:w-24 transition-all duration-500" />
            </div>
          </button>
        </div>
      </div>
    </article>
  );
}

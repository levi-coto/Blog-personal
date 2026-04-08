import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { posts } from '../data/posts';
import ReactMarkdown from 'react-markdown';

export function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  const searchParams = new URLSearchParams(location.search);
  const lang = (searchParams.get('lang') as 'es' | 'en') || 'es';
  
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <p className="quote-label mb-8 uppercase tracking-widest">404 - Not Found</p>
        <button onClick={() => navigate('/')} className="quote-label hover:line-through uppercase tracking-widest">Back to Index</button>
      </div>
    );
  }

  const content = post[lang];

  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      <header className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <p className="quote-label uppercase tracking-widest">Essay</p>
          <div className="h-[1px] flex-grow bg-black opacity-20" />
          <p className="font-mono text-sm">{post.date}</p>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-8 uppercase">
          {content.title}
        </h1>
        <div className="h-1 w-24 bg-black" />
      </header>

      <div className="prose prose-lg prose-neutral max-w-none">
        <div className="markdown-body leading-relaxed text-xl text-gray-800 space-y-8">
          <ReactMarkdown>{content.content}</ReactMarkdown>
        </div>
      </div>

      <footer className="mt-20 pt-12 border-t border-black">
        <div className="flex justify-between items-center">
          <p className="quote-label uppercase tracking-widest">End of Transmission</p>
          <div className="flex gap-8">
            <button 
              onClick={() => navigate(`/blog/${slug}?lang=${lang === 'es' ? 'en' : 'es'}`)}
              className="quote-label hover:line-through uppercase tracking-widest"
            >
              {lang === 'es' ? 'Read in English' : 'Leer en Español'}
            </button>
            <button 
              onClick={() => navigate('/')}
              className="quote-label hover:line-through uppercase tracking-widest"
            >
              Back to Index
            </button>
          </div>
        </div>
      </footer>
    </article>
  );
}

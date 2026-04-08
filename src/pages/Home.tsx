import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { posts } from '../data/posts';
import { BlogCard } from '../components/BlogCard';
import { LanguageModal } from '../components/LanguageModal';

export function Home() {
  const navigate = useNavigate();
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const handlePostClick = (slug: string) => {
    setSelectedSlug(slug);
  };

  const handleLanguageSelect = (lang: 'es' | 'en') => {
    if (selectedSlug) {
      navigate(`/blog/${selectedSlug}?lang=${lang}`);
      setSelectedSlug(null);
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-20">
        <p className="quote-label mb-4 uppercase tracking-widest">Latest Essays</p>
        <div className="h-[1px] w-full bg-black" />
      </div>
      
      {posts.length > 0 ? (
        posts.map(post => (
          <BlogCard 
            key={post.id}
            title={post.en.title} // Use English title for index
            date={post.date}
            excerpt={post.en.excerpt} // Use English excerpt for index
            slug={post.slug}
            onClick={() => handlePostClick(post.slug)}
          />
        ))
      ) : (
        <div className="py-20 text-center">
          <p className="text-2xl font-light italic text-gray-400">No essays published yet.</p>
        </div>
      )}

      <LanguageModal 
        isOpen={!!selectedSlug}
        onClose={() => setSelectedSlug(null)}
        onSelect={handleLanguageSelect}
      />
    </main>
  );
}

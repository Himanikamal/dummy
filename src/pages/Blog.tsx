import { blogPosts } from '../data';
import { Calendar, ChevronRight } from 'lucide-react';

export default function Blog() {
  return (
    <div className="animate-in fade-in duration-500 py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Latest Blog Posts
          </h1>
          <p className="text-lg text-gray-500">
            Insights, trends, and tips from the world of footwear.
          </p>
        </div>

        <div className="space-y-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex items-center text-sm text-brand-600 font-medium mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                {post.published}
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 group-hover:text-brand-600 transition-colors">
                {post.title}
              </h2>
              
              <div className="text-gray-600 leading-relaxed space-y-4 mb-8">
                {Array.isArray(post.content) ? (
                  <ul className="list-disc pl-5 space-y-2">
                    {post.content.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{post.content}</p>
                )}
              </div>
              
              <button className="inline-flex items-center text-brand-600 font-medium hover:text-brand-700">
                Read full article <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
        
      </div>
    </div>
  );
}

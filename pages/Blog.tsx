import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight, Tag, Filter, Search, ChevronLeft, ChevronRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Tilottama College Secures Top Position in NEB Results",
    excerpt: "We are proud to announce that our students have once again achieved outstanding results in the Grade 12 board examinations, securing the district top position.",
    date: "August 15, 2024",
    author: "Admin",
    category: "Academic",
    image: "https://picsum.photos/800/400?random=201"
  },
  {
    id: 2,
    title: "Orientation Program for New Batch 2081",
    excerpt: "A warm welcome to the freshers! The orientation program for Grade 11 Science and Management streams was held successfully at the college auditorium.",
    date: "July 20, 2024",
    author: "Student Council",
    category: "Events",
    image: "https://picsum.photos/800/400?random=202"
  },
  {
    id: 3,
    title: "The Importance of Extra-Curricular Activities",
    excerpt: "Why sports and arts matter just as much as grades. Read about how Tilottama College integrates holistic development into the curriculum.",
    date: "July 05, 2024",
    author: "Dr. R. Pandey",
    category: "Editorial",
    image: "https://picsum.photos/800/400?random=203"
  },
  {
    id: 4,
    title: "Annual Sports Week 2080 Concludes",
    excerpt: "A week full of energy, passion, and sportsmanship. Check out the highlights and winners of the Annual Sports Meet.",
    date: "February 12, 2024",
    author: "Sports Club",
    category: "Sports",
    image: "https://picsum.photos/800/400?random=204"
  },
  {
    id: 6,
    title: "Farewell 2079 Batch",
    excerpt: "Emotional moments as we bid farewell to our graduating batch. We wish them all the best for their future endeavors.",
    date: "December 15, 2023",
    author: "Admin",
    category: "Events",
    image: "https://picsum.photos/800/400?random=206"
  }
];

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  // Reset pagination when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    scrollToTop();
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-primary-900 py-20 text-center">
        <h1 className="text-4xl font-bold text-white font-serif mb-4">News & Updates</h1>
        <p className="text-primary-100 max-w-2xl mx-auto text-lg">
          Stay updated with the latest happenings, announcements, and articles from Tilottama College.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Filter Tabs Section */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-10 flex flex-col md:flex-row justify-between items-center gap-4">
           <div className="flex items-center gap-2 text-gray-700 font-bold text-lg">
            <Filter size={20} className="text-primary-600" />
            <span>Filter News</span>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-primary-600 text-white shadow-md transform scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group h-full transform hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary-700 flex items-center gap-1 shadow-sm">
                      <Tag size={12} /> {post.category}
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} /> {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <User size={14} /> {post.author}
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <button className="flex items-center gap-2 text-primary-600 font-semibold text-sm hover:gap-3 transition-all mt-auto self-start">
                      Read More <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                <button
                  onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-gray-200 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed bg-white"
                >
                  <ChevronLeft size={20} />
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                      currentPage === page
                        ? 'bg-primary-600 text-white shadow-md'
                        : 'bg-white hover:bg-gray-100 text-gray-600 border border-gray-200'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-gray-200 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed bg-white"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
             <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
               <Search size={32} />
             </div>
             <h3 className="text-xl font-bold text-gray-900 mb-2">No updates found</h3>
             <p className="text-gray-500">There are no news items in this category.</p>
             <button 
               onClick={() => setSelectedCategory('All')}
               className="mt-4 text-primary-600 font-semibold hover:underline"
             >
               View All News
             </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
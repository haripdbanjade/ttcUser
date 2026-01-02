import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { id: 1, category: 'Campus', src: 'https://picsum.photos/800/600?random=101', title: 'Main Building' },
  { id: 2, category: 'Labs', src: 'https://picsum.photos/800/600?random=102', title: 'Chemistry Lab' },
  { id: 3, category: 'Events', src: 'https://picsum.photos/800/600?random=103', title: 'Annual Function' },
  { id: 4, category: 'Sports', src: 'https://picsum.photos/800/600?random=104', title: 'Cricket Tournament' },
  { id: 5, category: 'Campus', src: 'https://picsum.photos/800/600?random=105', title: 'Library' },
  { id: 6, category: 'Events', src: 'https://picsum.photos/800/600?random=106', title: 'Science Exhibition' },
  { id: 7, category: 'Labs', src: 'https://picsum.photos/800/600?random=107', title: 'Computer Lab' },
  { id: 8, category: 'Sports', src: 'https://picsum.photos/800/600?random=108', title: 'Football Match' },
  { id: 9, category: 'Events', src: 'https://picsum.photos/800/600?random=109', title: 'Welcome Program' },
  { id: 10, category: 'Campus', src: 'https://picsum.photos/800/600?random=110', title: 'College Garden' },
  { id: 11, category: 'Classrooms', src: 'https://picsum.photos/800/600?random=111', title: 'Lecture Hall' },
  { id: 12, category: 'Events', src: 'https://picsum.photos/800/600?random=112', title: 'Convocation' },
  { id: 13, category: 'Campus', src: 'https://picsum.photos/800/600?random=113', title: 'Canteen' },
  { id: 14, category: 'Labs', src: 'https://picsum.photos/800/600?random=114', title: 'Biology Lab' },
];

const categories = ['All', 'Campus', 'Labs', 'Events', 'Sports', 'Classrooms'];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 8;

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      const categoryFromHash = categories.find(c => c.toLowerCase() === hash);
      if (categoryFromHash) {
        setActiveCategory(categoryFromHash);
      }
    } else {
      setActiveCategory('All');
    }
  }, [location.hash]);

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  // Reset pagination on category change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const totalPages = Math.ceil(filteredImages.length / ITEMS_PER_PAGE);
  const currentImages = filteredImages.slice(
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

  const handleCategoryClick = (cat: string) => {
    if (cat === 'All') {
      navigate('/gallery');
    } else {
      navigate(`/gallery#${cat.toLowerCase()}`);
    }
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="bg-primary-900 py-20 text-center">
        <h1 className="text-4xl font-bold text-white font-serif mb-4">Photo Gallery</h1>
        <p className="text-primary-100 max-w-2xl mx-auto text-lg">
          Glimpses of life at Tilottama College.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-like Grid */}
        {currentImages.length > 0 ? (
          <>
            <div className="columns-1 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {currentImages.map((img, index) => (
                <div 
                  key={img.id} 
                  className="break-inside-avoid relative group rounded-xl overflow-hidden cursor-pointer bg-gray-100"
                  onClick={() => setSelectedImage(img.src)}
                >
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    loading={currentPage === 1 && index < 4 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700 block" 
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <span className="text-white font-bold text-lg">{img.title}</span>
                    <span className="text-gray-200 text-xs uppercase tracking-wider">{img.category}</span>
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
          <div className="text-center py-20">
             <p className="text-gray-500">No photos found in this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <img 
            src={selectedImage} 
            alt="Full size" 
            className="max-w-full max-h-[90vh] rounded-md shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
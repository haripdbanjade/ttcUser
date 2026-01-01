import React, { useState, useMemo, useEffect } from 'react';
import { Quote, Star, Filter, RefreshCcw, Search, ChevronLeft, ChevronRight } from 'lucide-react';

// Enhanced data structure with Course and Batch
const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Alumni",
    course: "+2 Science",
    batch: "2020",
    image: "https://i.pravatar.cc/150?u=10",
    text: "Tilottama gave me the foundation I needed to crack the IOE entrance. The faculty is incredibly supportive and the library resources are unmatched in the region."
  },
  {
    id: 2,
    name: "Priya Karki",
    role: "Student",
    course: "+2 Management",
    batch: "2023",
    image: "https://i.pravatar.cc/150?u=20",
    text: "Beyond academics, the extracurricular activities here helped me build confidence and leadership skills. The science labs are modern and we get plenty of practical exposure."
  },
  {
    id: 4,
    name: "Dr. Rita Pandey",
    role: "Parent",
    course: "Guardian",
    batch: "N/A",
    image: "https://i.pravatar.cc/150?u=40",
    text: "As a parent, I am very satisfied with the discipline and academic environment of Tilottama College. My daughter has grown significantly both academically and personally."
  },
  {
    id: 5,
    name: "Binod Chaudhary",
    role: "Alumni",
    course: "BBS",
    batch: "2018",
    image: "https://i.pravatar.cc/150?u=50",
    text: "The management faculty is top-notch. The case-study based approach in BBS helped me understand real-world business dynamics effectively."
  },
  {
    id: 6,
    name: "Anjali Gurung",
    role: "Alumni",
    course: "+2 Science",
    batch: "2019",
    image: "https://i.pravatar.cc/150?u=60",
    text: "I owe my success in the medical entrance exam to the rigorous coaching and guidance I received during my +2 Science years at Tilottama."
  },
  {
    id: 8,
    name: "Sunita Magar",
    role: "Alumni",
    course: "+2 Management",
    batch: "2021",
    image: "https://i.pravatar.cc/150?u=80",
    text: "I learned discipline and time management here. The faculty members are not just teachers but mentors for life."
  }
];

const Testimonials: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState('All');
  const [selectedBatch, setSelectedBatch] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  // Extract unique values for filters
  const courses = ['All', ...Array.from(new Set(testimonials.map(t => t.course)))];
  // Extract unique batches, filter out N/A for cleaner look if desired, or keep it. Sorting to keep years in order.
  const batches = ['All', ...Array.from(new Set(testimonials.map(t => t.batch))).filter(b => b !== 'N/A').sort().reverse()];

  // Filter Logic
  const filteredTestimonials = useMemo(() => {
    return testimonials.filter(t => {
      const matchCourse = selectedCourse === 'All' || t.course === selectedCourse;
      const matchBatch = selectedBatch === 'All' || t.batch === selectedBatch;
      return matchCourse && matchBatch;
    });
  }, [selectedCourse, selectedBatch]);

  // Reset pagination on filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCourse, selectedBatch]);

  const totalPages = Math.ceil(filteredTestimonials.length / ITEMS_PER_PAGE);
  const currentTestimonials = filteredTestimonials.slice(
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

  const handleReset = () => {
    setSelectedCourse('All');
    setSelectedBatch('All');
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-primary-900 py-20 text-center">
        <h1 className="text-4xl font-bold text-white font-serif mb-4">Student Stories</h1>
        <p className="text-primary-100 max-w-2xl mx-auto text-lg">
          Hear from our students, alumni, and parents about their journey with Tilottama College.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Filter Section */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-700 font-bold text-lg">
            <Filter size={20} className="text-primary-600" />
            <span>Filter Stories</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            {/* Course Filter */}
            <div className="relative">
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="appearance-none w-full sm:w-48 bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-primary-500 cursor-pointer"
              >
                <option value="All">All Courses</option>
                {courses.filter(c => c !== 'All').map(course => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>

            {/* Batch Filter */}
            <div className="relative">
              <select
                value={selectedBatch}
                onChange={(e) => setSelectedBatch(e.target.value)}
                className="appearance-none w-full sm:w-48 bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-primary-500 cursor-pointer"
              >
                <option value="All">All Batches</option>
                {batches.filter(b => b !== 'All').map(batch => (
                  <option key={batch} value={batch}>Batch {batch}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>

            {/* Reset Button */}
            <button 
              onClick={handleReset}
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-colors font-medium"
              title="Reset Filters"
            >
              <RefreshCcw size={18} />
              <span className="sm:hidden">Reset</span>
            </button>
          </div>
        </div>

        {/* Results Grid */}
        {filteredTestimonials.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentTestimonials.map((t) => (
                <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-all duration-300 group">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-primary-600 bg-primary-50 px-2 py-1 rounded-md">
                      {t.course === 'Guardian' ? 'Parent' : `${t.course}`}
                    </span>
                  </div>
                  
                  <div className="relative mb-6 flex-grow">
                    <Quote className="absolute -top-2 -left-2 text-primary-100 w-10 h-10 transform -scale-x-100 group-hover:text-primary-200 transition-colors" />
                    <p className="text-gray-600 italic leading-relaxed relative z-10 pl-4 text-sm">
                      "{t.text}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-primary-50" 
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="font-medium">{t.role}</span>
                        {t.batch !== 'N/A' && (
                          <>
                            <span>&bull;</span>
                            <span>Batch {t.batch}</span>
                          </>
                        )}
                      </div>
                    </div>
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">No stories found</h3>
            <p className="text-gray-500 mb-6">We couldn't find any testimonials matching your filters.</p>
            <button 
              onClick={handleReset}
              className="text-primary-600 font-semibold hover:underline"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
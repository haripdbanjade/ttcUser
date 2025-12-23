import React, { useState, useEffect } from 'react';
import { FileText, Download, Calendar, BookOpen, ClipboardList, Award, File, Search, Filter, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface DownloadItem {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  size: string;
  image?: string;
  icon: React.ElementType;
}

const downloadItems: DownloadItem[] = [
  {
    id: '1',
    title: '+2 Science Admission Form 2081',
    description: 'Official application form for Grade 11 Science stream admission.',
    category: 'Admission Forms',
    date: 'June 10, 2024',
    size: '1.2 MB',
    icon: FileText
  },
  {
    id: '2',
    title: 'Management Admission Form 2081',
    description: 'Application form for Grade 11 Management stream.',
    category: 'Admission Forms',
    date: 'June 10, 2024',
    size: '1.1 MB',
    icon: FileText
  },
  {
    id: '3',
    title: 'Academic Calendar 2081/82',
    description: 'Complete yearly calendar including holidays, exams, and events.',
    category: 'Academic Calendar',
    date: 'May 01, 2024',
    size: '2.5 MB',
    image: 'https://picsum.photos/400/200?random=100',
    icon: Calendar
  },
  {
    id: '4',
    title: 'Grade 11 Science Syllabus',
    description: 'Detailed curriculum for Physics, Chemistry, Biology, and Math.',
    category: 'Syllabus',
    date: 'April 15, 2024',
    size: '3.4 MB',
    icon: BookOpen
  },
  {
    id: '5',
    title: 'BSc. CSIT Entrance Syllabus',
    description: 'Topic-wise weightage and syllabus for TU Entrance Exam.',
    category: 'Syllabus',
    date: 'March 20, 2024',
    size: '0.8 MB',
    icon: BookOpen
  },
  {
    id: '6',
    title: 'First Terminal Exam Routine',
    description: 'Schedule for Grade 11 and 12 internal examinations.',
    category: 'Exam Routine',
    date: 'August 05, 2024',
    size: '0.5 MB',
    image: 'https://picsum.photos/400/200?random=101',
    icon: ClipboardList
  },
  {
    id: '7',
    title: 'Scholarship Entrance Result 2081',
    description: 'List of students selected for merit-based scholarships.',
    category: 'Results',
    date: 'July 25, 2024',
    size: '1.5 MB',
    icon: Award
  },
  {
    id: '8',
    title: 'Library Membership Form',
    description: 'Form to apply for a digital library card.',
    category: 'Other Forms',
    date: 'January 10, 2024',
    size: '0.3 MB',
    icon: File
  },
  {
    id: '9',
    title: 'Sports Week Registration',
    description: 'Team registration form for upcoming annual sports meet.',
    category: 'Other Forms',
    date: 'September 01, 2024',
    size: '0.4 MB',
    icon: File
  },
  {
    id: '10',
    title: 'BBS Syllabus 1st Year',
    description: 'Complete syllabus for Bachelor of Business Studies 1st Year.',
    category: 'Syllabus',
    date: 'February 10, 2024',
    size: '1.1 MB',
    icon: BookOpen
  },
  {
    id: '11',
    title: 'Second Terminal Exam Result',
    description: 'Results for the second terminal examination conducted in December.',
    category: 'Results',
    date: 'January 05, 2024',
    size: '2.0 MB',
    icon: Award
  }
];

const categories = [
  'All',
  'Admission Forms',
  'Academic Calendar',
  'Syllabus',
  'Exam Routine',
  'Results',
  'Other Forms'
];

const Downloads: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 9;

  const filteredItems = downloadItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesDate = true;
    if (filterDate) {
      const itemDate = new Date(item.date);
      // Parse YYYY-MM-DD from filterDate to compare correctly without timezone issues
      const [y, m, d] = filterDate.split('-').map(Number);
      matchesDate = itemDate.getFullYear() === y &&
                    itemDate.getMonth() === m - 1 &&
                    itemDate.getDate() === d;
    }

    return matchesCategory && matchesSearch && matchesDate;
  });

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, filterDate]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const currentItems = filteredItems.slice(
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

  const handleClearFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setFilterDate('');
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-primary-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white font-serif mb-4">Downloads & Resources</h1>
          <p className="text-primary-100 max-w-2xl mx-auto text-lg">
            Access important documents, forms, routines, and results conveniently from one place.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Controls */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-12">
          <div className="flex flex-col xl:flex-row justify-between gap-6 items-center">
            
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center xl:justify-start gap-2 w-full xl:w-auto">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Right Side Filters */}
            <div className="flex flex-col md:flex-row gap-4 w-full xl:w-auto">
               
               {/* Date Filter */}
               <div className="relative flex-grow md:w-48">
                 <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    <Calendar size={18} />
                 </div>
                 <input 
                    type="date" 
                    value={filterDate}
                    onChange={(e) => setFilterDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-gray-600 text-sm"
                    placeholder="Filter by date"
                 />
                 {filterDate && (
                    <button 
                      onClick={() => setFilterDate('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X size={16} />
                    </button>
                 )}
               </div>

               {/* Search */}
               <div className="relative flex-grow md:w-64">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                 <input 
                   type="text" 
                   placeholder="Search documents..."
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm"
                 />
                 {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X size={16} />
                    </button>
                 )}
               </div>

            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map(item => (
            <div key={item.id} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col overflow-hidden">
              
              {/* Optional Preview Image */}
              {item.image && (
                <div className="h-40 overflow-hidden relative border-b border-gray-100">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                    Preview Available
                  </div>
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-lg ${
                    item.image ? 'bg-primary-50 text-primary-600' : 'bg-primary-50 text-primary-600'
                  }`}>
                    <item.icon size={24} />
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-600 rounded">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow">
                  {item.description}
                </p>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <div className="text-xs text-gray-500 flex flex-col">
                    <span>{item.date}</span>
                    <span className="font-medium">{item.size}</span>
                  </div>
                  <button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">
                    <Download size={16} /> Download
                  </button>
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
        
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
              <Filter size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No documents found</h3>
            <p className="text-gray-600">Try adjusting your search or filters.</p>
            <button 
              onClick={handleClearFilters}
              className="mt-6 text-primary-600 font-semibold hover:underline"
            >
              Clear Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Downloads;
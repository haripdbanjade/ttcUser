import React, { useState, useEffect } from 'react';
import { FileText, Download, Calendar, BookOpen, ClipboardList, Award, File, Search, Filter, ChevronLeft, ChevronRight, X, GraduationCap, Briefcase } from 'lucide-react';

interface DownloadItem {
  id: string;
  title: string;
  description: string;
  category: string;
  level: '+2' | 'BBA' | 'MBA' | 'General';
  date: string;
  size: string;
  image?: string;
  icon: React.ElementType;
}

const downloadItems: DownloadItem[] = [
  // +2 Items
  {
    id: 'p2-form-sci',
    title: '+2 Science Admission Form 2081',
    description: 'Official application form for Grade 11 Science stream admission.',
    category: 'Admission Forms',
    level: '+2',
    date: 'June 10, 2024',
    size: '1.2 MB',
    icon: FileText
  },
  {
    id: 'p2-form-mgmt',
    title: '+2 Management Admission Form 2081',
    description: 'Application form for Grade 11 Management stream.',
    category: 'Admission Forms',
    level: '+2',
    date: 'June 10, 2024',
    size: '1.1 MB',
    icon: FileText
  },
  {
    id: 'p2-calendar',
    title: '+2 Academic Calendar 2081/82',
    description: 'Yearly calendar for +2 programs, including holidays, exams, and events.',
    category: 'Academic Calendar',
    level: '+2',
    date: 'May 01, 2024',
    size: '2.5 MB',
    image: 'https://picsum.photos/400/200?random=100',
    icon: Calendar
  },
  {
    id: 'p2-routine-1',
    title: '+2 First Terminal Exam Routine',
    description: 'Schedule for Grade 11 and 12 internal examinations.',
    category: 'Exam Routine',
    level: '+2',
    date: 'August 05, 2024',
    size: '0.5 MB',
    image: 'https://picsum.photos/400/200?random=101',
    icon: ClipboardList
  },
  {
    id: 'p2-result-scholarship',
    title: '+2 Scholarship Entrance Result 2081',
    description: 'List of students selected for merit-based scholarships.',
    category: 'Results',
    level: '+2',
    date: 'July 25, 2024',
    size: '1.5 MB',
    icon: Award
  },
  {
    id: 'p2-result-2',
    title: '+2 Second Terminal Exam Result',
    description: 'Results for the second terminal examination conducted in December.',
    category: 'Results',
    level: '+2',
    date: 'January 05, 2024',
    size: '2.0 MB',
    icon: Award
  },

  // BBA Items
  { id: 'bba-form', title: 'BBA Admission Form', description: 'Application form for the Bachelor of Business Administration program.', category: 'Admission Forms', level: 'BBA', date: 'July 15, 2024', size: '1.4 MB', icon: FileText },
  { id: 'bba-calendar', title: 'BBA Academic Calendar 2081/82', description: 'Detailed semester-wise calendar for all BBA batches.', category: 'Academic Calendar', level: 'BBA', date: 'July 16, 2024', size: '1.8 MB', icon: Calendar },
  { id: 'bba-routine-1', title: 'BBA 1st & 3rd Sem Exam Routine', description: 'Examination schedule for the Fall semester.', category: 'Exam Routine', level: 'BBA', date: 'Nov 01, 2024', size: '0.6 MB', icon: ClipboardList },
  { id: 'bba-result-1', title: 'BBA 1st & 3rd Sem Results', description: 'Official results for the Fall semester examinations.', category: 'Results', level: 'BBA', date: 'Jan 20, 2025', size: '1.9 MB', icon: Award },
  { id: 'bba-project-guide', title: 'BBA Project Work Guidelines', description: 'Guidelines for 6th semester project work submission.', category: 'Other Forms', level: 'BBA', date: 'Feb 10, 2025', size: '0.8 MB', icon: File },

  // MBA Items
  { id: 'mba-form', title: 'MBA Admission Form', description: 'Application form for the Master of Business Administration program.', category: 'Admission Forms', level: 'MBA', date: 'July 15, 2024', size: '1.5 MB', icon: FileText },
  { id: 'mba-calendar', title: 'MBA Academic Calendar 2081/82', description: 'Detailed trimester-wise calendar for all MBA batches.', category: 'Academic Calendar', level: 'MBA', date: 'July 16, 2024', size: '1.7 MB', icon: Calendar },
  { id: 'mba-routine-1', title: 'MBA 1st Trimester Exam Routine', description: 'Examination schedule for the Fall trimester.', category: 'Exam Routine', level: 'MBA', date: 'Oct 25, 2024', size: '0.5 MB', icon: ClipboardList },
  { id: 'mba-result-1', title: 'MBA 1st Trimester Results', description: 'Official results for the Fall trimester examinations.', category: 'Results', level: 'MBA', date: 'Jan 15, 2025', size: '1.1 MB', icon: Award },
  { id: 'mba-thesis-guide', title: 'MBA Thesis Guidelines', description: 'Guidelines for final semester thesis submission.', category: 'Other Forms', level: 'MBA', date: 'Mar 01, 2025', size: '0.9 MB', icon: File },

  // General Items
  { id: 'scholarship-policy', title: 'Scholarship Policy & Guidelines', description: 'Official document outlining all scholarship types, eligibility, and application procedures.', category: 'Other Forms', level: 'General', date: 'May 20, 2024', size: '0.8 MB', icon: Award },
  { id: 'lib-form', title: 'Library Membership Form', description: 'Form to apply for a digital library card, applicable to all students.', category: 'Other Forms', level: 'General', date: 'January 10, 2024', size: '0.3 MB', icon: File },
  { id: 'sports-form', title: 'Sports Week Registration', description: 'Team registration form for upcoming annual sports meet.', category: 'Other Forms', level: 'General', date: 'September 01, 2024', size: '0.4 MB', icon: File },

  // Syllabi (with levels)
  { id: 's1', title: '+2 Science with Computer', description: 'Syllabus for the computer group. Includes mandatory Mathematics.', category: 'Syllabus', level: '+2', date: 'April 15, 2024', size: '2.1 MB', icon: BookOpen },
  { id: 's2', title: '+2 Science with Biology', description: 'Syllabus for the biology group. Includes mandatory Mathematics.', category: 'Syllabus', level: '+2', date: 'April 15, 2024', size: '2.3 MB', icon: BookOpen },
  { id: 's4', title: '+2 Management (Hotel Management - H.M.)', description: 'Specialized syllabus for students pursuing Hotel Management.', category: 'Syllabus', level: '+2', date: 'April 15, 2024', size: '1.5 MB', icon: BookOpen },
  { id: 's5', title: '+2 Management (Finance)', description: 'Specialized syllabus for students focusing on Finance.', category: 'Syllabus', level: '+2', date: 'April 15, 2024', size: '1.4 MB', icon: BookOpen },
  { id: 's6', title: '+2 Management (Computer)', description: 'Specialized syllabus for students taking Computer Science.', category: 'Syllabus', level: '+2', date: 'April 15, 2024', size: '1.6 MB', icon: BookOpen },
  ...Array.from({ length: 8 }, (_, i) => ({ id: `bba${i + 1}`, title: `BBA ${i + 1}${i === 0 ? 'st' : i === 1 ? 'nd' : i === 2 ? 'rd' : 'th'} Semester Syllabus (Updated)`, description: `Updated syllabus for BBA ${i + 1}${i === 0 ? 'st' : i === 1 ? 'nd' : i === 2 ? 'rd' : 'th'} Semester, affiliated with Pokhara University.`, category: 'Syllabus', level: 'BBA' as const, date: 'March 01, 2024', size: `${(0.8 + i * 0.1).toFixed(1)} MB`, icon: BookOpen })),
  ...Array.from({ length: 4 }, (_, i) => ({ id: `mba${i + 1}`, title: `MBA ${i + 1}${i === 0 ? 'st' : i === 1 ? 'nd' : i === 2 ? 'rd' : 'th'} Semester Syllabus (Updated)`, description: `Updated syllabus for MBA ${i + 1}${i === 0 ? 'st' : i === 1 ? 'nd' : i === 2 ? 'rd' : 'th'} Semester, affiliated with Pokhara University.`, category: 'Syllabus', level: 'MBA' as const, date: 'March 01, 2024', size: `${(1.1 + i * 0.1).toFixed(1)} MB`, icon: BookOpen })),
];

const levels: { id: string, label: string, icon: React.ElementType }[] = [
  { id: 'All', label: 'All Levels', icon: Award },
  { id: '+2', label: '+2 Programs', icon: BookOpen },
  { id: 'BBA', label: 'BBA Program', icon: Briefcase },
  { id: 'MBA', label: 'MBA Program', icon: GraduationCap },
  { id: 'General', label: 'General', icon: File },
];

const Downloads: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 9;

  const itemsFilteredByLevel = downloadItems.filter(item => {
    return selectedLevel === 'All' || item.level === selectedLevel;
  });

  const availableCategories = ['All', ...Array.from(new Set(itemsFilteredByLevel.map(item => item.category)))];

  useEffect(() => {
    if (!availableCategories.includes(selectedCategory)) {
      setSelectedCategory('All');
    }
  }, [selectedLevel, selectedCategory, availableCategories]);

  const filteredItems = itemsFilteredByLevel.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedLevel, selectedCategory, searchQuery]);

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
    setSelectedLevel('All');
    setSelectedCategory('All');
    setSearchQuery('');
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-primary-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white font-serif mb-4">Downloads & Resources</h1>
          <p className="text-primary-100 max-w-2xl mx-auto text-lg">
            Access important documents, forms, routines, and results conveniently from one place.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-12 space-y-6">
          {/* Level Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {levels.map(level => (
              <button
                key={level.id}
                onClick={() => setSelectedLevel(level.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedLevel === level.id
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <level.icon size={16} /> {level.label}
              </button>
            ))}
          </div>
          
          <hr className="border-gray-100" />

          <div className="flex flex-col xl:flex-row justify-between gap-6 items-center">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center xl:justify-start gap-2 w-full xl:w-auto">
              {availableCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-blue-500 text-white shadow'
                      : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative flex-grow w-full xl:w-auto xl:max-w-xs">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map(item => (
            <div key={item.id} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col overflow-hidden transform hover:-translate-y-1">
              {item.image && (
                <div className="h-40 overflow-hidden relative border-b border-gray-100">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-lg bg-primary-50 text-primary-600">
                    <item.icon size={24} />
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-600 rounded">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded uppercase">
                      {item.level}
                    </span>
                  </div>
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

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button onClick={() => handlePageChange(Math.max(currentPage - 1, 1))} disabled={currentPage === 1} className="p-2 rounded-lg border border-gray-200 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed bg-white">
              <ChevronLeft size={20} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button key={page} onClick={() => handlePageChange(page)} className={`w-10 h-10 rounded-lg font-medium transition-colors ${currentPage === page ? 'bg-primary-600 text-white shadow-md' : 'bg-white hover:bg-gray-100 text-gray-600 border border-gray-200'}`}>
                {page}
              </button>
            ))}
            <button onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))} disabled={currentPage === totalPages} className="p-2 rounded-lg border border-gray-200 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed bg-white">
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
            <button onClick={handleClearFilters} className="mt-6 text-primary-600 font-semibold hover:underline">
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Downloads;
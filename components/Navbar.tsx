import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, GraduationCap, Search, FileText, ChevronRight, Loader2, AlertCircle, CheckCircle, ChevronDown } from 'lucide-react';

// Mock Search Data
const searchIndex = [
  { title: 'Admissions', path: '/admissions', type: 'Page' },
  { title: '+2 Science', path: '/academics', type: 'Program' },
  { title: '+2 Management', path: '/academics', type: 'Program' },
  { title: 'BSc. CSIT', path: '/academics', type: 'Program' },
  { title: 'BBS', path: '/academics', type: 'Program' },
  { title: 'Scholarships', path: '/admissions', type: 'Info' },
  { title: 'Contact Us', path: '/contact', type: 'Page' },
  { title: 'Photo Gallery', path: '/gallery', type: 'Media' },
  { title: 'Downloads', path: '/downloads', type: 'Resources' },
  { title: 'News & Events', path: '/blog', type: 'Blog' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Feature States
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showResultModal, setShowResultModal] = useState(false);
  
  // Result Checker States
  const [symbolNo, setSymbolNo] = useState('');
  const [dob, setDob] = useState('');
  const [batch, setBatch] = useState('');
  const [year, setYear] = useState('');
  const [checkingResult, setCheckingResult] = useState(false);
  const [resultData, setResultData] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter Search Results
  const searchResults = searchQuery.trim() === '' 
    ? [] 
    : searchIndex.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));

  // Mock Result Check
  const handleCheckResult = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckingResult(true);
    
    // Simulate API delay
    setTimeout(() => {
      setCheckingResult(false);
      // Mock logic: Even symbol numbers pass, odd fail (just for demo)
      const isPass = parseInt(symbolNo) % 2 === 0;
      setResultData({
        symbolNo,
        batch,
        year,
        studentName: "Student Name (Mock)",
        gpa: isPass ? "3.65" : "N/A",
        status: isPass ? "PASSED" : "PENDING",
        remarks: isPass ? "Congratulations!" : "Please contact administration."
      });
    }, 1500);
  };

  const resetResultForm = () => {
    setResultData(null);
    setSymbolNo('');
    setDob('');
    setBatch('');
    setYear('');
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { 
      label: 'About', 
      path: '/about',
      children: [
        { label: 'Introduction', path: '/about' },
        { label: 'Board of Directors', path: '/board' },
        { label: 'Our Team', path: '/team' },
      ]
    },
    { label: 'Academics', path: '/academics' },
    { label: 'Admissions', path: '/admissions' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav className={`sticky top-0 z-40 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md border-transparent' 
          : 'bg-white shadow-sm border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? 'h-16' : 'h-20'
          }`}>
            {/* Logo */}
            <div 
              className="flex-shrink-0 flex items-center cursor-pointer group"
              onClick={() => navigate('/')}
            >
              <div className={`bg-primary-700 rounded-lg flex items-center justify-center text-white mr-3 shadow-lg group-hover:scale-105 transition-all duration-300 ${
                isScrolled ? 'h-8 w-8' : 'h-10 w-10'
              }`}>
                <GraduationCap size={isScrolled ? 20 : 24} />
              </div>
              <div>
                <h1 className={`font-bold text-gray-900 tracking-tight font-serif transition-all duration-300 ${
                  isScrolled ? 'text-lg' : 'text-xl'
                }`}>Tilottama College</h1>
                <p className={`text-primary-600 font-medium tracking-wide uppercase transition-all duration-300 ${
                  isScrolled ? 'text-[10px]' : 'text-xs'
                }`}>Excellence in Education</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <div key={link.label} className="relative group">
                  <div className="flex items-center">
                    {link.children ? (
                        <div
                          className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 border-b-2 px-3 py-2 cursor-pointer ${
                             link.children.some(c => location.pathname === c.path) || isActive(link.path)
                              ? 'border-primary-600 text-primary-700'
                              : 'border-transparent text-gray-500 hover:text-primary-600 hover:border-primary-200'
                          }`}
                        >
                            {link.label}
                            <ChevronDown size={14} className="mt-0.5 group-hover:rotate-180 transition-transform duration-300" />
                        </div>
                    ) : (
                        <Link
                            to={link.path}
                            className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 border-b-2 px-3 py-2 ${
                            isActive(link.path)
                                ? 'border-primary-600 text-primary-700'
                                : 'border-transparent text-gray-500 hover:text-primary-600 hover:border-primary-200'
                            }`}
                        >
                            {link.label}
                        </Link>
                    )}
                  </div>
                  
                  {/* Dropdown Menu */}
                  {link.children && (
                    <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.path}
                          className={`block w-full text-left px-4 py-3 text-sm hover:bg-primary-50 hover:text-primary-700 transition-colors ${
                            location.pathname === child.path ? 'bg-primary-50 text-primary-700 font-semibold' : 'text-gray-600'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="h-6 w-px bg-gray-200 mx-2"></div>

              {/* Action Icons */}
              <button 
                onClick={() => setShowSearch(true)}
                className="p-2 text-gray-500 hover:text-primary-600 hover:bg-primary-50 rounded-full transition-colors"
                title="Search"
              >
                <Search size={20} />
              </button>

              <button 
                onClick={() => setShowResultModal(true)}
                className="flex items-center gap-2 text-gray-500 hover:text-primary-600 hover:bg-primary-50 px-3 py-1.5 rounded-full transition-colors text-sm font-medium"
                title="Check Results"
              >
                <FileText size={18} />
                <span className="hidden xl:inline">Results</span>
              </button>

              <button 
                onClick={() => navigate('/admissions')}
                className={`bg-primary-700 hover:bg-primary-800 text-white rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ml-2 ${
                  isScrolled ? 'px-4 py-1.5 text-xs' : 'px-5 py-2 text-sm'
                }`}
              >
                Apply Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
               <button 
                onClick={() => setShowSearch(true)}
                className="text-gray-500 hover:text-primary-600"
              >
                <Search size={24} />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-500 hover:text-gray-700 p-2 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg h-screen overflow-y-auto pb-20">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <button
                    onClick={() => {
                      if (link.children) {
                        setMobileSubmenuOpen(mobileSubmenuOpen === link.label ? null : link.label);
                      } else {
                        navigate(link.path);
                        setIsOpen(false);
                      }
                    }}
                    className={`flex items-center justify-between w-full text-left px-3 py-3 rounded-md text-base font-medium ${
                      isActive(link.path)
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600'
                    }`}
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-200 ${mobileSubmenuOpen === link.label ? 'rotate-180' : ''}`} 
                      />
                    )}
                  </button>
                  
                  {/* Mobile Submenu */}
                  {link.children && mobileSubmenuOpen === link.label && (
                    <div className="bg-gray-50 rounded-lg ml-3 mt-1 overflow-hidden">
                      {link.children.map((child) => (
                        <button
                          key={child.label}
                          onClick={() => {
                            navigate(child.path);
                            setIsOpen(false);
                          }}
                          className={`block w-full text-left px-4 py-3 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-100 border-l-2 border-transparent hover:border-primary-400`}
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
               <button 
                onClick={() => {
                  setShowResultModal(true);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 w-full text-left px-3 py-3 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-primary-600`}
              >
                <FileText size={18} /> Check Results
              </button>
              <button 
                onClick={() => {
                  navigate('/admissions');
                  setIsOpen(false);
                }}
                className="w-full mt-4 bg-primary-700 text-white py-3 rounded-md font-medium shadow-md"
              >
                Apply Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* --- Search Modal --- */}
      {showSearch && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex items-center gap-3">
              <Search className="text-gray-400" size={24} />
              <input 
                type="text" 
                placeholder="Search for programs, notices, pages..." 
                className="flex-1 text-lg outline-none text-gray-800 placeholder:text-gray-400"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button onClick={() => setShowSearch(false)} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>
            <div className="bg-gray-50 p-4 min-h-[100px] max-h-[400px] overflow-y-auto">
              {searchQuery === '' ? (
                 <div className="text-center text-gray-500 py-8">
                   <p className="text-sm">Type to start searching</p>
                 </div>
              ) : searchResults.length > 0 ? (
                <div className="space-y-2">
                  {searchResults.map((result, idx) => (
                    <button 
                      key={idx}
                      onClick={() => {
                        navigate(result.path);
                        setShowSearch(false);
                      }}
                      className="w-full flex items-center justify-between p-3 bg-white hover:bg-primary-50 rounded-lg border border-gray-200 hover:border-primary-100 transition-all group text-left"
                    >
                      <div>
                        <h4 className="font-semibold text-gray-800 group-hover:text-primary-700">{result.title}</h4>
                        <span className="text-xs text-gray-500 uppercase tracking-wider">{result.type}</span>
                      </div>
                      <ChevronRight size={18} className="text-gray-300 group-hover:text-primary-500" />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  <p>No results found for "{searchQuery}"</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* --- Result Checker Modal --- */}
      {showResultModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden relative">
             <button 
                onClick={() => { setShowResultModal(false); resetResultForm(); }} 
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>

             <div className="bg-primary-900 p-6 text-center">
               <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                 <FileText className="text-white" size={32} />
               </div>
               <h2 className="text-2xl font-bold text-white font-serif">Check Results</h2>
               <p className="text-primary-200 text-sm">Enter your academic details to view results</p>
             </div>

             <div className="p-8">
               {!resultData ? (
                 <form onSubmit={handleCheckResult} className="space-y-4">
                   <div className="grid grid-cols-2 gap-4">
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Batch</label>
                       <select 
                          required
                          value={batch}
                          onChange={(e) => setBatch(e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none bg-white"
                       >
                         <option value="">Select Batch</option>
                         <option value="2081">2081</option>
                         <option value="2080">2080</option>
                         <option value="2079">2079</option>
                         <option value="2078">2078</option>
                       </select>
                     </div>
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Year/Level</label>
                        <select 
                          required
                          value={year}
                          onChange={(e) => setYear(e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none bg-white"
                       >
                         <option value="">Select Level</option>
                         <option value="Class 11">Class 11</option>
                         <option value="Class 12">Class 12</option>
                         <option value="1st Year">1st Year</option>
                         <option value="2nd Year">2nd Year</option>
                         <option value="3rd Year">3rd Year</option>
                         <option value="4th Year">4th Year</option>
                       </select>
                     </div>
                   </div>

                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Symbol Number</label>
                     <input 
                        type="text" 
                        required
                        value={symbolNo}
                        onChange={(e) => setSymbolNo(e.target.value)}
                        placeholder="e.g., 20810123"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none"
                     />
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                     <input 
                        type="date" 
                        required
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none"
                     />
                   </div>
                   <button 
                    type="submit" 
                    disabled={checkingResult}
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                   >
                     {checkingResult ? <Loader2 className="animate-spin" size={20} /> : 'View Result'}
                   </button>
                 </form>
               ) : (
                 <div className="text-center space-y-4">
                   <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold ${
                     resultData.status === 'PASSED' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                   }`}>
                     {resultData.status === 'PASSED' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                     {resultData.status}
                   </div>
                   
                   <div className="bg-gray-50 rounded-lg p-4 text-left space-y-2 border border-gray-100">
                     <div className="flex justify-between border-b border-gray-200 pb-2">
                       <span className="text-gray-500">Academic Year</span>
                       <span className="font-bold text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded">{resultData.batch} - {resultData.year}</span>
                     </div>
                     <div className="flex justify-between border-b border-gray-200 pb-2">
                       <span className="text-gray-500">Symbol No</span>
                       <span className="font-bold">{resultData.symbolNo}</span>
                     </div>
                     <div className="flex justify-between border-b border-gray-200 pb-2">
                       <span className="text-gray-500">Student Name</span>
                       <span className="font-bold">{resultData.studentName}</span>
                     </div>
                     <div className="flex justify-between pb-1">
                       <span className="text-gray-500">GPA</span>
                       <span className="font-bold text-primary-600">{resultData.gpa}</span>
                     </div>
                   </div>
                   
                   <p className="text-sm text-gray-500">{resultData.remarks}</p>
                   
                   <button 
                    onClick={resetResultForm}
                    className="text-primary-600 font-semibold hover:underline text-sm"
                   >
                     Check Another Result
                   </button>
                 </div>
               )}
             </div>
          </div>
        </div>
      )}
    </>
  );
};
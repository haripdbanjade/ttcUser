import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, GraduationCap, Search, ChevronRight, ChevronDown, Camera, Globe } from 'lucide-react';
import { programs } from '../data/programsData';
import { motion, AnimatePresence } from 'framer-motion';

// Mock Search Data
const searchIndex = [
  { title: 'Admissions', path: '/admissions', type: 'Page' },
  { title: '+2 Science', path: '/academics#science', type: 'Program' },
  { title: '+2 Management', path: '/academics#management', type: 'Program' },
  { title: 'BBA', path: '/academics#bba', type: 'Program' },
  { title: 'MBA', path: '/academics#mba', type: 'Program' },
  { title: 'Scholarships', path: '/admissions', type: 'Info' },
  { title: 'Contact Us', path: '/contact', type: 'Page' },
  { title: 'Photo Gallery', path: '/gallery', type: 'Media' },
  { title: 'Virtual Tour', path: '/tour', type: 'Media' },
  { title: 'Downloads', path: '/downloads', type: 'Resources' },
  { title: 'Careers', path: '/careers', type: 'Page' },
];

const nebPrograms = programs.filter(p => p.affiliation === 'NEB');
const puPrograms = programs.filter(p => p.affiliation === 'PU');

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const [language, setLanguage] = useState('en');
  
  const location = useLocation();
  const navigate = useNavigate();

  // Feature States
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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

  const navLinks = [
    { label: 'Home', path: '/' },
    { 
      label: 'About', 
      path: '/about',
      children: [
        { label: 'Introduction', path: '/about' },
        { label: 'Our Achievements', path: '/achievements' },
        { label: 'Board of Directors', path: '/board' },
        { label: 'Our Team', path: '/team' },
      ]
    },
    { 
      label: 'Academics', 
      path: '/academics',
      isMega: true, // Flag for special dropdown
    },
    { 
      label: 'Admissions', 
      path: '/admissions',
      children: [
        { label: 'Admission Overview', path: '/admissions' },
        { label: 'NEB (+2) Process', path: '/admissions#neb' },
        { label: 'PU (Bachelor/Master) Process', path: '/admissions#pu' },
      ]
    },
    { 
      label: 'Gallery', 
      path: '/gallery',
      children: [
        { label: 'All Photos', path: '/gallery' },
        { label: 'Campus Life', path: '/gallery#campus' },
        { label: 'Labs & Facilities', path: '/gallery#labs' },
        { label: 'Events & Fests', path: '/gallery#events' },
        { label: 'Sports', path: '/gallery#sports' },
        { label: 'Classrooms', path: '/gallery#classrooms' },
      ]
    },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  const AcademicDropdown = ({ isMobile = false }) => {
    const handleLinkClick = (path: string) => {
      navigate(path);
      if (isMobile) setIsOpen(false);
    };

    const linkClass = (path: string) => `block w-full text-left px-4 py-3 text-sm hover:bg-primary-50 hover:text-primary-700 transition-colors ${
      location.pathname + location.hash === path || (path === location.pathname && !location.hash)
        ? 'bg-primary-50 text-primary-700 font-semibold' 
        : 'text-gray-600'
    }`;
    
    const mobileLinkClass = (path: string) => `block w-full text-left px-4 py-3 text-sm hover:bg-gray-100 border-l-2 ${
      location.pathname + location.hash === path || (path === location.pathname && !location.hash)
        ? 'text-primary-600 bg-gray-100 border-primary-500 font-semibold'
        : 'text-gray-600 border-transparent hover:text-primary-600 hover:border-primary-400'
    }`;

    if (isMobile) {
      return (
        <div className="bg-gray-50 rounded-lg ml-3 mt-1 overflow-hidden">
          <Link to="/academics" onClick={() => setIsOpen(false)} className={mobileLinkClass("/academics")}>All Programs</Link>
          <div className="px-4 pt-3 pb-1 text-xs font-bold text-gray-400 uppercase tracking-wider">NEB Programs</div>
          {nebPrograms.map(p => <button key={p.id} onClick={() => handleLinkClick(`/academics#${p.id}`)} className={mobileLinkClass(`/academics#${p.id}`)}>{p.title}</button>)}
          <div className="px-4 pt-3 pb-1 text-xs font-bold text-gray-400 uppercase tracking-wider">PU Programs</div>
          {puPrograms.map(p => <button key={p.id} onClick={() => handleLinkClick(`/academics#${p.id}`)} className={mobileLinkClass(`/academics#${p.id}`)}>{p.title}</button>)}
        </div>
      );
    }
    
    return (
      <div className="absolute left-0 mt-0 w-64 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
        <Link to="/academics" className={linkClass("/academics")}>All Programs</Link>
        <div className="border-t border-gray-100">
          <div className="px-4 pt-3 pb-1 text-xs font-bold text-gray-400 uppercase tracking-wider">NEB Programs</div>
          {nebPrograms.map(p => <Link key={p.id} to={`/academics#${p.id}`} className={linkClass(`/academics#${p.id}`)}>{p.title}</Link>)}
        </div>
        <div className="border-t border-gray-100">
          <div className="px-4 pt-3 pb-1 text-xs font-bold text-gray-400 uppercase tracking-wider">PU Programs</div>
          {puPrograms.map(p => <Link key={p.id} to={`/academics#${p.id}`} className={linkClass(`/academics#${p.id}`)}>{p.title}</Link>)}
        </div>
      </div>
    );
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: [0.25, 1, 0.5, 1] } },
    exit: { opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.2 } },
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
            <motion.div 
              whileHover={{ scale: 1.02 }}
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
                 <div className="flex items-center gap-2">
                    <p className={`text-primary-600 font-medium tracking-wide uppercase transition-all duration-300 ${
                      isScrolled ? 'text-[10px]' : 'text-xs'
                    }`}>Excellence in Education</p>
                    <span className={`hidden sm:inline-block bg-green-100 text-green-800 text-[9px] font-bold px-2 py-0.5 rounded-full`}>ISO Certified</span>
                </div>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <div key={link.label} className="relative group">
                  <div className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 border-b-2 px-3 py-2 cursor-pointer ${
                      isActive(link.path)
                      ? 'border-primary-600 text-primary-700'
                      : 'border-transparent text-gray-500 hover:text-primary-600 hover:border-primary-200'
                  }`}>
                    <Link to={link.path}>{link.label}</Link>
                    {(link.children || link.isMega) && <ChevronDown size={14} className="mt-0.5 group-hover:rotate-180 transition-transform duration-300" />}
                  </div>
                  
                  {/* Dropdown Menu */}
                  {link.children && !link.isMega && (
                    <div className="absolute left-0 mt-0 w-56 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.path}
                          className={`block w-full text-left px-4 py-3 text-sm hover:bg-primary-50 hover:text-primary-700 transition-colors ${
                            location.pathname + location.hash === child.path || (child.path === location.pathname && !location.hash)
                              ? 'bg-primary-50 text-primary-700 font-semibold' 
                              : 'text-gray-600'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  {link.isMega && <AcademicDropdown />}
                </div>
              ))}
              
              {/* Language Selector */}
              <div className="relative group">
                <button className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-primary-600 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  <Globe size={16} />
                  <span>{language === 'en' ? 'EN' : 'NE'}</span>
                  <ChevronDown size={14} />
                </button>
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
                  <button onClick={() => setLanguage('en')} className={`w-full text-left px-4 py-2 text-sm ${language === 'en' ? 'bg-primary-50 text-primary-700 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}>English (EN)</button>
                  <button onClick={() => setLanguage('ne')} className={`w-full text-left px-4 py-2 text-sm ${language === 'ne' ? 'bg-primary-50 text-primary-700 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}>नेपाली (NE)</button>
                </div>
              </div>

              <div className="h-6 w-px bg-gray-200 mx-2"></div>

              {/* Action Icons */}
              <button 
                onClick={() => setShowSearch(true)}
                className="p-2 text-gray-500 hover:text-primary-600 hover:bg-primary-50 rounded-full transition-all duration-300"
                title="Search"
              >
                <Search size={20} />
              </button>

              <motion.button 
                onClick={() => navigate('/tour')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-primary-700 text-white rounded-full font-medium shadow-md ml-2 transition-all duration-300 flex items-center gap-2 ${
                  isScrolled ? 'px-4 py-1.5 text-xs' : 'px-5 py-2 text-sm'
                }`}
              >
                <Camera size={isScrolled ? 14: 16} /> Virtual Tour
              </motion.button>
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
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={isOpen ? 'x' : 'menu'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg"
            >
              <div className="px-4 pt-2 pb-6 space-y-2 h-screen overflow-y-auto">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <button
                      onClick={() => {
                        if (link.children || link.isMega) {
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
                      {(link.children || link.isMega) && (
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-200 ${mobileSubmenuOpen === link.label ? 'rotate-180' : ''}`} 
                        />
                      )}
                    </button>
                    
                    {/* Mobile Submenu */}
                    {link.children && !link.isMega && mobileSubmenuOpen === link.label && (
                      <div className="bg-gray-50 rounded-lg ml-3 mt-1 overflow-hidden">
                        {link.children.map((child) => (
                          <button
                            key={child.label}
                            onClick={() => {
                              navigate(child.path);
                              setIsOpen(false);
                            }}
                            className={`block w-full text-left px-4 py-3 text-sm hover:bg-gray-100 border-l-2 ${
                              location.pathname + location.hash === child.path || (child.path === location.pathname && !location.hash)
                                ? 'text-primary-600 bg-gray-100 border-primary-500 font-semibold'
                                : 'text-gray-600 border-transparent hover:text-primary-600 hover:border-primary-400'
                            }`}
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    )}
                    {link.isMega && mobileSubmenuOpen === link.label && <AcademicDropdown isMobile={true} />}
                  </div>
                ))}
                
                <div className="px-3 pt-4 mt-4 border-t border-gray-100">
                  <p className="text-xs font-bold text-gray-400 uppercase mb-2">Language</p>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => { setLanguage('en'); setIsOpen(false); }}
                      className={`w-1/2 py-2 rounded-md text-sm font-medium transition-colors ${language === 'en' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                    >
                      English
                    </button>
                    <button 
                      onClick={() => { setLanguage('ne'); setIsOpen(false); }}
                      className={`w-1/2 py-2 rounded-md text-sm font-medium transition-colors ${language === 'ne' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                    >
                      नेपाली
                    </button>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    navigate('/tour');
                    setIsOpen(false);
                  }}
                  className="w-full mt-6 bg-primary-700 text-white py-3 rounded-md font-medium shadow-md flex items-center justify-center gap-2"
                >
                  <Camera size={18} /> Virtual Tour
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- Search Modal --- */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4"
          >
            <motion.div 
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden"
            >
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import Downloads from './pages/Downloads';
import Testimonials from './pages/Testimonials';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Team from './pages/Team';
import Board from './pages/Board';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Careers from './pages/Careers';
import Tour from './pages/Tour';
import Scholarships from './pages/Scholarships';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import { ArrowUp, X, FileText, Loader2, AlertCircle, CheckCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  // Result Checker Modal State
  const [showResultModal, setShowResultModal] = useState(false);
  const [symbolNo, setSymbolNo] = useState('');
  const [dob, setDob] = useState('');
  const [program, setProgram] = useState('');
  const [year, setYear] = useState('');
  const [checkingResult, setCheckingResult] = useState(false);
  const [resultData, setResultData] = useState<any>(null);

  const yearOptions: { [key: string]: string[] } = {
    '+2 Science': ['Class 11', 'Class 12'],
    '+2 Management': ['Class 11', 'Class 12'],
    'BBA': ['1st Year', '2nd Year', '3rd Year', '4th Year'],
    'MBA': ['1st Year', '2nd Year'],
  };
  
  const handleCheckResult = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckingResult(true);
    setTimeout(() => {
      setCheckingResult(false);
      const isPass = parseInt(symbolNo) % 2 === 0;
      setResultData({
        symbolNo,
        program,
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
    setProgram('');
    setYear('');
  };


  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Handle Scroll Watcher
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: [0.25, 1, 0.5, 1] } },
    exit: { opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/board" element={<Board />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/tour" element={<Tour />} />
              <Route path="/scholarships" element={<Scholarships />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/careers" element={<Careers />} />
              {/* Fallback route */}
              <Route path="*" element={<Home />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setShowResultModal={setShowResultModal} />
      <ChatWidget />

      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 left-6 z-40 bg-gray-900 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-primary-600 hover:-translate-y-1 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>

      {/* --- Result Checker Modal --- */}
      <AnimatePresence>
        {showResultModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          >
            <motion.div 
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden relative"
            >
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
                 <AnimatePresence mode="wait">
                   {!resultData ? (
                     <motion.form 
                        key="form"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        onSubmit={handleCheckResult} className="space-y-4"
                     >
                       <div>
                         <label className="block text-sm font-medium text-gray-700 mb-1">Program</label>
                         <select 
                            required
                            value={program}
                            onChange={(e) => {
                              setProgram(e.target.value);
                              setYear(''); // Reset year when program changes
                            }}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none bg-white"
                         >
                           <option value="">Select Program</option>
                           <option value="+2 Science">+2 Science</option>
                           <option value="+2 Management">+2 Management</option>
                           <option value="BBA">BBA</option>
                           <option value="MBA">MBA</option>
                         </select>
                       </div>

                       <div>
                         <label className="block text-sm font-medium text-gray-700 mb-1">Year / Level</label>
                          <select 
                            required
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            disabled={!program}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none bg-white disabled:bg-gray-100"
                         >
                           <option value="">Select Year</option>
                           {program && yearOptions[program]?.map(y => (
                              <option key={y} value={y}>{y}</option>
                           ))}
                         </select>
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
                       <motion.button 
                        type="submit" 
                        disabled={checkingResult}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                       >
                         {checkingResult ? <Loader2 className="animate-spin" size={20} /> : 'View Result'}
                       </motion.button>
                     </motion.form>
                   ) : (
                     <motion.div 
                        key="result"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="text-center space-y-4"
                     >
                       <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold ${
                         resultData.status === 'PASSED' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                       }`}>
                         {resultData.status === 'PASSED' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                         {resultData.status}
                       </div>
                       
                       <div className="bg-gray-50 rounded-lg p-4 text-left space-y-2 border border-gray-100">
                         <div className="flex justify-between border-b border-gray-200 pb-2">
                           <span className="text-gray-500">Program</span>
                           <span className="font-bold text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded">{resultData.program} - {resultData.year}</span>
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
                     </motion.div>
                   )}
                 </AnimatePresence>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
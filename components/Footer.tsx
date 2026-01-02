import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, GraduationCap, ExternalLink, Phone, Mail, MapPin, Send, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FooterProps {
  setShowResultModal: (show: boolean) => void;
}

const Footer: React.FC<FooterProps> = ({ setShowResultModal }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Info & General Contact */}
          <div className="col-span-1">
            <div className="flex items-center text-white mb-4">
              <GraduationCap className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold font-serif">Tilottama College</span>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Empowering students with knowledge, skills, and values since 1996. A premier institution for Science, Management, and IT.
            </p>
            
            <div className="space-y-3 text-sm text-gray-400 mb-6">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-500 mt-0.5 shrink-0" />
                <span>Tilottama-2, Yogikuti,<br/>Rupandehi, Nepal</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary-500 shrink-0" />
                <span>+977-71-123456, 9857012345</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary-500 shrink-0" />
                <span>info@tilottama.edu.np</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-300"><Facebook size={18} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-300"><Twitter size={18} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-300"><Instagram size={18} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-300"><Linkedin size={18} /></a>
            </div>

            <div className="mt-8">
                <h4 className="text-green-400 font-bold text-sm">ISO 9001:2015 Certified</h4>
                <p className="text-xs text-gray-400">Quality Management System</p>
            </div>
          </div>
          
          {/* Column 2: Explore */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase text-sm tracking-wider flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary-500"></span> Explore
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/scholarships" className="hover:text-primary-400 transition-all duration-300 flex items-center gap-2 hover:translate-x-1">Scholarships</Link></li>
              <li><Link to="/blog" className="hover:text-primary-400 transition-all duration-300 flex items-center gap-2 hover:translate-x-1">News & Events</Link></li>
              <li><Link to="/tour" className="hover:text-primary-400 transition-all duration-300 flex items-center gap-2 hover:translate-x-1">Virtual Tour</Link></li>
              <li><Link to="/careers" className="hover:text-primary-400 transition-all duration-300 flex items-center gap-2 hover:translate-x-1">Careers</Link></li>
              <li><Link to="/testimonials" className="hover:text-primary-400 transition-all duration-300 flex items-center gap-2 hover:translate-x-1">Testimonials</Link></li>
              <li><Link to="/downloads" className="hover:text-primary-400 transition-all duration-300 flex items-center gap-2 hover:translate-x-1">Downloads</Link></li>
              <li><button onClick={() => setShowResultModal(true)} className="hover:text-primary-400 transition-all duration-300 flex items-center gap-2 hover:translate-x-1 w-full text-left">Check Results</button></li>
            </ul>
          </div>

          {/* Column 3: Important Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase text-sm tracking-wider flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary-500"></span> Important Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://pu.edu.np/notice/exam/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-all duration-300 flex items-center gap-2 hover:translate-x-1">
                  <ExternalLink size={14} /> PU Exam Result
                </a>
              </li>
              <li>
                <a href="https://pu.edu.np/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-all duration-300 flex items-center gap-2 hover:translate-x-1">
                  <ExternalLink size={14} /> Pokhara University (PU)
                </a>
              </li>
              <li>
                <a href="https://www.neb.gov.np/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-all duration-300 flex items-center gap-2 hover:translate-x-1">
                  <ExternalLink size={14} /> National Exam Board (NEB)
                </a>
              </li>
              <li>
                <a href="https://moe.gov.np/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-all duration-300 flex items-center gap-2 hover:translate-x-1">
                  <ExternalLink size={14} /> Ministry of Education
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase text-sm tracking-wider flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary-500"></span> Newsletter
            </h3>
            <p className="text-sm text-gray-400 mb-4">Subscribe to our newsletter to get the latest updates, news and academic notices.</p>
            
            <form onSubmit={handleSubscribe} className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-gray-800 text-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 border border-gray-700 placeholder:text-gray-500 pr-12"
              />
              <button 
                type="submit" 
                className={`absolute right-1 top-1 bottom-1 px-3 rounded-md transition-all ${
                  subscribed ? 'bg-green-600 text-white' : 'bg-primary-600 hover:bg-primary-700 text-white'
                }`}
              >
                {subscribed ? <Check size={18} /> : <Send size={18} />}
              </button>
            </form>

            <div className="mt-6">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Key Contacts</h4>
               <div className="flex flex-col gap-2 text-xs text-gray-400">
                  <div className="flex justify-between border-b border-gray-800 pb-1">
                    <span>Admission</span>
                    <span className="text-gray-300">9857033333</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-800 pb-1">
                    <span>Exam Section</span>
                    <span className="text-gray-300">9857044444</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Tilottama Campus. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-300">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-gray-300">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
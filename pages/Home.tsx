import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, BookOpen, Users, Trophy, Bell, Download, 
  FileText, Calendar, ChevronLeft, ChevronRight, Star, Quote, Clock, Award, Medal 
} from 'lucide-react';

// Mock Data for Home Page
const heroSlides = [
  {
    image: "https://picsum.photos/1920/1080?random=1",
    title: "Shape Your Future at Tilottama",
    subtitle: "Excellence in Education Since 1996"
  },
  {
    image: "https://picsum.photos/1920/1080?random=2",
    title: "State-of-the-art Facilities",
    subtitle: "Modern Science & Computer Labs"
  },
  {
    image: "https://picsum.photos/1920/1080?random=3",
    title: "Holistic Development",
    subtitle: "Sports, Arts, and Leadership Programs"
  }
];

const notices = [
  { date: "15 July", title: "Class 11 Entrance Results Published" },
  { date: "12 July", title: "Important Notice for Grade 12 Board Exams" },
  { date: "10 July", title: "Admissions Open for BBA & MBA Programs" },
  { date: "05 July", title: "Scholarship Application Deadline Extended" }
];

const events = [
  { day: "20", month: "AUG", title: "Welcome Orientation 2024", time: "10:00 AM" },
  { day: "05", month: "SEP", title: "Teachers Day Celebration", time: "11:00 AM" },
  { day: "15", month: "SEP", title: "Inter-College Science Exhibition", time: "09:00 AM" }
];

const featuredPrograms = [
  { title: "+2 Science", desc: "Physics, Chemistry, Biology/Math", icon: "🧬" },
  { title: "+2 Management", desc: "Computer Science, Hotel Management", icon: "📊" },
  { title: "BBA", desc: "Business Administration & Leadership", icon: "📈" }
];

const testimonials = [
  { name: "Aarav Sharma", role: "Alumni, Batch 2020", text: "Tilottama gave me the foundation I needed to crack the IOE entrance. The faculty is incredibly supportive." },
  { name: "Priya Karki", role: "Grade 12 Student", text: "Beyond academics, the extracurricular activities here helped me build confidence and leadership skills." },
  { name: "Suman Thapa", role: "BBA Student, Batch 2022", text: "The BBA program is fantastic. We have regular case study competitions and the teachers really help us bridge the gap between theory and industry needs." },
  { name: "Binod Chaudhary", role: "Alumni, BBA Batch 2018", text: "The faculty is top-notch. The practical, project-based approach in BBA helped me understand real-world business dynamics effectively." }
];

const awards = [
  {
    title: "Best College 2023",
    org: "Ministry of Education",
    desc: "Ranked 1st in the region for academic excellence in Science and Management streams.",
    icon: Trophy,
    color: "bg-amber-100 text-amber-600"
  },
  {
    title: "QAA Accreditation",
    org: "UGC Nepal",
    desc: "Officially accredited for maintaining high standards in higher education and institutional quality.",
    icon: Award,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "National Education Award",
    org: "Government of Nepal",
    desc: "Honored for contribution to the educational development of Western Nepal.",
    icon: Medal,
    color: "bg-red-100 text-red-600"
  },
  {
    title: "Sports Excellence",
    org: "National Sports Council",
    desc: "Winner of consecutive inter-college championships in Cricket and Football.",
    icon: Star,
    color: "bg-green-100 text-green-600"
  }
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Banner Slider */}
      <div className="relative h-[500px] md:h-[600px] w-full bg-gray-900 overflow-hidden group">
        {heroSlides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[10000ms]"
              style={{ backgroundImage: `url("${slide.image}")` }}
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex items-center justify-center text-center px-4">
              <div className="max-w-4xl space-y-4">
                <span className="inline-block py-1 px-3 rounded-full bg-primary-500/80 text-white text-xs md:text-sm font-semibold tracking-wider uppercase mb-2">
                  Admissions Open 2024
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-white font-serif leading-tight drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-200 drop-shadow-md">
                  {slide.subtitle}
                </p>
                <div className="pt-6">
                  <button 
                    onClick={() => navigate('/admissions')}
                    className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-semibold transition-all shadow-lg text-lg flex items-center gap-2 mx-auto"
                  >
                    Apply Now <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider Controls */}
        <button 
          onClick={prevSlide} 
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={nextSlide} 
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
        >
          <ChevronRight size={32} />
        </button>
        
        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                idx === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* 2. Quick Links Bar */}
      <div className="bg-primary-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button onClick={() => navigate('/admissions')} className="flex items-center justify-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group">
              <FileText className="text-yellow-400 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Apply Online</span>
            </button>
            <button className="flex items-center justify-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group">
              <Bell className="text-yellow-400 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Notices</span>
            </button>
            <button onClick={() => navigate('/academics')} className="flex items-center justify-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group">
              <BookOpen className="text-yellow-400 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Programs</span>
            </button>
            <button onClick={() => navigate('/downloads')} className="flex items-center justify-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group">
              <Download className="text-yellow-400 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Downloads</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2.5 Affiliations */}
      <div className="bg-white border-b border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <p className="text-center text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">Affiliated With & Accredited By</p>
           <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              
              {/* NEB */}
              <div className="group flex flex-col items-center gap-3 cursor-pointer">
                 <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center border-2 border-transparent group-hover:border-red-500 group-hover:bg-red-50 transition-all">
                    <span className="text-2xl font-black text-gray-700 group-hover:text-red-600 transition-colors">NEB</span>
                 </div>
                 <span className="text-xs font-bold text-gray-500 uppercase group-hover:text-red-600 transition-colors">National Exam Board</span>
              </div>

              {/* TU */}
              <div className="group flex flex-col items-center gap-3 cursor-pointer">
                 <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center border-2 border-transparent group-hover:border-blue-600 group-hover:bg-blue-50 transition-all">
                    <span className="text-2xl font-black text-gray-700 group-hover:text-blue-800 transition-colors">TU</span>
                 </div>
                 <span className="text-xs font-bold text-gray-500 uppercase group-hover:text-blue-800 transition-colors">Tribhuvan University</span>
              </div>

               {/* PU */}
               <div className="group flex flex-col items-center gap-3 cursor-pointer">
                 <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center border-2 border-transparent group-hover:border-purple-600 group-hover:bg-purple-50 transition-all">
                    <span className="text-2xl font-black text-gray-700 group-hover:text-purple-800 transition-colors">PU</span>
                 </div>
                 <span className="text-xs font-bold text-gray-500 uppercase group-hover:text-purple-800 transition-colors">Pokhara University</span>
              </div>

           </div>
        </div>
      </div>

      {/* 3. Highlights / Why Us */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-2">Why Choose Us</h2>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">Excellence in Every Aspect</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="text-center p-8 rounded-2xl bg-gray-50 hover:shadow-xl transition-shadow border border-gray-100 group">
               <div className="w-16 h-16 mx-auto bg-blue-100 text-primary-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                 <Users size={32} />
               </div>
               <h3 className="text-xl font-bold mb-3">Expert Faculty</h3>
               <p className="text-gray-600">Learn from seasoned educators and industry professionals dedicated to your success.</p>
             </div>
             <div className="text-center p-8 rounded-2xl bg-gray-50 hover:shadow-xl transition-shadow border border-gray-100 group">
               <div className="w-16 h-16 mx-auto bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                 <Trophy size={32} />
               </div>
               <h3 className="text-xl font-bold mb-3">Top Results</h3>
               <p className="text-gray-600">Consistently producing board toppers and excellent results in NEB and TU examinations.</p>
             </div>
             <div className="text-center p-8 rounded-2xl bg-gray-50 hover:shadow-xl transition-shadow border border-gray-100 group">
               <div className="w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                 <BookOpen size={32} />
               </div>
               <h3 className="text-xl font-bold mb-3">Modern Resources</h3>
               <p className="text-gray-600">Fully equipped science labs, computer labs, and a digital library to support your learning.</p>
             </div>
          </div>
        </div>
      </div>

      {/* 4. Featured Programs */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between items-end mb-12">
             <div>
               <h2 className="text-3xl font-bold text-gray-900 font-serif">Featured Programs</h2>
               <p className="text-gray-600 mt-2">Discover the right path for your career.</p>
             </div>
             <button onClick={() => navigate('/academics')} className="hidden md:flex items-center text-primary-600 font-semibold hover:gap-2 transition-all">
               View All Programs <ArrowRight size={20} className="ml-1" />
             </button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {featuredPrograms.map((prog, idx) => (
               <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-primary-600 flex flex-col">
                 <div className="text-4xl mb-4 bg-gray-50 w-16 h-16 flex items-center justify-center rounded-full">{prog.icon}</div>
                 <h3 className="text-xl font-bold text-gray-900 mb-2">{prog.title}</h3>
                 <p className="text-gray-600 mb-6 flex-grow">{prog.desc}</p>
                 <button onClick={() => navigate('/academics')} className="text-sm font-bold text-primary-600 uppercase tracking-wide flex items-center gap-1 hover:gap-2 transition-all self-start">
                   Learn More <ArrowRight size={16} />
                 </button>
               </div>
             ))}
           </div>
           
           <div className="mt-8 text-center md:hidden">
              <button onClick={() => navigate('/academics')} className="text-primary-600 font-semibold">View All Programs</button>
           </div>
        </div>
      </div>

      {/* 5. Notices & Events */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Notices */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900 font-serif flex items-center gap-2">
                  <Bell className="text-primary-600" /> Recent Notices
                </h2>
                <button className="text-sm text-primary-600 font-medium hover:underline">View Archive</button>
              </div>
              <div className="space-y-4">
                {notices.map((notice, idx) => (
                  <div key={idx} className="flex gap-4 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary-50 rounded-lg flex flex-col items-center justify-center text-primary-700 border border-primary-100">
                      <span className="text-xs font-bold uppercase tracking-wider">{notice.date.split(' ')[1]}</span>
                      <span className="text-2xl font-bold">{notice.date.split(' ')[0]}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">{notice.title}</h4>
                      <span className="text-xs text-gray-500 mt-1 inline-block">General Administration</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Events */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900 font-serif flex items-center gap-2">
                  <Calendar className="text-primary-600" /> Upcoming Events
                </h2>
                <button className="text-sm text-primary-600 font-medium hover:underline">Calendar</button>
              </div>
              <div className="space-y-6">
                {events.map((event, idx) => (
                  <div key={idx} className="flex items-center gap-6 group cursor-pointer">
                    <div className="flex-shrink-0 text-center w-14">
                      <span className="block text-3xl font-bold text-gray-300 group-hover:text-primary-600 transition-colors">{event.day}</span>
                      <span className="block text-xs font-bold text-gray-400 uppercase">{event.month}</span>
                    </div>
                    <div className="pb-6 border-b border-gray-100 flex-grow last:border-0 last:pb-0">
                      <h4 className="font-bold text-gray-900 text-lg group-hover:text-primary-600 transition-colors">{event.title}</h4>
                      <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                        <Clock size={14} /> {event.time} &bull; College Hall
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 6. Achievements (Stats) */}
      <div className="py-16 bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <Trophy size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">25+</div>
              <div className="text-primary-200 font-medium">Years of Excellence</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">10k+</div>
              <div className="text-primary-200 font-medium">Alumni Network</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-primary-200 font-medium">Pass Rate (Science)</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-primary-200 font-medium">Awards Won</div>
            </div>
          </div>
        </div>
      </div>

      {/* 7. Awards and Recognition */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Pride</h2>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">Awards & Recognition</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 text-center group hover:-translate-y-1">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${award.color}`}>
                  <award.icon size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{award.title}</h3>
                <p className="text-xs font-bold text-primary-600 uppercase tracking-wide mb-3">{award.org}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{award.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 8. Principal Message */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-gray-50 rounded-3xl p-8 md:p-16 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-bl-full -mr-16 -mt-16 opacity-50"></div>

            <div className="w-full md:w-1/3 relative z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-600 rounded-2xl transform rotate-3 translate-x-2 translate-y-2"></div>
                <img 
                  src="https://picsum.photos/600/600?random=10" 
                  alt="Principal" 
                  className="rounded-2xl shadow-lg w-full object-cover aspect-square relative z-10"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-8 relative z-10">
              <div className="space-y-2">
                <h4 className="text-primary-600 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-primary-600 inline-block"></span>
                  Message from the Principal
                </h4>
                <h2 className="text-3xl font-bold text-gray-900 font-serif">Welcome to Tilottama</h2>
              </div>
              <div className="relative">
                <Quote className="absolute -top-6 -left-6 text-primary-200 w-16 h-16 transform -scale-x-100 opacity-40" />
                <p className="text-gray-700 leading-relaxed text-lg relative z-10 italic">
                  "Education is not just about gathering knowledge, but about shaping character. At Tilottama College, we strive to provide an environment where students can explore their potential, challenge their limits, and emerge as leaders of tomorrow. We are committed to academic excellence and holistic growth."
                </p>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-xl font-serif">Dr. Ram Chandra Pandey</p>
                <p className="text-primary-600 font-medium">Campus Chief</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 9. Testimonials */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 font-serif mb-12">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-left relative hover:shadow-md transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map(s => <Star key={s} size={16} className="text-yellow-400 fill-current" />)}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                     <img src={`https://i.pravatar.cc/150?u=${idx + 10}`} alt={t.name} />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 text-sm">{t.name}</h5>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 10. Gallery Preview */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-bold text-gray-900 font-serif">Campus Life</h2>
            <button className="text-primary-600 font-semibold hover:gap-2 transition-all flex items-center">View Gallery <ArrowRight size={16} className="ml-1" /></button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[400px]">
            <div className="col-span-2 row-span-2 rounded-xl overflow-hidden relative group cursor-pointer">
              <img src="https://picsum.photos/800/800?random=20" alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-medium">Cultural Fest 2023</span>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden relative group cursor-pointer">
              <img src="https://picsum.photos/400/400?random=21" alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="rounded-xl overflow-hidden relative group cursor-pointer">
              <img src="https://picsum.photos/400/400?random=22" alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="col-span-2 rounded-xl overflow-hidden relative group cursor-pointer">
              <img src="https://picsum.photos/800/400?random=23" alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-medium">Sports Week Finals</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Award, CheckCircle, Quote, Trophy, Medal, Star, Users, Monitor, Zap, Book, Bus, Coffee, Home, Activity, Mic, ChevronDown, HelpCircle, Beaker, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  // State for FAQ accordion
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const teamMembers = [
    {
      name: "Prof. Dr. Ram Chandra Acharya",
      role: "Principal",
      qualification: "Ph.D. in Economics",
      image: "https://picsum.photos/400/400?random=50"
    },
    {
      name: "Mukunda Raj Acharya",
      role: "Vice-Principal",
      qualification: "M.A. Mathematics",
      image: "https://picsum.photos/400/400?random=51"
    },
    {
      name: "Mrs. Sarita Sharma",
      role: "+2 Coordinator",
      qualification: "M.A. English",
      image: "https://picsum.photos/400/400?random=52"
    },
    {
      name: "Dr. Santosh Gyawali",
      role: "Head of Management",
      qualification: "PhD, TU",
      image: "https://picsum.photos/400/400?random=53"
    }
  ];

  const milestones = [
    { year: "1996", title: "Establishment", desc: "Founded with a vision to provide quality higher education in Rupandehi." },
    { year: "1999", title: "First BBA Program", desc: "Pioneered management education by launching the first BBA program in the region." },
    { year: "2000", title: "Expansion", desc: "Introduced Science stream at +2 level with modern laboratories." },
    { year: "2015", title: "MBA Program", desc: "Launched the Master of Business Administration program to shape future business leaders." },
    { year: "2023", title: "Best College Award", desc: "Recognized as the best college in the province for academic results." }
  ];

  const achievements = [
    {
      title: "Best College 2023",
      year: "2023",
      description: "Awarded by the Ministry of Education for outstanding academic performance in Science and Management.",
      icon: Trophy,
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      title: "ISO 9001:2015 Certified",
      year: "2024",
      description: "Awarded for maintaining international standards in quality management systems for education.",
      icon: CheckCircle,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Sports Champions",
      year: "2023",
      description: "Winner of the Inter-College Cricket and Football tournaments in Rupandehi district.",
      icon: Medal,
      color: "bg-blue-100 text-blue-600"
    }
  ];

  const coreValues = [
    "Academic Excellence",
    "Integrity & Ethics",
    "Student-Centered Learning",
    "Social Responsibility",
    "Innovation & Research"
  ];

  const usps = [
    {
      title: "Experienced Faculty",
      description: "Our team consists of highly qualified professors and industry experts dedicated to student success.",
      icon: Users,
      color: "text-blue-600 bg-blue-50"
    },
    {
      title: "Outstanding Results",
      description: "Consistently achieving top ranks in NEB board examinations with a 98% pass rate.",
      icon: Trophy,
      color: "text-amber-600 bg-amber-50"
    },
    {
      title: "Modern Infrastructure",
      description: "Fully equipped science laboratories, computer labs, and a vast digital library for practical learning.",
      icon: Monitor,
      color: "text-purple-600 bg-purple-50"
    },
    {
      title: "Holistic Development",
      description: "A vibrant campus life with sports, cultural clubs, and leadership programs to nurture soft skills.",
      icon: Zap,
      color: "text-green-600 bg-green-50"
    }
  ];

  const facilities = [
    { icon: Book, title: "Resourceful Library", desc: "A vast collection of 20,000+ books, journals, and digital resources." },
    { icon: Beaker, title: "Advanced Labs", desc: "Separate, fully-equipped laboratories for Physics, Chemistry, and Biology." },
    { icon: Monitor, title: "Computer Labs", desc: "High-tech computer labs with high-speed internet for IT students." },
    { icon: Bus, title: "Transportation", desc: "Fleet of buses covering major routes in Butwal and Bhairahawa." },
    { icon: Home, title: "Hostel Facilities", desc: "Separate, secure, and comfortable hostel accommodation for boys and girls." },
    { icon: Coffee, title: "Cafeteria", desc: "Serving healthy and nutritious meals and snacks in a clean environment." },
    { icon: Activity, title: "Sports Complex", desc: "Basketball court, football ground, cricket pitch, and indoor games." },
    { icon: Mic, title: "Auditorium", desc: "Spacious hall for seminars, workshops, cultural programs, and conferences." },
  ];

  const aboutFaqs = [
    { q: "Is Tilottama College a public or private institution?", a: "Tilottama College is a private academic institution established in 1996, managed by a team of academicians and social workers dedicated to educational excellence." },
    { q: "Where is the college located exactly?", a: "The college is located in Tilottama-2, Yogikuti, Rupandehi. It is situated roughly midway between Butwal and Bhairahawa, easily accessible via the Siddhartha Highway." },
    { q: "What is the student-teacher ratio?", a: "We maintain an optimal student-teacher ratio of 25:1 in practical sessions and 40:1 in theory classes to ensure personalized attention and mentorship for every student." },
    { q: "Does the college provide scholarships?", a: "Yes, we offer various merit-based and need-based scholarships. Full scholarships are awarded to board toppers and entrance exam toppers. Details can be found in the Admissions section." },
    { q: "What extracurricular activities are available?", a: "We have active clubs for Science, IT, Literature, and Sports. We regularly organize debates, hackathons, sports weeks, and cultural fests." },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <div className="bg-primary-900 py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/600?grayscale&blur=2')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">About Tilottama College</h1>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            A legacy of 25+ years in shaping the minds of tomorrow through academic rigor and holistic development.
          </p>
        </div>
      </div>

      {/* 2.1 Introduction */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 font-serif">A Center of Academic Excellence</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Tilottama College, established in 1996, stands as a beacon of quality education in Western Nepal. Affiliated with the 
                <span className="font-semibold text-primary-700"> National Examination Board (NEB)</span> for +2 programs, and 
                <span className="font-semibold text-primary-700"> Pokhara University (PU)</span> for higher education programs, 
                we are dedicated to producing competent professionals.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">State-of-the-art Science & Computer Labs</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Digital Library with 20,000+ Resources</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Excellent Placement & Career Guidance</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary-100 rounded-2xl transform rotate-2"></div>
              <img 
                src="https://picsum.photos/600/400?random=30" 
                alt="College Campus" 
                className="relative rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* New Section: Affiliations */}
      <div className="py-12 bg-white border-t border-gray-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-400 font-bold uppercase tracking-widest text-sm mb-8">Affiliated With</p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
               <div className="text-center group">
                  <div className="h-16 flex items-center justify-center font-black text-3xl text-red-600 mb-2">NEB</div>
                  <span className="text-xs font-bold text-gray-500 group-hover:text-red-600">National Exam Board</span>
               </div>
               <div className="text-center group">
                  <div className="h-16 flex items-center justify-center font-black text-3xl text-purple-800 mb-2">PU</div>
                  <span className="text-xs font-bold text-gray-500 group-hover:text-purple-800">Pokhara University</span>
               </div>
            </div>
         </div>
      </div>

      {/* 2.2 Mission, Vision & Values */}
      <div className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 font-serif mb-4">Our Guiding Principles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Defining our path and purpose in the pursuit of educational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide accessible, high-quality education that empowers students with the knowledge and skills necessary to succeed in a globalized world, fostering critical thinking and moral integrity.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <Eye size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a premier academic institution recognized nationally and internationally for innovation, research, and the holistic development of future leaders who contribute to nation-building.
              </p>
            </div>

            {/* Values Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">Core Values</h3>
              <ul className="space-y-3">
                {coreValues.map((value, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 2.3 History Timeline */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 font-serif mb-4">Our History</h2>
            <p className="text-gray-600">A journey of growth, resilience, and academic achievements.</p>
          </div>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            {milestones.map((item, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                   <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-gray-900">{item.title}</div>
                    <time className="font-serif text-primary-600 font-bold">{item.year}</time>
                  </div>
                  <div className="text-gray-500 text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 font-serif mb-4">Awards & Recognitions</h2>
            <p className="text-gray-600">Celebrating our milestones of excellence and dedication.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all text-center group cursor-default">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${item.color}`}>
                  <item.icon size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full mb-3">{item.year}</span>
                <p className="text-gray-500 text-sm leading-snug">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Section: Campus Facilities */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 font-serif mb-4">World-Class Infrastructure</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide a conducive environment for learning and growth with our modern facilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((fac, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary-100 transition-all group">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <fac.icon size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{fac.title}</h3>
                <p className="text-sm text-gray-500 leading-snug">{fac.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Tilottama College */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 font-serif mb-4">Why Choose Tilottama College?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover what makes us the preferred choice for students seeking academic and personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {usps.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${item.color} group-hover:scale-110 transition-transform`}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2.4 Principal's Message */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 rounded-3xl p-8 md:p-12 shadow-inner flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/3 flex-shrink-0">
               <img 
                 src="https://picsum.photos/500/600?random=40" 
                 alt="Principal" 
                 className="w-full h-auto rounded-xl shadow-lg object-cover"
               />
            </div>
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-2 text-primary-600 font-semibold uppercase tracking-wider text-sm">
                <Award size={18} />
                <span>From the Principal's Desk</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 font-serif">Cultivating Minds, Building Character</h2>
              <div className="relative pl-6 border-l-4 border-primary-200">
                <Quote className="text-primary-100 absolute -top-4 -left-3 w-8 h-8 fill-current" />
                <p className="text-gray-700 leading-relaxed text-lg italic">
                  "At Tilottama, we believe that education is the most powerful weapon which you can use to change the world. Our focus is not just on academic brilliance but on creating responsible citizens who can contribute to the nation. We are committed to providing an environment that fosters critical thinking, innovation, and ethical leadership."
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                As we move forward, our goal is to integrate technology with traditional values, ensuring our students are prepared for the challenges of the 21st century. I welcome you to join our vibrant community.
              </p>
              <div className="pt-4">
                <h4 className="text-xl font-bold text-gray-900">Dr. Ram Chandra Pandey</h4>
                <p className="text-gray-500">Campus Chief</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2.5 Leadership Team */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 font-serif mb-4">Our Leadership</h2>
            <p className="text-gray-600">The visionaries guiding Tilottama College towards excellence.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-sm font-medium">{member.qualification}</span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-primary-600 font-medium text-sm mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
                to="/team" 
                className="inline-flex items-center gap-2 bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors shadow-md transform hover:scale-105"
            >
                View All Faculty & Staff <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* New Section: FAQ */}
      <div className="py-20 bg-white">
         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-gray-900 font-serif mb-4 flex items-center justify-center gap-2">
                 <HelpCircle className="text-primary-600" /> General FAQs
               </h2>
               <p className="text-gray-600">Common questions about our institution.</p>
            </div>
            
            <div className="space-y-4">
               {aboutFaqs.map((faq, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                     <button 
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition-colors text-left"
                     >
                        <span className="font-bold text-gray-800">{faq.q}</span>
                        <ChevronDown className={`text-gray-400 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} size={20} />
                     </button>
                     {openFaq === idx && (
                        <div className="p-5 border-t border-gray-100 bg-gray-50 text-gray-600 leading-relaxed">
                           {faq.a}
                        </div>
                     )}
                  </div>
               ))}
            </div>
         </div>
      </div>

    </div>
  );
};

export default About;
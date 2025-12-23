import React, { useState } from 'react';
import { Program } from '../types';
import { Clock, Book, Award, ArrowRight, Users, ChevronLeft, CheckCircle, Download, DollarSign, Briefcase, GraduationCap, HelpCircle, ChevronDown } from 'lucide-react';

const programs: Program[] = [
  {
    id: 'science',
    title: '+2 Science',
    level: 'Plus 2',
    description: 'A rigorous program designed for aspiring engineers, doctors, and scientists. Features state-of-the-art labs.',
    duration: '2 Years (Class 11 & 12)',
    image: 'https://picsum.photos/800/600?random=10',
    overview: 'The +2 Science program at Tilottama College is a premier course designed to provide a strong foundation in physics, chemistry, biology, and mathematics. We focus on preparing students for competitive entrance examinations like IOE (Engineering) and IOM (Medical). Our approach combines theoretical learning with extensive practical sessions in our well-equipped laboratories.',
    eligibility: [
      'Passed SEE with minimum GPA 3.0',
      'Minimum C+ grade in Science and Mathematics',
      'Minimum D+ grade in English, Nepali, and Social Studies'
    ],
    feeStructure: 'Approx. NPR 60,000 per year (excluding admission and exam fees). Merit-based scholarships available.',
    syllabus: [
      'Physics (Mechanics, Thermodynamics, Electricity)',
      'Chemistry (Physical, Organic, Inorganic)',
      'Biology (Botany, Zoology) OR Mathematics',
      'English',
      'Nepali',
      'Computer Science (Optional)'
    ],
    syllabusPdf: '#science-syllabus',
    careerOpportunities: [
      'Medical Doctor (MBBS, BDS)',
      'Engineer (Civil, Computer, Electrical)',
      'Biotechnologist',
      'IT Professional',
      'Researcher / Scientist'
    ],
    faculty: [
      { name: "Dr. H.P. Sharma", role: "Physics HOD", image: "https://picsum.photos/200/200?random=60" },
      { name: "Mr. R.K. Yadav", role: "Chemistry Senior Faculty", image: "https://picsum.photos/200/200?random=61" },
      { name: "Mrs. S. Karki", role: "Biology Coordinator", image: "https://picsum.photos/200/200?random=62" }
    ],
    admissionRequirements: [
      'Completed Online Application Form',
      'Copy of SEE Marksheet and Character Certificate',
      '2 Passport Size Photos',
      'Pass Entrance Examination'
    ],
    gallery: [
      'https://picsum.photos/400/300?random=70',
      'https://picsum.photos/400/300?random=71',
      'https://picsum.photos/400/300?random=72',
      'https://picsum.photos/400/300?random=73'
    ],
    faq: [
      {
        question: "Is the bridge course mandatory?",
        answer: "While not explicitly mandatory, we highly recommend taking the bridge course to cover the gap between the SEE curriculum and the +2 Science syllabus."
      },
      {
        question: "Do you offer Medical/Engineering entrance preparation?",
        answer: "Yes, we integrate entrance preparation classes (IOM & IOE) into our regular schedule, taught by experienced instructors."
      },
      {
        question: "Can I choose both Biology and Mathematics?",
        answer: "Yes, students can opt for Extra Math along with Biology to keep both Medical and Engineering options open."
      }
    ]
  },
  {
    id: 'management',
    title: '+2 Management',
    level: 'Plus 2',
    description: 'Comprehensive business education focusing on Accountancy, Economics, and Computer Science.',
    duration: '2 Years (Class 11 & 12)',
    image: 'https://picsum.photos/800/600?random=11',
    overview: 'Our Management stream aims to produce capable mid-level human resources in the field of business and administration. Students learn the principles of accounting, economics, and business studies, along with practical skills in computer applications. We organize regular field visits and industrial tours.',
    eligibility: [
      'Passed SEE with minimum GPA 2.4',
      'Minimum D+ grade in all subjects',
      'Interest in business and commerce'
    ],
    feeStructure: 'Approx. NPR 45,000 per year. Various scholarship schemes available for deserving students.',
    syllabus: [
      'Accountancy',
      'Economics',
      'Business Studies',
      'Social Studies',
      'English & Nepali',
      'Computer Science / Hotel Management'
    ],
    syllabusPdf: '#management-syllabus',
    careerOpportunities: [
      'Chartered Accountant (CA)',
      'Banker',
      'Business Entrepreneur',
      'Hotel Manager',
      'Marketing Executive'
    ],
    faculty: [
      { name: "Mr. B.B. Singh", role: "Management Coordinator", image: "https://picsum.photos/200/200?random=63" },
      { name: "Mrs. A. Tuladhar", role: "Accountancy Faculty", image: "https://picsum.photos/200/200?random=64" }
    ],
    admissionRequirements: [
      'Completed Online Application Form',
      'SEE Gradesheet',
      'Entrance Interview'
    ],
    gallery: [
      'https://picsum.photos/400/300?random=74',
      'https://picsum.photos/400/300?random=75',
      'https://picsum.photos/400/300?random=76'
    ],
    faq: [
      {
        question: "Is Hotel Management practical-based?",
        answer: "Yes, we have a dedicated kitchen and restaurant setup for Hotel Management students to practice culinary and service skills."
      },
      {
        question: "Can I study BCA after taking +2 Management?",
        answer: "Yes, if you study Computer Science or Mathematics as an optional subject in +2 Management, you are eligible for BCA and other IT degrees."
      },
      {
        question: "Does the college provide internships?",
        answer: "We facilitate internships for Hotel Management students in reputed hotels. For business students, we organize industrial visits."
      }
    ]
  },
  {
    id: 'csit',
    title: 'BSc. CSIT',
    level: 'Bachelor',
    description: 'A practical IT course affiliatied with TU bridging the gap between industry needs and academic knowledge.',
    duration: '4 Years (8 Semesters)',
    image: 'https://picsum.photos/800/600?random=13',
    overview: 'BSc. CSIT (Bachelor of Science in Computer Science and Information Technology) is a four-year course affiliated with Tribhuvan University. It is designed to provide the student with all sorts of knowledge in the field of Information Technology and Computing. The program involves a significant amount of project work and internships.',
    eligibility: [
      'Passed +2 Science or equivalent with C grade in all subjects',
      'Must pass TU IOST Entrance Examination'
    ],
    feeStructure: 'Total Course Fee: NPR 4,50,000 (Approx). Paid on semester basis.',
    syllabus: [
      'C/C++ Programming',
      'Digital Logic',
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Software Engineering',
      'Artificial Intelligence',
      'Computer Networks'
    ],
    syllabusPdf: '#csit-syllabus',
    careerOpportunities: [
      'Software Developer',
      'Network Administrator',
      'Database Analyst',
      'AI/ML Engineer',
      'Web Developer'
    ],
    faculty: [
      { name: "Er. S. Shrestha", role: "Program Head", image: "https://picsum.photos/200/200?random=65" },
      { name: "Mr. P. Khadka", role: "Senior Lecturer", image: "https://picsum.photos/200/200?random=66" }
    ],
    admissionRequirements: [
      'Passed +2 Science',
      'TU Entrance Score Card',
      'Personal Interview'
    ],
    gallery: [
      'https://picsum.photos/400/300?random=77',
      'https://picsum.photos/400/300?random=78',
      'https://picsum.photos/400/300?random=79'
    ],
    faq: [
      {
        question: "Is the CSIT program semester-based?",
        answer: "Yes, BSc. CSIT is an 8-semester (4-year) program affiliated with Tribhuvan University."
      },
      {
        question: "What is the difference between CSIT and BCA?",
        answer: "CSIT is more focused on the core engineering and theoretical aspects of computer science along with programming, while BCA is more application-oriented. CSIT requires a Science background (+2 Science)."
      },
      {
        question: "Are internships mandatory?",
        answer: "Yes, students must complete an internship in the 7th semester and a major project in the 8th semester as part of the curriculum."
      }
    ]
  },
  {
    id: 'bbs',
    title: 'BBS (Bachelor of Business Studies)',
    level: 'Bachelor',
    description: 'An advanced undergraduate program providing deep insights into business management and finance.',
    duration: '4 Years (Annual System)',
    image: 'https://picsum.photos/800/600?random=12',
    overview: 'The BBS program aims to develop students into competent managers for any sector of organized activity. The program is based on the principle that graduates will spend a major portion of their life in a constantly changing environment. The student should have an opportunity to obtain a broad knowledge of the concepts and reality-based skills underlying the operation and management of organizations.',
    eligibility: [
      'Passed +2 in Management or Science',
      'Minimum D+ in all subjects'
    ],
    feeStructure: 'Total Course Fee: NPR 1,50,000 (Approx).',
    syllabus: [
      'Business English',
      'Micro/Macro Economics',
      'Cost and Management Accounting',
      'Principles of Management',
      'Human Resource Management',
      'Finance'
    ],
    syllabusPdf: '#bbs-syllabus',
    careerOpportunities: [
      'Banking & Insurance',
      'Civil Service',
      'Corporate Management',
      'Sales & Marketing',
      'Financial Analyst'
    ],
    faculty: [
      { name: "Dr. R. Pandey", role: "Department Head", image: "https://picsum.photos/200/200?random=67" }
    ],
    admissionRequirements: [
      'Academic Transcripts of +2',
      'CMAT Entrance (Optional/As per TU)',
      'College Interview'
    ],
    gallery: [
      'https://picsum.photos/400/300?random=80',
      'https://picsum.photos/400/300?random=81'
    ],
    faq: [
      {
        question: "Is attendance mandatory for BBS?",
        answer: "While BBS offers flexibility, we encourage regular attendance for better internal evaluation marks and academic performance."
      },
      {
        question: "Can I work while studying BBS?",
        answer: "Yes, since the classes are usually held in the morning shift (6:30 AM - 10:30 AM), students often work part-time jobs during the day."
      }
    ]
  },
  {
    id: 'mbs',
    title: 'MBS (Master of Business Studies)',
    level: 'Master',
    description: 'Master level program aimed at producing high-level management professionals and researchers.',
    duration: '2 Years (4 Semesters)',
    image: 'https://picsum.photos/800/600?random=16',
    overview: 'The MBS program enables the students to work as competent managers and to meet the demand of higher-level managers in organizations, particularly in the functional areas of management. Upon graduation, a student should be able to function as a manager in business, industry, government and non-government sectors.',
    eligibility: [
      'Passed Bachelor degree (BBS, BBA, or equivalent) from recognized university',
      'Must pass CMAT/Entrance conducted by TU'
    ],
    feeStructure: 'Total Course Fee: NPR 2,00,000 (Approx).',
    syllabus: [
      'Marketing Management',
      'Financial Management',
      'Organizational Behavior',
      'Strategic Management',
      'Research Methodology',
      'Thesis Writing'
    ],
    syllabusPdf: '#mbs-syllabus',
    careerOpportunities: [
      'CEO / Top Level Management',
      'Academic Researcher / Professor',
      'Business Consultant',
      'Policy Analyst',
      'Entrepreneur'
    ],
    faculty: [
      { name: "Prof. K. Acharya", role: "Program Director", image: "https://picsum.photos/200/200?random=68" }
    ],
    admissionRequirements: [
      'Bachelor Degree Transcript',
      'Entrance Score',
      'Interview'
    ],
    gallery: [
      'https://picsum.photos/400/300?random=82',
      'https://picsum.photos/400/300?random=83'
    ],
    faq: [
      {
        question: "Is a thesis mandatory for MBS?",
        answer: "Yes, completing a thesis in the final semester is mandatory for the completion of the degree."
      },
      {
        question: "Do you have evening classes for MBS?",
        answer: "Yes, we offer evening classes to accommodate working professionals who want to pursue their Master's degree."
      }
    ]
  }
];

const Academics: React.FC = () => {
  const [selectedProgramId, setSelectedProgramId] = useState<string | null>(null);

  const selectedProgram = programs.find(p => p.id === selectedProgramId);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (selectedProgram) {
    return (
      <div className="bg-white min-h-screen pb-20">
        {/* Detail Hero */}
        <div className="relative h-[400px] w-full">
          <img src={selectedProgram.image} alt={selectedProgram.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white">
            <div className="max-w-7xl mx-auto">
              <button 
                onClick={() => { setSelectedProgramId(null); scrollToTop(); }}
                className="flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors font-medium"
              >
                <ChevronLeft size={20} /> Back to Programs
              </button>
              <div className="flex gap-4 mb-4">
                <span className="bg-primary-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">{selectedProgram.level}</span>
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1">
                  <Clock size={12} /> {selectedProgram.duration}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-serif mb-2">{selectedProgram.title}</h1>
              <p className="text-lg text-gray-200 max-w-2xl">{selectedProgram.description}</p>
            </div>
          </div>
        </div>

        {/* Detail Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Info Column */}
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 font-serif mb-4 flex items-center gap-2">
                  <Book className="text-primary-600" /> Program Overview
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">{selectedProgram.overview}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 font-serif mb-6 flex items-center gap-2">
                  <GraduationCap className="text-primary-600" /> Curriculum & Syllabus
                </h2>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProgram.syllabus.map((subject, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                        <CheckCircle size={18} className="text-green-500 mt-0.5 shrink-0" />
                        <span className="font-medium text-gray-800">{subject}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <a 
                      href={selectedProgram.syllabusPdf || '#'}
                      className="flex items-center gap-2 text-primary-600 font-bold hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download size={18} /> Download Full Syllabus (PDF)
                    </a>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 font-serif mb-6 flex items-center gap-2">
                  <Briefcase className="text-primary-600" /> Career Opportunities
                </h2>
                <div className="flex flex-wrap gap-3">
                  {selectedProgram.careerOpportunities.map((career, idx) => (
                    <span key={idx} className="bg-primary-50 text-primary-700 px-4 py-2 rounded-full font-medium text-sm border border-primary-100">
                      {career}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 font-serif mb-6 flex items-center gap-2">
                  <Users className="text-primary-600" /> Faculty
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {selectedProgram.faculty.map((f, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-3 bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <img src={f.image} alt={f.name} className="w-24 h-24 rounded-full object-cover border-4 border-primary-50" />
                      <div className="text-center">
                        <h4 className="font-bold text-gray-900 text-lg">{f.name}</h4>
                        <p className="text-sm text-primary-600 font-medium">{f.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 font-serif mb-6">Photo Gallery</h2>
                <div className="grid grid-cols-2 gap-4">
                  {selectedProgram.gallery.map((img, idx) => (
                    <img key={idx} src={img} alt="Gallery" className="rounded-lg w-full h-48 object-cover hover:opacity-90 transition-opacity cursor-pointer" />
                  ))}
                </div>
              </section>

              {/* FAQ Section */}
              {selectedProgram.faq && (
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 font-serif mb-6 flex items-center gap-2">
                    <HelpCircle className="text-primary-600" /> Course FAQs
                  </h2>
                  <div className="space-y-4">
                    {selectedProgram.faq.map((item, idx) => (
                      <details key={idx} className="group bg-white border border-gray-200 rounded-lg open:border-primary-200 open:ring-2 open:ring-primary-50 transition-all [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex items-center justify-between p-4 cursor-pointer font-bold text-gray-800 select-none group-hover:bg-gray-50">
                          {item.question}
                          <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                        </summary>
                        <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                          {item.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar Column */}
            <div className="space-y-8">
              {/* Eligibility Box */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sticky top-24">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Eligibility & Admission</h3>
                <ul className="space-y-3 mb-6">
                  {selectedProgram.eligibility.map((req, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 shrink-0"></div>
                      {req}
                    </li>
                  ))}
                </ul>
                
                <h4 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide">Documents Required</h4>
                 <ul className="space-y-2 mb-6">
                  {selectedProgram.admissionRequirements.map((req, idx) => (
                    <li key={idx} className="text-xs text-gray-500 flex items-start gap-2">
                      <CheckCircle size={12} className="text-primary-400 mt-0.5" />
                      {req}
                    </li>
                  ))}
                </ul>

                <div className="bg-primary-50 p-4 rounded-lg mb-6">
                  <div className="flex items-center gap-2 text-primary-800 font-bold mb-1">
                    <DollarSign size={18} /> Fee Structure
                  </div>
                  <p className="text-sm text-primary-700 leading-snug">{selectedProgram.feeStructure}</p>
                </div>

                <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-bold hover:bg-primary-700 transition-colors shadow-md">
                  Apply for Admission
                </button>
                <p className="text-xs text-center text-gray-400 mt-3">Seats are limited. Entrance exam mandatory.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // LIST VIEW
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Programs</h2>
          <h1 className="text-4xl font-bold text-gray-900 font-serif mb-4">Academic Excellence</h1>
          <p className="text-gray-600 text-lg">
            We offer a diverse range of programs from higher secondary to master levels, ensuring a path for every ambition.
          </p>
        </div>

        {/* Filters / Categories (Visual Only for now) */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button className="px-6 py-2 bg-primary-600 text-white rounded-full text-sm font-medium shadow-md">All Programs</button>
          <button className="px-6 py-2 bg-white text-gray-600 hover:bg-gray-100 rounded-full text-sm font-medium border border-gray-200 transition-colors">+2 Programs</button>
          <button className="px-6 py-2 bg-white text-gray-600 hover:bg-gray-100 rounded-full text-sm font-medium border border-gray-200 transition-colors">Bachelors</button>
          <button className="px-6 py-2 bg-white text-gray-600 hover:bg-gray-100 rounded-full text-sm font-medium border border-gray-200 transition-colors">Masters</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div 
              key={program.id} 
              onClick={() => { setSelectedProgramId(program.id); scrollToTop(); }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-gray-100 cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-700 shadow-sm flex items-center gap-1">
                  <Clock size={12} />
                  {program.duration}
                </div>
                <div className="absolute bottom-4 left-4 bg-primary-600 px-3 py-1 rounded-md text-xs font-bold text-white shadow-sm uppercase tracking-wider">
                  {program.level}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                  {program.description}
                </p>
                <div className="pt-4 border-t border-gray-100 mt-auto flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(program.syllabusPdf || '#', '_blank');
                    }}
                    className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-primary-600 hover:bg-primary-50 px-3 py-1.5 rounded-lg transition-all"
                  >
                    <Download size={14} />
                    <span className="uppercase tracking-wide">Syllabus</span>
                  </button>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-gray-400 uppercase group-hover:text-primary-600 transition-colors">Details</span>
                    <div className="w-8 h-8 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Facilities Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900 font-serif mb-10 text-center">Why Choose Tilottama?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { icon: Book, title: "Modern Library", desc: "Access to thousands of books and digital resources." },
               { icon: Clock, title: "Flexible Timing", desc: "Morning and day shifts available for students." },
               { icon: Award, title: "Scholarships", desc: "Merit-based scholarships for deserving students." },
               { icon: Users, title: "Expert Faculty", desc: "Learn from experienced professors and industry experts." }
             ].map((item, idx) => (
               <div key={idx} className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-primary-100 hover:bg-primary-50 transition-colors">
                 <item.icon className="w-8 h-8 text-primary-600 mb-4" />
                 <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                 <p className="text-gray-600 text-sm">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
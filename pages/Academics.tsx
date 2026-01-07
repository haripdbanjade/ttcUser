import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Clock, Book, Award, ArrowRight, Users, ChevronLeft, CheckCircle, Download, DollarSign, Briefcase, GraduationCap, HelpCircle, ChevronDown, Trophy, UserCheck } from 'lucide-react';
import { programs } from '../data/programsData';
import { facultyData } from '../data/facultyData';

const Academics: React.FC = () => {
  const [selectedProgramId, setSelectedProgramId] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const selectedProgram = programs.find(p => p.id === selectedProgramId);

  const programFaculty = selectedProgram
    ? facultyData.filter(f => selectedProgram.facultyIds.includes(f.id))
    : [];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && programs.some(p => p.id === hash)) {
      setSelectedProgramId(hash);
      scrollToTop();
    }
  }, [location.hash]);

  const renderSyllabus = () => {
    if (!selectedProgram) return null;

    if (Array.isArray(selectedProgram.syllabus)) {
      // Render as a single grid for simple string arrays (BBA, MBA)
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {selectedProgram.syllabus.map((subject, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
              <CheckCircle size={18} className="text-green-500 mt-0.5 shrink-0" />
              <span className="font-medium text-gray-800">{subject}</span>
            </div>
          ))}
        </div>
      );
    } else if (typeof selectedProgram.syllabus === 'object' && selectedProgram.syllabus.gradeXI) {
      // Render two columns for structured object (+2 programs)
      const { gradeXI, gradeXII } = selectedProgram.syllabus;
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Grade XI</h3>
            <div className="space-y-3">
              {gradeXI.map((subject, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <CheckCircle size={18} className="text-green-500 mt-0.5 shrink-0" />
                  <span className="font-medium text-gray-800">{subject}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Grade XII</h3>
            <div className="space-y-3">
              {gradeXII.map((subject, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <CheckCircle size={18} className="text-green-500 mt-0.5 shrink-0" />
                  <span className="font-medium text-gray-800">{subject}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

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
                onClick={() => { 
                  setSelectedProgramId(null); 
                  scrollToTop(); 
                  navigate('/academics');
                }}
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
                  {renderSyllabus()}
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

              {/* Achievements Section */}
              {selectedProgram.achievementHighlights && (
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 font-serif mb-6 flex items-center gap-2">
                    <Trophy className="text-primary-600" /> {selectedProgram.achievementHighlights.title}
                  </h2>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {selectedProgram.achievementHighlights.stats.map(stat => (
                      <div key={stat.label} className="bg-gray-50 p-4 rounded-lg text-center border border-gray-100">
                        <p className="text-2xl font-bold text-primary-600">{stat.value}</p>
                        <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Toppers Table */}
                  {selectedProgram.achievementHighlights.topperList && (
                    <div className="mb-8">
                      <h3 className="text-lg font-bold text-gray-800 mb-4">Board Toppers (NEB/HSEB)</h3>
                      <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                           <table className="min-w-full divide-y divide-gray-200">
                              <thead className="bg-gray-50">
                                 <tr>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Year</th>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Student Name</th>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Achievement</th>
                                 </tr>
                              </thead>
                              <tbody className="bg-white divide-y divide-gray-200">
                                 {selectedProgram.achievementHighlights.topperList.slice(0, 5).map((topper, index) => ( // Show top 5
                                    <tr key={index} className="hover:bg-gray-50">
                                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-700">{topper.year}</td>
                                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">{topper.name}</td>
                                      <td className="px-4 py-3 whitespace-nowrap text-sm font-semibold text-primary-600">{topper.achievement}</td>
                                    </tr>
                                  ))}
                              </tbody>
                           </table>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Alumni Lists */}
                  {selectedProgram.achievementHighlights.alumniLists && (
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-4">Notable Alumni</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {selectedProgram.achievementHighlights.alumniLists.map(list => (
                          <div key={list.category} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                            <h4 className="font-bold text-gray-900 mb-3">{list.category}</h4>
                            <ul className="space-y-2">
                              {list.names.slice(0, 3).map((name, idx) => ( // Show top 3
                                <li key={idx} className="flex items-center gap-2 text-gray-700 text-sm">
                                  <UserCheck size={14} className="text-green-500" />
                                  {name}
                                </li>
                              ))}
                              {list.names.length > 3 && <li className="text-xs text-gray-500 pl-6">& many more...</li>}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="mt-8 text-center">
                    <button onClick={() => navigate('/achievements')} className="text-primary-600 font-semibold hover:underline flex items-center gap-1 mx-auto">
                        View All Achievements <ArrowRight size={16} />
                    </button>
                  </div>
                </section>
              )}


              <section>
                <h2 className="text-2xl font-bold text-gray-900 font-serif mb-6 flex items-center gap-2">
                  <Users className="text-primary-600" /> Faculty Members
                </h2>
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Name
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Designation
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {programFaculty.map((f, idx) => {
                          let statusTag = null;
                          const roleLower = f.role.toLowerCase();
                          if (roleLower.includes('head of department') || roleLower.includes('coordinator')) {
                            statusTag = <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">Department Head</span>;
                          } else if (roleLower.includes('visiting')) {
                            statusTag = <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Visiting</span>;
                          } else if (roleLower.includes('vice-principal') || roleLower.includes('director') || roleLower.includes('chief')) {
                            statusTag = <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">Leadership</span>;
                          }

                          return (
                            <tr key={idx} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-10 w-10">
                                    <img className="h-10 w-10 rounded-full object-cover" src={f.image} alt={f.name} />
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm font-bold text-gray-900">{f.name}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-700">{f.role}</div>
                                {f.subject && <div className="text-xs text-gray-500">{f.subject}</div>}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {statusTag || <span className="text-sm text-gray-500">Faculty</span>}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
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
              <div className="sticky top-24 space-y-8">
                {/* Eligibility Box */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-gray-900 text-lg">Eligibility & Admission</h3>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap">ISO Certified</span>
                  </div>
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
                  
                  <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-bold hover:bg-primary-700 transition-colors shadow-md mt-6 transform hover:-translate-y-0.5">
                    Apply for Admission
                  </button>
                  <p className="text-xs text-center text-gray-400 mt-3">Seats are limited. Entrance exam mandatory.</p>
                </div>

                {/* Scholarships Box */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg flex items-center gap-2"><Award className="text-amber-500" /> Scholarships Available</h3>
                  <p className="text-sm text-gray-600 mb-4">
                      Students in the {selectedProgram.title} program are eligible for various merit-based and talent scholarships.
                  </p>
                  <button onClick={() => navigate('/scholarships')} className="w-full bg-amber-50 text-amber-700 hover:bg-amber-100 transition-colors py-2.5 rounded-lg font-bold text-sm">
                      Learn More
                  </button>
                </div>

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
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-gray-100 cursor-pointer transform hover:-translate-y-1"
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
               <div key={idx} className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-primary-100 hover:bg-primary-50 transition-all duration-300 transform hover:-translate-y-1">
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
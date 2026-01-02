import React, { useState, useMemo } from 'react';
import { Briefcase, Zap, Users, Award, CheckCircle, FileText, MessageSquare, Handshake } from 'lucide-react';
import { jobOpenings } from '../data/careersData';
import { motion, AnimatePresence } from 'framer-motion';

const Careers: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);

  const departments = ['All', ...Array.from(new Set(jobOpenings.map(j => j.department)))];

  const filteredJobs = useMemo(() => {
    if (selectedDept === 'All') return jobOpenings;
    return jobOpenings.filter(job => job.department === selectedDept);
  }, [selectedDept]);

  const selectedJob = jobOpenings.find(job => job.id === selectedJobId);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="bg-primary-900 py-20 text-center text-white relative">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Join Our Team</h1>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            Become a part of an institution dedicated to shaping the future of education and nurturing the next generation of leaders.
          </p>
        </div>
      </div>

      {/* Why Work With Us Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 font-serif">Why Work at Tilottama College?</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">We are more than just a college; we are a community committed to excellence, innovation, and growth.</p>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Zap, title: "Professional Growth", desc: "We provide continuous learning opportunities, workshops, and training." },
              { icon: Users, title: "Supportive Community", desc: "Join a collaborative and friendly environment where everyone’s contribution is valued." },
              { icon: Award, title: "Competitive Benefits", desc: "We offer attractive salary packages, health benefits, and retirement plans." },
              { icon: Briefcase, title: "Impactful Work", desc: "Make a real difference in the lives of students and contribute to society." }
            ].map((item, idx) => (
              <motion.div variants={itemVariants} key={idx} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 text-center transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Current Openings Section */}
      <div id="openings" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 font-serif">Current Openings</h2>
            <p className="text-gray-600 mt-4">Find a role where you can make a difference.</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {departments.map(dept => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedDept === dept
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <motion.div
            key={selectedDept} // Re-trigger animation when filter changes
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredJobs.map(job => (
              <motion.div variants={itemVariants} key={job.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col p-8 transform hover:-translate-y-1">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                    <span className="text-xs font-bold bg-blue-50 text-blue-700 px-2 py-1 rounded-full whitespace-nowrap">{job.department}</span>
                </div>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">{job.description}</p>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    <span className="font-semibold">{job.type}</span> &bull; <span>{job.location}</span>
                  </div>
                  <button onClick={() => setSelectedJobId(job.id)} className="font-semibold text-primary-600 hover:underline text-sm">View Details</button>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {filteredJobs.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No openings in this department at the moment. Please check back later.
            </div>
          )}
        </div>
      </div>
      
      {/* Application Process */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-gray-900 font-serif">Application Process</h2>
               <p className="text-gray-600 mt-4">Our hiring process is simple and transparent.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0 relative">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 hidden md:block"></div>
                {[
                  { icon: FileText, title: 'Submit Application' },
                  { icon: MessageSquare, title: 'Initial Screening' },
                  { icon: Users, title: 'Interview' },
                  { icon: Handshake, title: 'Offer & Onboarding' }
                ].map((step, idx) => (
                  <div key={idx} className="relative z-10 flex flex-col items-center text-center w-48">
                    <div className="w-16 h-16 bg-white border-4 border-gray-50 rounded-full flex items-center justify-center text-primary-600 mb-3 shadow-md">
                      <step.icon size={32} />
                    </div>
                    <span className="font-bold text-gray-800">{`Step ${idx + 1}`}</span>
                    <p className="text-sm text-gray-600">{step.title}</p>
                  </div>
                ))}
            </div>
        </div>
      </div>


      {/* Job Detail Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedJobId(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">{selectedJob.title}</h2>
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                  <span>{selectedJob.department}</span> &bull;
                  <span>{selectedJob.type}</span> &bull;
                  <span>{selectedJob.location}</span>
                </div>
              </div>
              <div className="p-8 overflow-y-auto space-y-6">
                 <div>
                    <h4 className="font-bold text-gray-800 mb-3">Job Description</h4>
                    <p className="text-gray-600 leading-relaxed">{selectedJob.description}</p>
                 </div>
                 <div>
                    <h4 className="font-bold text-gray-800 mb-3">Key Responsibilities</h4>
                    <ul className="space-y-2 list-disc list-inside text-gray-600">
                      {selectedJob.responsibilities.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                 </div>
                 <div>
                    <h4 className="font-bold text-gray-800 mb-3">Qualifications</h4>
                    <ul className="space-y-2 list-disc list-inside text-gray-600">
                      {selectedJob.qualifications.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                 </div>
              </div>
              <div className="p-6 bg-gray-50 border-t border-gray-200 mt-auto">
                <button className="w-full bg-primary-600 text-white font-bold py-3 rounded-lg hover:bg-primary-700 transition-colors">
                  Apply for this position
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Careers;
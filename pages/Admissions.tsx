import React, { useState } from 'react';
import { CheckCircle, Calendar, FileText, Download, HelpCircle, ChevronDown, AlertCircle, X, Send } from 'lucide-react';

const generalFaqs = [
  {
    question: "When does the academic session start?",
    answer: "The academic session typically starts in August (Shrawan) for +2 programs and November/December for Bachelor programs, depending on the university calendar."
  },
  {
    question: "Is there an entrance fee?",
    answer: "Yes, there is a nominal entrance examination fee which covers the processing and exam materials. Please contact the accounts section for the exact amount."
  },
  {
    question: "Do you provide transportation facilities?",
    answer: "Yes, Tilottama College operates a fleet of buses covering major routes in Butwal, Bhairahawa, and surrounding areas. Bus fees are charged separately based on distance."
  },
  {
    question: "Are scholarships available?",
    answer: "We offer merit-based scholarships for students with outstanding SEE/Entrance results. There are also need-based scholarships for deserving students from marginalized communities."
  },
  {
    question: "Is hostel accommodation available?",
    answer: "Yes, we have separate, well-furnished hostels for boys and girls within walking distance of the campus with 24/7 security and mess facilities."
  },
  {
    question: "Can I apply offline?",
    answer: "Yes, you can visit the college administration office between 6:00 AM and 4:00 PM (Sunday to Friday) to collect and submit the application form manually."
  }
];

interface ApplicationForm {
  fullName: string;
  email: string;
  phone: string;
  gpa: string;
  program: string;
}

const Admissions: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<ApplicationForm>({ fullName: '', email: '', phone: '', gpa: '', program: '' });
  const [errors, setErrors] = useState<ApplicationForm>({ fullName: '', email: '', phone: '', gpa: '', program: '' });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full Name is required';
        if (value.trim().length < 3) return 'Name must be at least 3 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
        return '';
      case 'phone':
        if (!value.trim()) return 'Phone number is required';
        if (!/^\d{10}$/.test(value.trim())) return 'Phone number must be exactly 10 digits';
        return '';
      case 'gpa':
        if (!value.trim()) return 'GPA is required';
        const gpaNum = parseFloat(value);
        if (isNaN(gpaNum) || gpaNum < 0 || gpaNum > 4.0) return 'GPA must be between 0.0 and 4.0';
        return '';
      case 'program':
        if (!value) return 'Please select a program';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = {
      fullName: validateField('fullName', formData.fullName),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      gpa: validateField('gpa', formData.gpa),
      program: validateField('program', formData.program)
    };

    setErrors(newErrors);
    setTouched({ fullName: true, email: true, phone: true, gpa: true, program: true });

    if (Object.values(newErrors).every(err => err === '')) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setShowForm(false);
        setFormData({ fullName: '', email: '', phone: '', gpa: '', program: '' });
        setTouched({});
      }, 3000);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-primary-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white font-serif mb-4">Admissions</h1>
          <p className="text-primary-100 max-w-2xl mx-auto text-lg">
            Join a community of learners. Your journey to excellence starts here.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm">1</span>
                  Eligibility Criteria
                </h2>
                <div className="space-y-3 pl-10">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600"><span className="font-semibold text-gray-800">+2 Science:</span> Minimum GPA 3.0 in SEE with C+ in Science & Math.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600"><span className="font-semibold text-gray-800">+2 Management:</span> Minimum GPA 2.4 in SEE.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600"><span className="font-semibold text-gray-800">Bachelor Programs:</span> Must have completed +2 or equivalent with minimum D+ in all subjects.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm">2</span>
                  Application Process
                </h2>
                <div className="pl-10 space-y-6">
                   <div className="relative border-l-2 border-gray-200 pl-6 pb-6 last:pb-0">
                     <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-200 border-2 border-white"></div>
                     <h3 className="font-bold text-gray-800">Step 1: Online Application</h3>
                     <p className="text-gray-600 text-sm mt-1">Fill out the form below or visit the college administration.</p>
                   </div>
                   <div className="relative border-l-2 border-gray-200 pl-6 pb-6 last:pb-0">
                     <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-200 border-2 border-white"></div>
                     <h3 className="font-bold text-gray-800">Step 2: Entrance Examination</h3>
                     <p className="text-gray-600 text-sm mt-1">Appear for the written test covering Math, English, and GK.</p>
                   </div>
                   <div className="relative border-l-2 border-gray-200 pl-6 pb-6 last:pb-0">
                     <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-200 border-2 border-white"></div>
                     <h3 className="font-bold text-gray-800">Step 3: Interview & Enrollment</h3>
                     <p className="text-gray-600 text-sm mt-1">Shortlisted candidates will be called for a personal interview.</p>
                   </div>
                </div>
              </section>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl h-fit border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary-600" />
                Key Dates
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="text-gray-600">Form Distribution</span>
                  <span className="font-medium text-gray-900">June 15, 2024</span>
                </li>
                <li className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="text-gray-600">Submission Deadline</span>
                  <span className="font-medium text-gray-900">July 10, 2024</span>
                </li>
                <li className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="text-gray-600">Entrance Exam</span>
                  <span className="font-medium text-gray-900">July 15, 2024</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Classes Start</span>
                  <span className="font-medium text-gray-900">August 01, 2024</span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary-600" />
                  Downloads
                </h3>
                <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 hover:border-primary-500 hover:text-primary-600 text-gray-700 py-2 rounded-lg transition-colors text-sm font-medium">
                  <Download size={16} /> Prospectus 2024
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-primary-50 rounded-xl p-8 border border-primary-100 relative overflow-hidden transition-all duration-500">
            {!showForm ? (
              <div className="text-center relative z-10">
                <h3 className="text-xl font-bold text-primary-900 mb-2">Ready to Apply?</h3>
                <p className="text-primary-700 mb-6">Start your application process today online. It takes less than 5 minutes.</p>
                <button 
                  onClick={() => setShowForm(true)}
                  className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-md"
                >
                  Fill Online Form
                </button>
              </div>
            ) : (
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-6 border-b border-primary-100 pb-4">
                  <h3 className="text-2xl font-bold text-primary-900">Online Application Form</h3>
                  <button 
                    onClick={() => setShowForm(false)}
                    className="p-2 hover:bg-primary-100 rounded-full text-primary-600 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-green-800 mb-2">Application Submitted!</h4>
                    <p className="text-green-700">Thank you for applying. We will contact you shortly for the entrance exam details.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Full Name */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Student Full Name</label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="e.g. Aarav Sharma"
                          className={`w-full px-4 py-3 rounded-lg bg-white border ${
                            errors.fullName && touched.fullName ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-primary-500 focus:ring-primary-200'
                          } outline-none focus:ring-2 transition-all`}
                        />
                        {errors.fullName && touched.fullName && (
                          <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.fullName}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="e.g. aarav@example.com"
                          className={`w-full px-4 py-3 rounded-lg bg-white border ${
                            errors.email && touched.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-primary-500 focus:ring-primary-200'
                          } outline-none focus:ring-2 transition-all`}
                        />
                        {errors.email && touched.email && (
                          <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.email}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="e.g. 9841000000"
                          maxLength={10}
                          className={`w-full px-4 py-3 rounded-lg bg-white border ${
                            errors.phone && touched.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-primary-500 focus:ring-primary-200'
                          } outline-none focus:ring-2 transition-all`}
                        />
                        {errors.phone && touched.phone && (
                          <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.phone}</p>
                        )}
                      </div>

                      {/* GPA */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">SEE/Last Exam GPA</label>
                        <input
                          type="number"
                          name="gpa"
                          value={formData.gpa}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="e.g. 3.65"
                          step="0.01"
                          min="0"
                          max="4"
                          className={`w-full px-4 py-3 rounded-lg bg-white border ${
                            errors.gpa && touched.gpa ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-primary-500 focus:ring-primary-200'
                          } outline-none focus:ring-2 transition-all`}
                        />
                        {errors.gpa && touched.gpa && (
                          <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.gpa}</p>
                        )}
                      </div>
                    </div>

                    {/* Program Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Interested Program</label>
                      <div className="relative">
                        <select
                          name="program"
                          value={formData.program}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full px-4 py-3 rounded-lg bg-white border appearance-none cursor-pointer ${
                            errors.program && touched.program ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-primary-500 focus:ring-primary-200'
                          } outline-none focus:ring-2 transition-all`}
                        >
                          <option value="">Select a Program</option>
                          <option value="+2 Science">+2 Science</option>
                          <option value="+2 Management">+2 Management</option>
                          <option value="BSc. CSIT">BSc. CSIT</option>
                          <option value="BBS">BBS</option>
                          <option value="BCA">BCA</option>
                          <option value="MBS">MBS</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                      </div>
                      {errors.program && touched.program && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.program}</p>
                      )}
                    </div>

                    <div className="flex gap-4 pt-2">
                       <button 
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="w-1/3 bg-white border border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button 
                        type="submit"
                        className="w-2/3 bg-primary-600 text-white font-semibold py-3 rounded-lg hover:bg-primary-700 transition-colors shadow-md flex items-center justify-center gap-2"
                      >
                         Submit Application <Send size={18} />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>

        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 font-serif mb-2 flex items-center justify-center gap-2">
              <HelpCircle className="text-primary-600" /> Frequently Asked Questions
            </h2>
            <p className="text-gray-600">Common questions about admission, facilities, and campus life.</p>
          </div>

          <div className="space-y-4">
            {generalFaqs.map((faq, index) => (
              <details key={index} className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-gray-900 group-hover:bg-gray-50 transition-colors">
                  <span className="font-bold text-lg">{faq.question}</span>
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="text-gray-400 group-hover:text-primary-600" />
                  </span>
                </summary>

                <div className="border-t border-gray-100 bg-gray-50/50 p-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Admissions;
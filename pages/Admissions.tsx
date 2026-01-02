import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, Calendar, FileText, Download, HelpCircle, ChevronDown, AlertCircle, X, Send, BookOpen, GraduationCap, Award } from 'lucide-react';
import { admissionsData, AdmissionInfo } from '../data/admissionsData';

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  gpa: string;
  program: string;
  specialization: string;
}

const ApplicationForm: React.FC<{ programs: string[], formTitle: string }> = ({ programs, formTitle }) => {
  const [formData, setFormData] = useState<FormState>({ fullName: '', email: '', phone: '', gpa: '', program: '', specialization: '' });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);

  const specializationOptions: { [key: string]: string[] } = {
    '+2 Science': ['Biology', 'Computer Science'],
    '+2 Management': ['Hotel Management', 'Finance', 'Computer Science'],
  };

  const validateField = (name: keyof FormState, value: string, currentData: FormState): string => {
    switch (name) {
      case 'fullName': return value.trim().length < 3 ? 'Name must be at least 3 characters' : '';
      case 'email': return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Please enter a valid email' : '';
      case 'phone': return !/^\d{10}$/.test(value.trim()) ? 'Phone number must be 10 digits' : '';
      case 'gpa':
        const gpaNum = parseFloat(value);
        return isNaN(gpaNum) || gpaNum < 0 || gpaNum > 4.0 ? 'GPA must be between 0.0 and 4.0' : '';
      case 'program': return !value ? 'Please select a program' : '';
      case 'specialization':
        if (specializationOptions[currentData.program] && !value) {
          return 'Please select a specialization';
        }
        return '';
      default: return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target as { name: keyof FormState, value: string };
    
    const newFormData = { ...formData, [name]: value };

    if (name === 'program') {
      newFormData.specialization = ''; // Reset specialization when program changes
    }
    
    setFormData(newFormData);

    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value, newFormData) }));
    }
    
    // If program changed, re-validate the now-empty specialization field if it was touched
    if (name === 'program' && touched.specialization) {
      setErrors(prev => ({ ...prev, specialization: validateField('specialization', '', newFormData) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target as { name: keyof FormState, value: string };
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value, formData) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<FormState> = {};
    const newTouched: Partial<Record<keyof FormState, boolean>> = {};
    (Object.keys(formData) as Array<keyof FormState>).forEach(key => {
      newErrors[key] = validateField(key, formData[key], formData);
      newTouched[key] = true;
    });

    setErrors(newErrors);
    setTouched(newTouched);

    if (Object.values(newErrors).every(err => !err)) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ fullName: '', email: '', phone: '', gpa: '', program: '', specialization: '' });
        setTouched({});
      }, 5000);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} />
        </div>
        <h4 className="text-xl font-bold text-green-800 mb-2">Application Submitted!</h4>
        <p className="text-green-700">Thank you. We will contact you shortly for the next steps.</p>
      </div>
    );
  }

  return (
    <div className="bg-primary-50 rounded-xl p-8 border border-primary-100">
        <h3 className="text-2xl font-bold text-primary-900 mb-6">{formTitle}</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries({ fullName: 'Student Full Name', email: 'Email Address', phone: 'Mobile Number', gpa: 'SEE/Last Exam GPA' }).map(([key, label]) => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
                <input
                  type={key === 'email' ? 'email' : key === 'phone' ? 'tel' : key === 'gpa' ? 'number' : 'text'}
                  name={key}
                  value={formData[key as keyof FormState]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={`e.g. ${key === 'fullName' ? 'Aarav Sharma' : key === 'email' ? 'aarav@example.com' : key === 'phone' ? '9841000000' : '3.65'}`}
                  className={`w-full px-4 py-3 rounded-lg bg-white border ${errors[key as keyof FormState] && touched[key as keyof FormState] ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-primary-500 focus:ring-primary-200'} outline-none focus:ring-2 transition-all`}
                  {...(key === 'phone' && { maxLength: 10 })}
                  {...(key === 'gpa' && { step: '0.01', min: '0', max: '4' })}
                />
                {errors[key as keyof FormState] && touched[key as keyof FormState] && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors[key as keyof FormState]}</p>}
              </div>
            ))}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Interested Program</label>
            <select name="program" value={formData.program} onChange={handleChange} onBlur={handleBlur} className={`w-full px-4 py-3 rounded-lg bg-white border ${errors.program && touched.program ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-primary-500 focus:ring-primary-200'} outline-none focus:ring-2 transition-all`}>
              <option value="">Select a Program</option>
              {programs.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
            {errors.program && touched.program && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.program}</p>}
          </div>

          {specializationOptions[formData.program] && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Choose Specialization</label>
              <select name="specialization" value={formData.specialization} onChange={handleChange} onBlur={handleBlur} className={`w-full px-4 py-3 rounded-lg bg-white border ${errors.specialization && touched.specialization ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-primary-500 focus:ring-primary-200'} outline-none focus:ring-2 transition-all`}>
                <option value="">Select Specialization</option>
                {specializationOptions[formData.program].map(spec => <option key={spec} value={spec}>{spec}</option>)}
              </select>
              {errors.specialization && touched.specialization && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.specialization}</p>}
            </div>
          )}

          <button type="submit" className="w-full bg-primary-600 text-white font-semibold py-3 rounded-lg hover:bg-primary-700 transition-all duration-300 shadow-md flex items-center justify-center gap-2 transform hover:-translate-y-0.5">
            Submit Application <Send size={18} />
          </button>
        </form>
    </div>
  );
};

const AdmissionDetail: React.FC<{ info: AdmissionInfo }> = ({ info }) => {
    const navigate = useNavigate();
    return (
        <div className="space-y-12">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 font-serif mb-2">{info.title}</h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">{info.description}</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
                <section>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Eligibility Criteria</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {info.eligibility.map((item, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                        <h4 className="font-bold text-gray-800 mb-3 text-lg">{item.program}</h4>
                        <ul className="space-y-2">
                        {item.criteria.map((c, cIdx) => (
                            <li key={cIdx} className="flex items-start gap-3 text-gray-600">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{c}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                    ))}
                </div>
                </section>

                <section>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Application Process</h3>
                <div className="space-y-6">
                    {info.process.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">{idx + 1}</div>
                        <div>
                        <h4 className="font-bold text-gray-800">{step.title}</h4>
                        <p className="text-gray-600 text-sm mt-1">{step.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
                </section>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl h-fit border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><Calendar className="w-5 h-5 text-primary-600" /> Key Dates</h3>
                <ul className="space-y-4 text-sm">
                {info.keyDates.map((item, idx) => (
                    <li key={idx} className="flex justify-between pb-2 border-b border-gray-200 last:border-0 last:pb-0">
                    <span className="text-gray-600">{item.event}</span>
                    <span className="font-medium text-gray-900 text-right">{item.date}</span>
                    </li>
                ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-gray-200">
                <a href={info.prospectusUrl} className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 hover:border-primary-500 hover:text-primary-600 text-gray-700 py-2 rounded-lg transition-colors text-sm font-medium">
                    <Download size={16} /> Prospectus
                </a>
                </div>
            </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg my-12">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <Award className="h-6 w-6 text-amber-600" />
                    </div>
                    <div className="ml-3">
                        <h3 className="text-lg font-bold text-amber-800">Scholarships & Financial Aid Available</h3>
                        <div className="mt-2 text-sm text-amber-700">
                            <p>Tilottama College offers a variety of merit-based and need-based scholarships. We encourage all eligible students to apply.</p>
                        </div>
                        <div className="mt-4">
                            <button onClick={() => navigate('/scholarships')} className="text-sm font-semibold text-amber-800 hover:text-amber-900 bg-amber-200 hover:bg-amber-300 px-4 py-2 rounded-lg transition-colors">
                                Explore Scholarships
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <ApplicationForm programs={info.formPrograms} formTitle={`Apply for ${info.level} Programs`} />
        </div>
    );
};


const Admissions: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'neb' | 'pu'>('neb');

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash === 'neb' || hash === 'pu') {
      setActiveTab(hash);
      // Scroll to the section after a short delay to ensure rendering
      setTimeout(() => {
        const element = document.getElementById('admission-section');
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location.hash]);

  const handleTabClick = (tabId: 'neb' | 'pu') => {
    navigate(`/admissions#${tabId}`);
  };

  const selectedInfo = admissionsData.find(d => d.id === activeTab);

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="bg-primary-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white font-serif mb-4">Admissions</h1>
          <p className="text-primary-100 max-w-2xl mx-auto text-lg">
            Join a community of learners. Your journey to excellence starts here.
          </p>
        </div>
      </div>

      <div id="admission-section" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12 bg-gray-100 p-2 rounded-xl">
            <button
              onClick={() => handleTabClick('neb')}
              className={`w-1/2 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-bold transition-all ${activeTab === 'neb' ? 'bg-primary-600 text-white shadow-md' : 'text-gray-600 hover:bg-white'}`}
            >
              <BookOpen size={20} /> NEB (+2) Admissions
            </button>
            <button
              onClick={() => handleTabClick('pu')}
              className={`w-1/2 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-bold transition-all ${activeTab === 'pu' ? 'bg-primary-600 text-white shadow-md' : 'text-gray-600 hover:bg-white'}`}
            >
              <GraduationCap size={20} /> PU (Bachelor/Master)
            </button>
          </div>

          {selectedInfo && <AdmissionDetail info={selectedInfo} />}
          
        </div>
      </div>
    </div>
  );
};

export default Admissions;
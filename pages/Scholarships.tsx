import React from 'react';
import { Award, DollarSign, Star, Users, BrainCircuit, FileText, CheckCircle, GraduationCap, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const scholarshipTypes = [
  { icon: GraduationCap, color: 'text-blue-500', title: 'Academic / Merit-Based', description: 'Awarded to students with outstanding academic records in SEE/+2 and our entrance exams. A certain percentage of tuition fee is waived based on performance.' },
  { icon: Users, color: 'text-green-500', title: 'Need-Based Scholarships', description: 'Financial assistance for students from economically disadvantaged backgrounds or remote areas, subject to document verification.' },
  { icon: Star, color: 'text-yellow-500', title: 'Talent-Based Scholarships', description: 'For students who have shown exceptional talent in sports, arts, leadership, or innovation at regional or national levels.' },
  { icon: Shield, color: 'text-red-500', title: 'Reserved & Special Scholarships', description: 'Provided for students from marginalized groups, differently-abled students, children of martyrs, and those with recommendations from Tilottama Municipality.' },
];

const nebSchemes = [
    { icon: Award, title: 'Entrance Exam Toppers', description: 'Scholarships for the top 24 students in the entrance exam (based on combined SEE + entrance scores).' },
    { icon: Star, title: 'SEE District Toppers', description: 'Special scholarships for students who have secured top positions in the SEE within the district.' },
    { icon: FileText, title: 'Municipality Recommendations', description: 'Scholarships for students with official recommendations from the Tilottama Municipality.' },
    { icon: Users, title: 'Needy & Meritorious Students', description: 'Dedicated support for academically promising students facing financial hardships.' }
];

const puSchemes = [
    { icon: Award, title: 'University Entrance Toppers', description: 'Significant scholarships for students securing top ranks in university entrance exams like CMAT.' },
    { icon: Star, title: 'Semester Toppers', description: 'Full or partial tuition waivers for students who achieve the top position in their respective semesters.' },
    { icon: GraduationCap, title: 'Academic Excellence Scholarship', description: 'Awarded to students with outstanding academic records in their previous degree (+2 for Bachelor, Bachelor for Master).' },
    { icon: Users, title: 'Financial Aid for Deserving Students', description: 'Support for academically strong students facing financial constraints at the university level.' }
];

const eligibilityCriteria = [
  'Must meet the minimum academic qualification for the chosen program.',
  'Minimum GPA and grades vary by scholarship type (e.g., higher GPA for merit-based).',
  'Scholarships are available for +2, BBA, and MBA levels.',
  'Continuation of scholarship is subject to maintaining required attendance, academic performance, and adherence to the college code of conduct.'
];

const applicationProcess = [
  { title: 'Online Application', description: 'Fill out the separate online scholarship application form available during the admission period.' },
  { title: 'Document Submission', description: 'Submit necessary documents like academic certificates, citizenship, and income verification (for need-based) as specified.' },
  { title: 'Selection Process', description: 'The Scholarship Committee reviews applications. The process may include interviews or further assessments.' },
  { title: 'Final Decision', description: 'Selected candidates will be notified by the administration. The committee\'s decision will be final.' }
];

const Scholarships: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="bg-primary-900 py-20 text-center">
        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
          <Award className="text-white" size={40} />
        </div>
        <h1 className="text-4xl font-bold text-white font-serif mb-4">Scholarships & Financial Aid</h1>
        <p className="text-primary-100 max-w-3xl mx-auto text-lg">
          Tilottama College is committed to attracting meritorious students and supporting deserving individuals by providing access to quality education.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Scholarship Types */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 font-serif mb-10 text-center">Types of Scholarships</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {scholarshipTypes.map((scholarship, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
                <scholarship.icon size={40} className={`mx-auto mb-4 ${scholarship.color}`} />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{scholarship.title}</h3>
                <p className="text-gray-600 text-sm">{scholarship.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Scholarship Schemes Section */}
        <section className="mb-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 font-serif mb-4">Our Commitment to Accessibility</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer tailored scholarship schemes for both NEB and PU level students to ensure everyone has an opportunity to excel.
            </p>
          </div>

           {/* NEB Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-800 font-serif mb-6 text-center border-b pb-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-lg">NEB (+2) Programs</span>
            </h3>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Tilottama provides scholarships to <span className="font-bold text-primary-600">7% to 10%</span> of its +2 students annually based on the following key criteria:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nebSchemes.map((scheme, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-start gap-5 hover:border-primary-200 transition-all">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600">
                    <scheme.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{scheme.title}</h3>
                    <p className="text-gray-600 text-sm">{scheme.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PU Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-800 font-serif mb-6 text-center border-b pb-4">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-lg">PU (Bachelor/Master) Programs</span>
            </h3>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              For our university-level programs, scholarships are awarded to recognize academic achievement, entrance performance, and support student potential.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {puSchemes.map((scheme, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-start gap-5 hover:border-primary-200 transition-all">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600">
                    <scheme.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{scheme.title}</h3>
                    <p className="text-gray-600 text-sm">{scheme.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Eligibility */}
            <section>
                <h2 className="text-2xl font-bold text-gray-900 font-serif mb-6">Eligibility & Continuation</h2>
                <ul className="space-y-4">
                    {eligibilityCriteria.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                    </li>
                    ))}
                </ul>
                 <div className="mt-6 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                    <p className="text-sm text-blue-800">
                        <strong>Coverage:</strong> Scholarships may be partial or full, semester-based, or performance-based, as determined by the Scholarship Committee. Specific details are provided upon selection.
                    </p>
                </div>
            </section>

            {/* Application Process */}
            <section>
                <h2 className="text-2xl font-bold text-gray-900 font-serif mb-6">Application Process</h2>
                <div className="space-y-6">
                    {applicationProcess.map((step, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">{index + 1}</div>
                            <div>
                            <h4 className="font-bold text-gray-800">{step.title}</h4>
                            <p className="text-gray-600 text-sm mt-1">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                 <div className="mt-6 text-center">
                    <button onClick={() => navigate('/downloads')} className="font-semibold text-primary-600 hover:underline">
                        Download Scholarship Policy PDF
                    </button>
                </div>
            </section>
        </div>

         {/* Scholarship Policy */}
        <section className="mt-20 bg-gray-50 rounded-2xl p-8 border border-gray-100">
             <h2 className="text-2xl font-bold text-gray-900 font-serif mb-4 text-center">Scholarship Policy Overview</h2>
             <div className="prose prose-sm max-w-none text-gray-600 text-center mx-auto">
                <p>
                    All scholarships are granted at the discretion of the college's Scholarship Committee. The committee's decisions on selection, continuation, or cancellation are final. Scholarships are non-transferable and cannot be claimed as a matter of right. Any misuse or violation of the college code of conduct will result in immediate cancellation.
                </p>
             </div>
        </section>

      </div>
    </div>
  );
};

export default Scholarships;

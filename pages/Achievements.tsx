import React from 'react';
import { Trophy, Medal, GraduationCap, Briefcase, CheckCircle, UserCheck } from 'lucide-react';
import { 
  nebToppers, 
  medicalAlumni, 
  engineeringAlumni, 
  seeDistrictToppers, 
  seeSubjectToppers 
} from '../data/achievementsData';

const Achievements: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Section */}
      <div className="bg-primary-900 py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Legacy of Excellence</h1>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            Celebrating the outstanding achievements of our students and alumni who continue to make us proud.
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* Stat Card 1 */}
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
              <Trophy className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-gray-800">NEB Board Toppers</h3>
              <p className="text-sm text-gray-600">Consistently producing national and regional toppers since 2063 BS.</p>
            </div>
            {/* Stat Card 2 */}
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
              <GraduationCap className="w-10 h-10 text-red-500 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-gray-800">Medical Placements</h3>
              <p className="text-sm text-gray-600">150+ students placed in MBBS, BDS at IOM, BPKIHS & KU.</p>
            </div>
            {/* Stat Card 3 */}
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
              <Briefcase className="w-10 h-10 text-blue-500 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-gray-800">Engineering Placements</h3>
              <p className="text-sm text-gray-600">300+ students secured BE admissions via IOE, TU & PU.</p>
            </div>
            {/* Stat Card 4 */}
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
              <Medal className="w-10 h-10 text-green-500 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-gray-800">SEE Excellence</h3>
              <p className="text-sm text-gray-600">Multiple students achieving perfect 4.0 GPA and subject-wise top scores.</p>
            </div>
          </div>
        </div>
      </div>

      {/* NEB/HSEB Toppers Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 font-serif">Academic Board Toppers (NEB/HSEB)</h2>
            <p className="text-gray-600 mt-2">A proud history of academic dominance in national examinations.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Year (BS)</th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Student Name</th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Achievement</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {nebToppers.map((topper, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{topper.year}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{topper.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-primary-700">{topper.achievement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Career Placements */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 font-serif">Our Alumni in Professional Careers</h2>
            <p className="text-gray-600 mt-2">Our graduates excel in competitive fields, a testament to our quality education.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Medical Professionals */}
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h3 className="text-xl font-bold text-red-800 mb-4">Medical Professionals</h3>
              <ul className="space-y-2">
                {medicalAlumni.map((alumnus, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <UserCheck className="w-4 h-4 text-red-500" />
                    <span>{alumnus.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Engineering Professionals */}
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Engineering Professionals</h3>
              <ul className="space-y-2">
                {engineeringAlumni.map((alumnus, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <UserCheck className="w-4 h-4 text-blue-500" />
                    <span>{alumnus.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Other Fields */}
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h3 className="text-xl font-bold text-green-800 mb-4">Diverse Fields</h3>
               <ul className="space-y-2">
                  <li className="flex items-center gap-3 text-gray-700"><CheckCircle className="w-4 h-4 text-green-500" /> B.Sc. Agriculture & Forestry</li>
                  <li className="flex items-center gap-3 text-gray-700"><CheckCircle className="w-4 h-4 text-green-500" /> Nursing & Paramedical</li>
                  <li className="flex items-center gap-3 text-gray-700"><CheckCircle className="w-4 h-4 text-green-500" /> B.Sc. CSIT</li>
                  <li className="flex items-center gap-3 text-gray-700"><CheckCircle className="w-4 h-4 text-green-500" /> Public Service (Lok Sewa)</li>
                  <li className="flex items-center gap-3 text-gray-700"><CheckCircle className="w-4 h-4 text-green-500" /> Banking Sector</li>
               </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* SEE Success */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 font-serif">SEE (Secondary Education Examination) Success</h2>
            <p className="text-gray-600 mt-2">Building a strong foundation from the school level.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* District Toppers */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">District Toppers (GPA 4.0)</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {seeDistrictToppers.map((topper, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-700">
                    <Medal className="w-4 h-4 text-yellow-600" />
                    <span>{topper.name}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Subject Toppers */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Subject Toppers (GPA 4.0)</h3>
              <div className="space-y-3">
                {seeSubjectToppers.map((subjectGroup, index) => (
                  <div key={index}>
                    <p className="font-semibold text-primary-700 text-sm">{subjectGroup.subject}</p>
                    <p className="text-gray-600 text-sm">{subjectGroup.names.join(', ')}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;

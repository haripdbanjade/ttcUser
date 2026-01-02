import React, { useState } from 'react';
import { Users, Mail, Phone, BookOpen, GraduationCap, Briefcase, Beaker, BarChart3, Building2, Layout } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  qualification: string;
  experience?: string;
  image: string;
  category: string;
  courses?: string[];
  level?: '+2' | 'BBA' | 'MBA' | 'BBA/MBA';
}

const teamData: TeamMember[] = [
  // Leadership
  { id: '1', name: "Dr. Ram Chandra Pandey", role: "Campus Chief", qualification: "Ph.D. in Physics", experience: "20+ Years", image: "https://picsum.photos/400/400?random=50", category: 'leadership' },
  { id: '2', name: "Prof. Krishna Prasad", role: "Academic Director", qualification: "M.Sc. Mathematics", experience: "25+ Years", image: "https://picsum.photos/400/400?random=51", category: 'leadership' },
  
  // +2 Science Faculty
  { id: '3', name: "Mr. Hari Prasad", role: "HOD - Physics", qualification: "M.Sc. Physics", experience: "15 Years", image: "https://picsum.photos/400/400?random=60", category: 'plus2_science', level: '+2', courses: ['Physics XI', 'Physics XII'] },
  { id: '4', name: "Mr. Ramesh Yadav", role: "HOD - Chemistry", qualification: "M.Sc. Chemistry", experience: "18 Years", image: "https://picsum.photos/400/400?random=61", category: 'plus2_science', level: '+2', courses: ['Chemistry XI', 'Chemistry XII'] },
  { id: '5', name: "Mrs. S. Karki", role: "Biology Coordinator", qualification: "M.Sc. Botany", experience: "12 Years", image: "https://picsum.photos/400/400?random=62", category: 'plus2_science', level: '+2', courses: ['Botany', 'Zoology'] },
  { id: '6', name: "Mr. D.R. Bhatta", role: "Senior Lecturer", qualification: "M.Sc. Mathematics", experience: "14 Years", image: "https://picsum.photos/400/400?random=90", category: 'plus2_science', level: '+2', courses: ['Mathematics XI', 'Mathematics XII'] },
  { id: '6b', name: "Mr. K.P. Sharma", role: "Lecturer - Physics", qualification: "M.Sc. Physics", experience: "8 Years", image: "https://picsum.photos/400/400?random=91", category: 'plus2_science', level: '+2', courses: ['Physics Practicals'] },

  // +2 Management Faculty
  { id: '7', name: "Mr. B.B. Singh", role: "Management Coordinator", qualification: "MBA", experience: "16 Years", image: "https://picsum.photos/400/400?random=63", category: 'plus2_management', level: '+2', courses: ['Business Studies', 'Economics'] },
  { id: '8', name: "Mrs. A. Tuladhar", role: "Lecturer - Accountancy", qualification: "MBS", experience: "10 Years", image: "https://picsum.photos/400/400?random=64", category: 'plus2_management', level: '+2', courses: ['Accountancy XI', 'Accountancy XII'] },
  { id: '9b', name: "Mr. S.R. Khanal", role: "Lecturer - Computer", qualification: "MCA", experience: "9 Years", image: "https://picsum.photos/400/400?random=92", category: 'plus2_management', level: '+2', courses: ['Computer Science', 'Hotel Management'] },

  // BBA Faculty
  { id: '9', name: "Dr. Rita Pandey", role: "BBA Program Coordinator", qualification: "Ph.D. Economics", experience: "15 Years", image: "https://picsum.photos/400/400?random=67", category: 'bba', level: 'BBA', courses: ['Managerial Economics', 'Microeconomics'] },
  { id: '10', name: "Mr. Ramesh Sharma", role: "Senior Lecturer", qualification: "M.Phil Management", experience: "12 Years", image: "https://picsum.photos/400/400?random=100", category: 'bba', level: 'BBA', courses: ['Organizational Behavior', 'HRM'] },
  { id: '11', name: "Mrs. Sunita Rana", role: "Lecturer", qualification: "MBA (Finance)", experience: "8 Years", image: "https://picsum.photos/400/400?random=101", category: 'bba', level: 'BBA', courses: ['Financial Accounting', 'Corporate Finance'] },

  // MBA Faculty
  { id: '12', name: "Parbin Gyawali", role: "MBA Program Coordinator", qualification: "MBA", experience: "11 Years", image: "https://picsum.photos/400/400?random=53", category: 'mba', level: 'MBA', courses: ['Strategic Management', 'Entrepreneurship'] },
  { id: '12a', name: "Prof. Dr. A. K. Jha", role: "Visiting Professor", qualification: "Ph.D. in Management", experience: "30+ Years", image: "https://picsum.photos/400/400?random=102", category: 'mba', level: 'MBA', courses: ['Business Research Methods'] },
  { id: '12b', name: "Mr. B. Adhikari", role: "Senior Lecturer", qualification: "CA, MBA", experience: "15 Years", image: "https://picsum.photos/400/400?random=103", category: 'mba', level: 'BBA/MBA', courses: ['Management Accounting', 'Corporate Governance'] },

  // Administration
  { id: '13', name: "Mr. Rajan K.C.", role: "Exam Controller", qualification: "MBS", experience: "10 Years", image: "https://picsum.photos/400/400?random=58", category: 'admin' },
  { id: '14', name: "Mrs. Sarita Sharma", role: "+2 Coordinator", qualification: "M.A. English", experience: "12 Years", image: "https://picsum.photos/400/400?random=52", category: 'admin' },
  { id: '15', name: "Mr. K.L. Yadav", role: "Account Officer", qualification: "BBS", experience: "7 Years", image: "https://picsum.photos/400/400?random=95", category: 'admin' },
  { id: '16', name: "Mrs. P. Gurung", role: "Library Head", qualification: "M.Lib", experience: "5 Years", image: "https://picsum.photos/400/400?random=96", category: 'admin' },
];

const tabs = [
  { id: 'leadership', label: 'Leadership', icon: GraduationCap },
  { id: 'plus2_science', label: '+2 Science', icon: Beaker },
  { id: 'plus2_management', label: '+2 Management', icon: Briefcase },
  { id: 'bba', label: 'BBA Faculty', icon: BarChart3 },
  { id: 'mba', label: 'MBA Faculty', icon: Building2 },
  { id: 'admin', label: 'Administration', icon: Layout },
];

const Team: React.FC = () => {
  const [activeTab, setActiveTab] = useState('leadership');

  const filteredMembers = teamData.filter(member => member.category === activeTab);

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-primary-900 py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Our Team</h1>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            The dedicated educators, administrators, and staff members behind our academic excellence.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-sm text-sm sm:text-base ${
                activeTab === tab.id
                  ? 'bg-primary-600 text-white shadow-md transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-primary-600'
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div>
           <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary-100 rounded-lg text-primary-600">
                 {tabs.find(t => t.id === activeTab)?.icon && React.createElement(tabs.find(t => t.id === activeTab)!.icon, { size: 24 })}
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                {tabs.find(t => t.id === activeTab)?.label}
              </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredMembers.map((member) => (
                 <div key={member.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all group flex flex-col text-center">
                    <div className="relative h-56 bg-gray-100">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                        <p className="text-primary-600 font-medium text-sm mb-4">{member.role}</p>
                        
                        <div className="space-y-3 text-left text-sm text-gray-600 mb-4 border-t border-b border-gray-100 py-4">
                            <div className="flex items-start gap-2.5">
                                <GraduationCap size={18} className="text-gray-400 mt-0.5 shrink-0" />
                                <span>{member.qualification}</span>
                            </div>
                            {member.experience && (
                                <div className="flex items-start gap-2.5">
                                    <Briefcase size={18} className="text-gray-400 mt-0.5 shrink-0" />
                                    <span>{member.experience} of experience</span>
                                </div>
                            )}
                        </div>

                        {member.courses && member.courses.length > 0 && (
                        <div className="mt-auto text-left">
                            <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">Subjects Taught</h4>
                            <div className="flex flex-wrap gap-1.5 justify-start">
                                {member.courses.map(course => (
                                    <span key={course} className="text-[10px] bg-gray-100 text-gray-700 font-semibold px-2 py-1 rounded">
                                        {course}
                                    </span>
                                ))}
                            </div>
                        </div>
                        )}
                    </div>
                </div>
              ))}
           </div>
           
           {filteredMembers.length === 0 && (
              <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                 <p className="text-gray-500">No team members found in this category.</p>
              </div>
           )}
        </div>

      </div>
    </div>
  );
};

export default Team;
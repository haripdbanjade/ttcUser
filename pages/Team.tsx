import React, { useState } from 'react';
import { Users, Mail, Phone, BookOpen, GraduationCap, Briefcase, Monitor, Beaker, Calculator, Layout } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  qualification: string;
  image: string;
  category: string;
}

const teamData: TeamMember[] = [
  // Leadership
  { id: '1', name: "Dr. Ram Chandra Pandey", role: "Campus Chief", qualification: "Ph.D. in Physics", image: "https://picsum.photos/400/400?random=50", category: 'leadership' },
  { id: '2', name: "Prof. Krishna Prasad", role: "Academic Director", qualification: "M.Sc. Mathematics", image: "https://picsum.photos/400/400?random=51", category: 'leadership' },
  
  // Science Faculty
  { id: '3', name: "Mr. Hari Prasad", role: "HOD - Physics", qualification: "M.Sc. Physics", image: "https://picsum.photos/400/400?random=60", category: 'science' },
  { id: '4', name: "Mr. Ramesh Yadav", role: "HOD - Chemistry", qualification: "M.Sc. Chemistry", image: "https://picsum.photos/400/400?random=61", category: 'science' },
  { id: '5', name: "Mrs. S. Karki", role: "Biology Coordinator", qualification: "M.Sc. Botany", image: "https://picsum.photos/400/400?random=62", category: 'science' },
  { id: '6', name: "Mr. D.R. Bhatta", role: "Senior Lecturer", qualification: "M.Sc. Mathematics", image: "https://picsum.photos/400/400?random=90", category: 'science' },
  { id: '6b', name: "Mr. K.P. Sharma", role: "Lecturer - Physics", qualification: "M.Sc. Physics", image: "https://picsum.photos/400/400?random=91", category: 'science' },

  // Management Faculty
  { id: '7', name: "Mr. B.B. Singh", role: "Management Coordinator", qualification: "MBA", image: "https://picsum.photos/400/400?random=63", category: 'management' },
  { id: '8', name: "Mrs. A. Tuladhar", role: "Lecturer - Accountancy", qualification: "MBS", image: "https://picsum.photos/400/400?random=64", category: 'management' },
  { id: '9', name: "Dr. Rita Pandey", role: "Senior Lecturer - Economics", qualification: "Ph.D. Economics", image: "https://picsum.photos/400/400?random=67", category: 'management' },
  { id: '9b', name: "Mr. S.R. Khanal", role: "Lecturer - Business Studies", qualification: "MBA", image: "https://picsum.photos/400/400?random=92", category: 'management' },

  // CSIT Faculty
  { id: '10', name: "Er. Sandeep Shrestha", role: "CSIT Program Head", qualification: "B.E. Computer", image: "https://picsum.photos/400/400?random=65", category: 'csit' },
  { id: '11', name: "Mr. Prakash Khadka", role: "Senior Lecturer", qualification: "M.Sc. CSIT", image: "https://picsum.photos/400/400?random=66", category: 'csit' },
  { id: '12', name: "Mr. Bishnu Thapa", role: "IT Coordinator", qualification: "M.Sc. IT", image: "https://picsum.photos/400/400?random=53", category: 'csit' },
  { id: '12b', name: "Er. R.K. Jha", role: "Lecturer - Digital Logic", qualification: "B.E. Electronics", image: "https://picsum.photos/400/400?random=93", category: 'csit' },

  // Administration
  { id: '13', name: "Mr. Rajan K.C.", role: "Exam Controller", qualification: "MBS", image: "https://picsum.photos/400/400?random=58", category: 'admin' },
  { id: '14', name: "Mrs. Sarita Sharma", role: "+2 Coordinator", qualification: "M.A. English", image: "https://picsum.photos/400/400?random=52", category: 'admin' },
  { id: '15', name: "Mr. K.L. Yadav", role: "Account Officer", qualification: "BBS", image: "https://picsum.photos/400/400?random=95", category: 'admin' },
  { id: '16', name: "Mrs. P. Gurung", role: "Library Head", qualification: "M.Lib", image: "https://picsum.photos/400/400?random=96", category: 'admin' },
];

const tabs = [
  { id: 'leadership', label: 'Leadership', icon: GraduationCap },
  { id: 'science', label: 'Science Faculty', icon: Beaker },
  { id: 'management', label: 'Management Faculty', icon: Briefcase },
  { id: 'csit', label: 'CSIT / IT Faculty', icon: Monitor },
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
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-sm ${
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
                <div key={member.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all group">
                  <div className="relative overflow-hidden h-64 bg-gray-100">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                       <div className="flex items-center gap-2 mb-1 text-xs">
                         <BookOpen size={14} /> {member.qualification}
                       </div>
                       <div className="flex gap-3 mt-2">
                         <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white/40"><Mail size={16} /></a>
                         <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white/40"><Phone size={16} /></a>
                       </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                    <p className="text-primary-600 font-medium text-sm mt-1 mb-2">{member.role}</p>
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
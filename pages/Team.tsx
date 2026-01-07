import React, { useState } from 'react';
import { BookOpen, GraduationCap, Briefcase, Beaker, BarChart3, Building2, Layout, Atom, Dna, Sigma, Book, Monitor } from 'lucide-react';
import { facultyData } from '../data/facultyData';


const tabs = [
  { id: 'leadership', label: 'Leadership', icon: GraduationCap },
  { id: 'chemistry', label: 'Chemistry', icon: Beaker },
  { id: 'physics', label: 'Physics', icon: Atom },
  { id: 'biology', label: 'Biology', icon: Dna },
  { id: 'management', label: 'Management', icon: Briefcase },
  { id: 'mathematics', label: 'Mathematics', icon: Sigma },
  { id: 'english', label: 'English', icon: BookOpen },
  { id: 'nepali', label: 'Nepali', icon: Book },
  { id: 'computer_social', label: 'Computer & Social', icon: Monitor },
  { id: 'bba', label: 'BBA Faculty', icon: BarChart3 },
  { id: 'mba', label: 'MBA Faculty', icon: Building2 },
  { id: 'admin', label: 'Administration', icon: Layout },
];

const Team: React.FC = () => {
  const [activeTab, setActiveTab] = useState('leadership');

  const filteredMembers = facultyData.filter(member => member.category === activeTab);

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
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3 py-2 sm:px-5 sm:py-3 rounded-full font-medium transition-all duration-300 shadow-sm text-xs sm:text-sm ${
                activeTab === tab.id
                  ? 'bg-primary-600 text-white shadow-md transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-primary-600'
              }`}
            >
              <tab.icon size={16} />
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

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMembers.map((member) => (
                 <div key={member.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all group flex flex-col text-center transform hover:-translate-y-1">
                    <div className="relative h-64 bg-gray-100">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover object-center" />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                        <h3 className="text-base font-bold text-gray-900">{member.name}</h3>
                        <p className="text-primary-600 font-medium text-sm">{member.role}</p>
                        {member.subject && <p className="text-gray-500 text-xs mt-1">{member.subject}</p>}
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
import React from 'react';
import { Users, UserCheck, Building } from 'lucide-react';

const boardMembers = [
  { name: "Mr. Shiva Prasad Sharma", role: "Chairman", bio: "Former Dean of TU, Educationist with 40 years of experience." },
  { name: "Dr. Ram Chandra Pandey", role: "Member Secretary", bio: "Campus Chief, Physicist and Academic Administrator." },
  { name: "Mr. Bishnu Bhusal", role: "Member", bio: "Social Worker and Entrepreneur." },
  { name: "Mrs. Gita Koirala", role: "Member", bio: "Representative from Local Government." },
  { name: "Prof. Dr. Madhav Raj", role: "Member", bio: "Professor at Tribhuvan University." },
  { name: "Mr. Keshav Raj", role: "Member", bio: "Guardian Representative." },
  { name: "Mr. Subash Chandra", role: "Member", bio: "Education Expert." }
];

const Board: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-primary-900 py-20 text-center text-white relative">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Board of Directors</h1>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            The visionaries providing strategic direction and governance to Tilottama College.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
               <Building size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">College Management Committee</h2>
            <p className="text-gray-600 mt-2">Dedicated to maintaining high educational standards and institutional growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {/* Chairman Card - Featured */}
             <div className="md:col-span-2 bg-primary-50 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 border border-primary-100">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                   <UserCheck size={48} className="text-primary-600" />
                </div>
                <div className="text-center md:text-left">
                   <div className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded-full mb-2 uppercase">Chairman</div>
                   <h3 className="text-2xl font-bold text-gray-900">{boardMembers[0].name}</h3>
                   <p className="text-gray-600 mt-2">{boardMembers[0].bio}</p>
                </div>
             </div>

             {/* Other Members */}
             {boardMembers.slice(1).map((member, idx) => (
               <div key={idx} className="bg-white rounded-lg border border-gray-200 p-6 flex items-start gap-4 hover:border-primary-300 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                     <Users size={20} className="text-gray-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{member.name}</h4>
                    <p className="text-primary-600 text-sm font-medium">{member.role}</p>
                    <p className="text-gray-500 text-sm mt-1">{member.bio}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
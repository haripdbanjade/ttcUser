import React, { useState } from 'react';
import { Camera, MapPin, X, Video, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TourLocation {
  title: string;
  description: string;
  image: string; // Thumbnail image
  videoUrl: string;
  photos: string[];
}

const tourLocations: TourLocation[] = [
  {
    title: 'Main Building',
    description: 'The administrative and academic heart of the college, housing the main offices and several classrooms.',
    image: 'https://picsum.photos/800/600?random=301',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_1?autoplay=1&mute=1',
    photos: [
      'https://picsum.photos/800/600?random=401',
      'https://picsum.photos/800/600?random=402',
      'https://picsum.photos/800/600?random=403',
    ]
  },
  {
    title: 'Library',
    description: 'A quiet space with over 20,000 books, journals, and digital resources for students and faculty.',
    image: 'https://picsum.photos/800/600?random=302',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_2?autoplay=1&mute=1',
    photos: [
      'https://picsum.photos/800/600?random=404',
      'https://picsum.photos/800/600?random=405',
      'https://picsum.photos/800/600?random=406',
    ]
  },
  {
    title: 'Chemistry Lab',
    description: 'Fully equipped with modern apparatus for practical experiments, research, and demonstrations.',
    image: 'https://picsum.photos/800/600?random=303',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_3?autoplay=1&mute=1',
    photos: [
      'https://picsum.photos/800/600?random=407',
      'https://picsum.photos/800/600?random=408',
    ]
  },
  {
    title: 'Computer Lab',
    description: 'High-speed internet and modern computers with the latest software for IT and management students.',
    image: 'https://picsum.photos/800/600?random=304',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_4?autoplay=1&mute=1',
    photos: [
      'https://picsum.photos/800/600?random=409',
      'https://picsum.photos/800/600?random=410',
      'https://picsum.photos/800/600?random=411',
    ]
  },
  {
    title: 'Cafeteria',
    description: 'Serving hygienic and delicious meals, snacks, and beverages for students and staff in a vibrant setting.',
    image: 'https://picsum.photos/800/600?random=305',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_5?autoplay=1&mute=1',
    photos: [
      'https://picsum.photos/800/600?random=412',
      'https://picsum.photos/800/600?random=413',
    ]
  },
  {
    title: 'Sports Ground',
    description: 'A large, multi-purpose ground with facilities for cricket, football, and various athletic events.',
    image: 'https://picsum.photos/800/600?random=306',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_6?autoplay=1&mute=1',
    photos: [
      'https://picsum.photos/800/600?random=414',
      'https://picsum.photos/800/600?random=415',
      'https://picsum.photos/800/600?random=416',
    ]
  },
   {
    title: 'Auditorium',
    description: 'A spacious hall with modern audio-visual equipment for hosting seminars, workshops, and cultural programs.',
    image: 'https://picsum.photos/800/600?random=307',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_7?autoplay=1&mute=1',
    photos: [
      'https://picsum.photos/800/600?random=417',
      'https://picsum.photos/800/600?random=418',
    ]
  },
  {
    title: 'Biology Lab',
    description: 'Advanced equipment, specimens, and microscopes for biological studies and experiments.',
    image: 'https://picsum.photos/800/600?random=308',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_8?autoplay=1&mute=1',
    photos: [
      'https://picsum.photos/800/600?random=419',
      'https://picsum.photos/800/600?random=420',
      'https://picsum.photos/800/600?random=421',
    ]
  }
];

const Tour: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<TourLocation | null>(null);
  
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2, ease: 'easeIn' } },
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="bg-primary-900 py-20 text-center">
        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
          <Camera className="text-white" size={40} />
        </div>
        <h1 className="text-4xl font-bold text-white font-serif mb-4">Campus Virtual Tour</h1>
        <p className="text-primary-100 max-w-2xl mx-auto text-lg">
          Explore our state-of-the-art facilities from anywhere in the world.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Tour Video */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 font-serif mb-6 text-center">Campus Overview</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ"
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Key Locations */}
        <div>
           <h2 className="text-3xl font-bold text-gray-900 font-serif mb-10 text-center">Key Locations</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {tourLocations.map((location, index) => (
               <div 
                 key={index} 
                 className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100"
                 onClick={() => setSelectedLocation(location)}
                >
                 <div className="relative h-56">
                   <img 
                     src={location.image} 
                     alt={location.title} 
                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                   />
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <div className="w-16 h-16 border-4 border-white/50 rounded-full flex items-center justify-center">
                        <Camera size={24} className="text-white" />
                     </div>
                   </div>
                 </div>
                 <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                       <MapPin size={16} className="text-primary-500" />
                       {location.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{location.description}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>

      {/* Location Detail Modal */}
      <AnimatePresence>
        {selectedLocation && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedLocation(null)}
          >
            <motion.div 
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white w-full max-w-5xl h-[95vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 sm:p-6 flex justify-between items-center border-b border-gray-200 bg-gray-50">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{selectedLocation.title}</h2>
                <button 
                  className="text-gray-400 hover:text-gray-600"
                  onClick={() => setSelectedLocation(null)}
                >
                  <X size={28} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 sm:p-8">
                {/* Video Section */}
                <div className="mb-8">
                   <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2"><Video className="text-primary-600" /> Video Tour</h3>
                   <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg border border-gray-100">
                      <iframe 
                        src={selectedLocation.videoUrl}
                        title={`${selectedLocation.title} Video Tour`} 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                   </div>
                   <p className="text-gray-600 mt-4 text-sm">{selectedLocation.description}</p>
                </div>

                {/* Photo Gallery Section */}
                <div>
                   <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2"><ImageIcon className="text-primary-600" /> Photo Gallery</h3>
                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {selectedLocation.photos.map((photo, index) => (
                         <div key={index} className="relative aspect-w-4 aspect-h-3 rounded-lg overflow-hidden group cursor-pointer">
                            <img src={photo} alt={`${selectedLocation.title} photo ${index + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                         </div>
                      ))}
                   </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tour;
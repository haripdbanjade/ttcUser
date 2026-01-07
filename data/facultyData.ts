export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  category: string;
  image: string;
  subject?: string;
}

export const facultyData: FacultyMember[] = [
  // Leadership
  { id: 'lead-1', name: "Prof. Dr. Ram Chandra Acharya", role: "Principal", category: 'leadership', image: "https://picsum.photos/400/400?random=50", subject: "Economics" },
  { id: 'lead-2', name: "Mukunda Raj Acharya", role: "Vice-Principal", category: 'leadership', image: "https://picsum.photos/400/400?random=301", subject: "Mathematics" },

  // NEB Chemistry
  { id: 'chem-1', name: 'Asso. Prof. Dr. Krishna Pd. Sharma', role: 'Head of Department', category: 'chemistry', image: 'https://picsum.photos/400/400?random=101', subject: 'Chemistry' },
  { id: 'chem-2', name: 'Prof. Dr. R.C. Poudel', role: 'Visiting Faculty', category: 'chemistry', image: 'https://picsum.photos/400/400?random=102', subject: 'Chemistry' },
  { id: 'chem-3', name: 'Prof. B.R. Bhattarai', role: 'Visiting Faculty', category: 'chemistry', image: 'https://picsum.photos/400/400?random=103', subject: 'Chemistry' },
  { id: 'chem-4', name: 'Mr. Badri Panthi', role: 'Faculty', category: 'chemistry', image: 'https://picsum.photos/400/400?random=104', subject: 'Chemistry' },
  { id: 'chem-5', name: 'Asso. Prof. Bharat Singh Bista', role: 'Faculty', category: 'chemistry', image: 'https://picsum.photos/400/400?random=105', subject: 'Chemistry' },
  { id: 'chem-6', name: 'Asso. Prof. Krishna Poudel', role: 'Visiting Faculty', category: 'chemistry', image: 'https://picsum.photos/400/400?random=106', subject: 'Chemistry' },
  { id: 'chem-7', name: 'Mr. Dipak Thapa', role: 'Faculty', category: 'chemistry', image: 'https://picsum.photos/400/400?random=107', subject: 'Chemistry' },
  { id: 'chem-8', name: 'Mr. Yuvraj Ghimire', role: 'Faculty', category: 'chemistry', image: 'https://picsum.photos/400/400?random=108', subject: 'Chemistry' },
  { id: 'chem-9', name: 'Mrs. Sudip Khanal', role: 'Faculty', category: 'chemistry', image: 'https://picsum.photos/400/400?random=109', subject: 'Chemistry' },
  { id: 'chem-10', name: 'Mr. Himal Aryal', role: 'Faculty', category: 'chemistry', image: 'https://picsum.photos/400/400?random=110', subject: 'Chemistry' },
  { id: 'chem-11', name: 'Mr. Tilak Adhikari', role: 'Faculty', category: 'chemistry', image: 'https://picsum.photos/400/400?random=111', subject: 'Chemistry' },
  { id: 'chem-12', name: 'Mr. Prakash Bhandari', role: 'Faculty', category: 'chemistry', image: 'https://picsum.photos/400/400?random=112', subject: 'Chemistry' },
  { id: 'chem-13', name: 'Mr. Yogesh Chaudhary', role: 'Visiting Faculty', category: 'chemistry', image: 'https://picsum.photos/400/400?random=113', subject: 'Chemistry' },
  
  // NEB Physics
  { id: 'phy-1', name: 'Prof. Dr. Ananta Panthi', role: 'Head of Department', category: 'physics', image: 'https://picsum.photos/400/400?random=121', subject: 'Physics' },
  { id: 'phy-2', name: 'Asso. Prof. Laxmi Nath Bhattrai', role: 'Faculty', category: 'physics', image: 'https://picsum.photos/400/400?random=122', subject: 'Physics' },
  { id: 'phy-3', name: 'Mr. Keshab Raj Gautam', role: 'Faculty', category: 'physics', image: 'https://picsum.photos/400/400?random=123', subject: 'Physics' },
  { id: 'phy-4', name: 'Mr. Jaya Ram Pokhrel', role: 'Faculty', category: 'physics', image: 'https://picsum.photos/400/400?random=124', subject: 'Physics' },
  { id: 'phy-5', name: 'Mr. Mahesh Pokherel', role: 'Faculty', category: 'physics', image: 'https://picsum.photos/400/400?random=125', subject: 'Physics' },
  { id: 'phy-6', name: 'Mr. Krishna Thapa', role: 'Faculty', category: 'physics', image: 'https://picsum.photos/400/400?random=126', subject: 'Physics' },
  { id: 'phy-7', name: 'Mr. Chiranjibi Bashyal', role: 'Faculty', category: 'physics', image: 'https://picsum.photos/400/400?random=127', subject: 'Physics' },

  // NEB Biology
  { id: 'bio-1', name: 'Mr. Bidhya Sagar Jha', role: 'Head of Department', category: 'biology', image: 'https://picsum.photos/400/400?random=131', subject: 'Biology' },
  { id: 'bio-2', name: 'Mr. Navendu Dhakal', role: 'Faculty', category: 'biology', image: 'https://picsum.photos/400/400?random=132', subject: 'Biology & Zoology' },
  { id: 'bio-3', name: 'Prof. Dr. Mohan Panthi', role: 'Visiting Faculty', category: 'biology', image: 'https://picsum.photos/400/400?random=133', subject: 'Botany' },
  { id: 'bio-4', name: 'Mr. Resham Thapa', role: 'Faculty', category: 'biology', image: 'https://picsum.photos/400/400?random=134', subject: 'Zoology' },
  { id: 'bio-5', name: 'Mr. Krishna Adhikari', role: 'Faculty', category: 'biology', image: 'https://picsum.photos/400/400?random=135', subject: 'Botany' },
  { id: 'bio-6', name: 'Mr. Ghanashyam Chaudhary', role: 'Faculty', category: 'biology', image: 'https://picsum.photos/400/400?random=136', subject: 'Biology' },
    
  // NEB Mathematics
  { id: 'math-1', name: "Mr. Mukunda Raj Acharya", role: "Vice-Principal", category: 'mathematics', image: "https://picsum.photos/400/400?random=301", subject: "Mathematics" },
  { id: 'math-2', name: 'Mr. D.L. Das', role: 'Visiting Faculty', category: 'mathematics', image: 'https://picsum.photos/400/400?random=162', subject: 'Mathematics' },
  { id: 'math-3', name: 'Mr. Tulsi Pd. Sapkota', role: 'Visiting Faculty', category: 'mathematics', image: 'https://picsum.photos/400/400?random=163', subject: 'Mathematics' },
  { id: 'math-4', name: 'Mr. Naryan Karki', role: 'Faculty', category: 'mathematics', image: 'https://picsum.photos/400/400?random=164', subject: 'Mathematics' },
  { id: 'math-5', name: 'Mr. Raju Khanal', role: 'Faculty', category: 'mathematics', image: 'https://picsum.photos/400/400?random=165', subject: 'Mathematics' },
  { id: 'math-6', name: 'Mr. Baburam Chudali', role: 'Faculty', category: 'mathematics', image: 'https://picsum.photos/400/400?random=166', subject: 'Mathematics' },
  { id: 'math-7', name: 'Mr. Ravi Kumar Keshari', role: 'Faculty', category: 'mathematics', image: 'https://picsum.photos/400/400?random=167', subject: 'Mathematics' },
  { id: 'math-8', name: 'Mr. Bhojraj Paudel', role: 'Faculty', category: 'mathematics', image: 'https://picsum.photos/400/400?random=168', subject: 'Mathematics' },
  
  // NEB English
  { id: 'eng-1', name: 'Dr. Tilak Bhusal', role: 'Head of Department', category: 'english', image: 'https://picsum.photos/400/400?random=171', subject: 'English' },
  { id: 'eng-2', name: 'Mr. Raju Sharma', role: 'Faculty', category: 'english', image: 'https://picsum.photos/400/400?random=172', subject: 'English' },
  { id: 'eng-3', name: 'Mr. D.B. Thapa', role: 'Faculty', category: 'english', image: 'https://picsum.photos/400/400?random=173', subject: 'English' },
  { id: 'eng-4', name: 'Mr. Bhim Lal Bhandari', role: 'Faculty', category: 'english', image: 'https://picsum.photos/400/400?random=174', subject: 'English' },
  { id: 'eng-5', name: 'Mr. Rajendra Poudel', role: 'Faculty', category: 'english', image: 'https://picsum.photos/400/400?random=175', subject: 'English' },
  { id: 'eng-6', name: 'Mr. Dolraj Belbase', role: 'Faculty', category: 'english', image: 'https://picsum.photos/400/400?random=176', subject: 'English' },
  
  // NEB Nepali
  { id: 'nep-1', name: 'Asso. Prof. SP Gyawali', role: 'Head of Department', category: 'nepali', image: 'https://picsum.photos/400/400?random=181', subject: 'Nepali' },
  { id: 'nep-2', name: 'Asso. Prof. R.R. Bhusal', role: 'Visiting Faculty', category: 'nepali', image: 'https://picsum.photos/400/400?random=182', subject: 'Nepali' },
  { id: 'nep-3', name: 'Mr. Ishwari Pokhrel', role: 'Faculty', category: 'nepali', image: 'https://picsum.photos/400/400?random=183', subject: 'Nepali' },
  { id: 'nep-4', name: 'Dr. Prem Tiwari', role: 'Faculty', category: 'nepali', image: 'https://picsum.photos/400/400?random=184', subject: 'Nepali' },
  { id: 'nep-5', name: 'Mr. Bishnu Prasad Bhandari', role: 'Faculty', category: 'nepali', image: 'https://picsum.photos/400/400?random=185', subject: 'Nepali' },
  
  // NEB Computer and Social Studies
  { id: 'cs-1', name: 'Mr. Ashish Bhandari', role: 'Faculty', category: 'computer_social', image: 'https://picsum.photos/400/400?random=191', subject: 'Computer Science' },
  { id: 'cs-2', name: 'Mr. Shankar Bhandari', role: 'Faculty', category: 'computer_social', image: 'https://picsum.photos/400/400?random=192', subject: 'Computer Science' },
  { id: 'cs-3', name: 'Mr. Yubraj Khanal', role: 'Faculty', category: 'computer_social', image: 'https://picsum.photos/400/400?random=193', subject: 'Computer Science' },
  { id: 'cs-4', name: 'Mr. Krishna Shrestha', role: 'Faculty', category: 'computer_social', image: 'https://picsum.photos/400/400?random=194', subject: 'Computer Science' },
  { id: 'cs-5', name: 'Mrs. Mira K.C.', role: 'Faculty', category: 'computer_social', image: 'https://picsum.photos/400/400?random=195', subject: 'Social Studies' },
  { id: 'cs-6', name: 'Mrs. Kavita Panthi', role: 'Faculty', category: 'computer_social', image: 'https://picsum.photos/400/400?random=196', subject: 'Social Studies' },

  // Management Faculty (BBA/MBA)
  { id: 'mgmt-new-1', name: 'Dr. Santosh Gyawali', role: 'Faculty', category: 'management', image: 'https://picsum.photos/400/400?random=201', subject: 'General Management' },
  { id: 'mgmt-new-2', name: 'Mr. Prabin Gyawali', role: 'Faculty', category: 'management', image: 'https://picsum.photos/400/400?random=202', subject: 'General Management' },
  { id: 'mgmt-new-3', name: 'Mr. Parthamani Acharaya', role: 'Faculty', category: 'management', image: 'https://picsum.photos/400/400?random=203', subject: 'General Management' },
  { id: 'mgmt-new-4', name: 'Mr. Ujjwal Adhikari', role: 'Faculty', category: 'management', image: 'https://picsum.photos/400/400?random=204', subject: 'Marketing' },
  { id: 'mgmt-new-5', name: 'Mr. Arpan Shrestha', role: 'Faculty', category: 'management', image: 'https://picsum.photos/400/400?random=205', subject: 'Marketing' },
  { id: 'mgmt-new-6', name: 'Mr. Rajendra Kumar Chettri', role: 'Faculty', category: 'management', image: 'https://picsum.photos/400/400?random=206', subject: 'Marketing' },
  { id: 'mgmt-new-7', name: 'Mr. Dadhi Sharma Bhandari', role: 'Faculty', category: 'management', image: 'https://picsum.photos/400/400?random=207', subject: 'Finance & Accounting' },
  { id: 'mgmt-new-8', name: 'Mr. Shivsundar Pokharel', role: 'Faculty', category: 'management', image: 'https://picsum.photos/400/400?random=208', subject: 'Finance & Accounting' },
  { id: 'mgmt-new-9', name: 'Mr. Indramani Pandey', role: 'Faculty', category: 'management', image: 'https://picsum.photos/400/400?random=209', subject: 'Finance & Accounting' },
  { id: 'mgmt-new-10', name: 'Mr. Umesh Sapkota', role: 'Faculty', category: 'management', image: 'https://picsum.photos/400/400?random=210', subject: 'Finance & Accounting' },
  { id: 'mgmt-new-11', name: 'Dr. Dasi Ram Bhandari', role: 'Faculty', category: 'management', image: 'https://picsum.photos/400/400?random=211', subject: 'Finance & Accounting' },
  { id: 'mgmt-new-12', name: 'Mr. L.N Pandey', role: 'Faculty', category: 'management', image: 'https://picsum.photos/400/400?random=212', subject: 'Economics & Int\'l Business' },
  { id: 'mgmt-new-13', name: 'Mr. Arjun Gautam', role: 'Faculty', category: 'management', image: 'https://picsum.photos/400/400?random=213', subject: 'Economics & Int\'l Business' },
  { id: 'mgmt-new-14', name: 'Mr. Bikash Bhatt Chhetri', role: 'Faculty', category: 'management', image: 'https://picsum.photos/400/400?random=214', subject: 'Economics & Int\'l Business' },
  { id: 'mgmt-new-15', name: 'Mr. Achyut Pant', role: 'Faculty', category: 'management', image: 'https://picsum.photos/400/400?random=215', subject: 'Economics & Int\'l Business' },
  { id: 'mgmt-new-16', name: 'Mr. Dilliram Gyawali', role: 'Faculty', category: 'management', image: 'https://picsum.photos/400/400?random=216', subject: 'Business Law' },
  { id: 'mgmt-new-17', name: 'Dr. Rabindra Gupta', role: 'Faculty', category: 'management', image: 'https://picsum.photos/400/400?random=217', subject: 'Statistics & Mathematics' },
  { id: 'mgmt-new-18', name: 'Mr. Govinda Gyawali', role: 'Faculty', category: 'management', image: 'https://picsum.photos/400/400?random=218', subject: 'Statistics & Mathematics' },
  { id: 'mgmt-new-19', name: 'Prof. Dr. Ram Chandra Paudel', role: 'Faculty', category: 'management', image: 'https://picsum.photos/400/400?random=219', subject: 'Business Communication' },
  { id: 'mgmt-new-20', name: 'Dr. Tilak Bhusal', role: 'Faculty', category: 'management', image: 'https://picsum.photos/400/400?random=220', subject: 'Business Communication' },
  { id: 'mgmt-new-21', name: 'Mr. Parthivendra Upadhaya', role: 'Faculty', category: 'management', image: 'https://picsum.photos/400/400?random=221', subject: 'Business Communication' },
  { id: 'mgmt-new-22', name: 'Mr. Badri Narayan Panthi', role: 'Faculty', category: 'management', image: 'https://picsum.photos/400/400?random=222', subject: 'Business Communication' },
  { id: 'mgmt-new-23', name: 'Dr. Raju Nepal', role: 'Faculty', category: 'management', image: 'https://picsum.photos/400/400?random=223', subject: 'Business Communication' },
  { id: 'mgmt-new-24', name: 'Mr. Naresh Kunwar', role: 'Faculty', category: 'management', image: 'https://picsum.photos/400/400?random=224', subject: 'Operations & IT' },
  { id: 'mgmt-new-25', name: 'Mr. Shankar Bhandari', role: 'Faculty', category: 'management', image: 'https://picsum.photos/400/400?random=225', subject: 'Operations & IT' },
  { id: 'mgmt-new-26', name: 'Mr. Krishna Shrestha', role: 'Faculty', category: 'management', image: 'https://picsum.photos/400/400?random=226', subject: 'Operations & IT' },
  
  // Administration
  { id: 'admin-1', name: "Mr. Rajan K.C.", role: "Exam Controller", category: 'admin', image: "https://picsum.photos/400/400?random=58" },
  { id: 'admin-2', name: "Mrs. Sarita Sharma", role: "+2 Coordinator", category: 'admin', image: "https://picsum.photos/400/400?random=52" },
  { id: 'admin-3', name: "Mr. K.L. Yadav", role: "Account Officer", category: 'admin', image: "https://picsum.photos/400/400?random=95" },
  { id: 'admin-4', name: "Mrs. P. Gurung", role: "Library Head", category: 'admin', image: "https://picsum.photos/400/400?random=96" },
];
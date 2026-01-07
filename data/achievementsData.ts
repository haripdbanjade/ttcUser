export interface NebTopper {
  year: string;
  name: string;
  achievement: string;
}

export interface Alumni {
  name: string;
}

export interface SeeTopper {
  name: string;
}

export interface SubjectTopper {
  subject: string;
  names: string[];
}


export const nebToppers: NebTopper[] = [
  { year: "2063 BS", name: "Dipendra Poudel", achievement: "1st Position (Board Topper)" },
  { year: "2064 BS", name: "Suman Gyawali", achievement: "1st Position (Board Topper)" },
  { year: "2065 BS", name: "Prakash Belbase", achievement: "6th Position" },
  { year: "2067 BS", name: "Pradeep Shrestha", achievement: "1st Position (Board Topper)" },
  { year: "2070 BS", name: "Suman Ghimire", achievement: "1st Position (Board Topper)" },
  { year: "2071 BS", name: "Pratistha Poudel", achievement: "1st Position (Board Topper)" },
  { year: "2072 BS", name: "Sujan Pokhrel", achievement: "1st Position (Board Topper)" },
  { year: "2073 BS", name: "Nitesh Thapa", achievement: "3.86 GPA (Science)" },
  { year: "2075 BS", name: "Bishal Acharya", achievement: "3.88 GPA (Science)" },
  { year: "2079 BS", name: "Pranjal Bashyal", achievement: "3.93 GPA (Science)" },
];

export const medicalAlumni: Alumni[] = [
  { name: "Dr. Sanjay Pd. Gupta" },
  { name: "Dr. Pratistha Poudel" },
  { name: "Dr. Kamal Thapa" },
  { name: "Dr. Bina Sunar" },
  { name: "Dr. Sushan Shrestha" },
];

export const engineeringAlumni: Alumni[] = [
  { name: "Er. Pramod Ghimire" },
  { name: "Er. Saroj Panthi" },
  { name: "Er. Bikram Thapa" },
  { name: "Er. Roshan Khanal" },
  { name: "Er. Amrit Bhandari" },
];

export const seeDistrictToppers: SeeTopper[] = [
  { name: "Saugat Bhusal" },
  { name: "Ujjwal Adhikari" },
  { name: "Smarika Pandey" },
  { name: "Sudha Sharma" },
];

export const seeSubjectToppers: SubjectTopper[] = [
    { subject: 'Physics & Chemistry', names: ['Arbindra Chhetri', 'Amrit Bhandari', 'Anil G.C.'] },
    { subject: 'Mathematics', names: ['Dipesh Bhandari', 'Pratiksha Acharya', 'Sristi Khanal'] },
    { subject: 'Computer Science', names: ['Prabin Chaudhary', 'Alisha Aryal'] },
];

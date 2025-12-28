export interface Program {
  id: string;
  title: string;
  level: 'Plus 2' | 'Bachelor' | 'Master';
  affiliation: 'NEB' | 'PU';
  description: string;
  duration: string;
  image: string;
  overview: string;
  eligibility: string[];
  feeStructure: string;
  syllabus: string[];
  syllabusPdf?: string;
  careerOpportunities: string[];
  faculty: { name: string; role: string; image: string }[];
  admissionRequirements: string[];
  gallery: string[];
  faq?: { question: string; answer: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
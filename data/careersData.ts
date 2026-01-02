export interface JobOpening {
  id: string;
  title: string;
  department: 'Faculty' | 'Administration' | 'IT' | 'Support Staff';
  type: 'Full-time' | 'Part-time';
  location: 'On-site';
  postedDate: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
}

export const jobOpenings: JobOpening[] = [
  {
    id: 'phy-lec-01',
    title: 'Physics Lecturer (+2 Science)',
    department: 'Faculty',
    type: 'Full-time',
    location: 'On-site',
    postedDate: 'August 01, 2024',
    description: 'We are seeking a passionate and experienced Physics Lecturer to join our +2 Science faculty. The ideal candidate will be responsible for delivering high-quality instruction and fostering a love for science among students.',
    responsibilities: [
      'Delivering lectures for Grade 11 and 12 Physics.',
      'Conducting practical lab sessions.',
      'Preparing and grading examinations and assignments.',
      'Mentoring students for entrance examinations.',
    ],
    qualifications: [
      'Master\'s Degree in Physics (M.Sc.).',
      'Minimum 2 years of teaching experience at the +2 level.',
      'Excellent communication and interpersonal skills.',
      'Proficiency in modern teaching methodologies.',
    ],
  },
  {
    id: 'acc-lec-01',
    title: 'Accountancy Lecturer (+2 Management)',
    department: 'Faculty',
    type: 'Full-time',
    location: 'On-site',
    postedDate: 'August 01, 2024',
    description: 'Seeking a dynamic Accountancy Lecturer for our +2 Management program to teach the fundamentals of accounting and finance.',
    responsibilities: [
      'Teaching Accountancy for Grade 11 and 12.',
      'Developing course materials and lesson plans.',
      'Assessing student performance.',
      'Advising students on career paths in finance.',
    ],
    qualifications: [
      'Master\'s Degree in Business Studies (MBS) or equivalent, with a specialization in Accountancy.',
      'At least 2 years of relevant teaching experience.',
      'Strong knowledge of accounting principles and software.',
    ],
  },
  {
    id: 'adm-coun-01',
    title: 'Admissions Counselor',
    department: 'Administration',
    type: 'Full-time',
    location: 'On-site',
    postedDate: 'July 25, 2024',
    description: 'The Admissions Counselor will be the first point of contact for prospective students and parents, guiding them through the admission process.',
    responsibilities: [
      'Counseling students and parents about our programs.',
      'Managing application forms and records.',
      'Coordinating entrance examinations.',
      'Participating in educational fairs.',
    ],
    qualifications: [
      'Bachelor\'s degree in any discipline (BBA preferred).',
      'Excellent communication and counseling skills.',
      'Proficient in MS Office Suite.',
      'Prior experience in a similar role is an advantage.',
    ],
  },
  {
    id: 'it-off-01',
    title: 'IT Officer',
    department: 'IT',
    type: 'Full-time',
    location: 'On-site',
    postedDate: 'July 20, 2024',
    description: 'Responsible for maintaining the college\'s IT infrastructure, including networks, servers, and computer labs.',
    responsibilities: [
      'Managing and troubleshooting network infrastructure.',
      'Providing technical support to staff and students.',
      'Maintaining computer hardware and software.',
      'Ensuring data security and backups.',
    ],
    qualifications: [
      'Bachelor\'s in IT, Computer Science, or a related field (BIT, BCA).',
      'Proven experience as an IT Officer or similar role.',
      'Knowledge of TCP/IP protocols and LAN/WAN configuration.',
      'Experience with network security and management.',
    ],
  },
   {
    id: 'fin-acc-01',
    title: 'Accountant',
    department: 'Administration',
    type: 'Full-time',
    location: 'On-site',
    postedDate: 'July 18, 2024',
    description: 'We are looking for a meticulous Accountant to manage our financial transactions, from fixed payments and variable expenses to bank deposits and budgets.',
    responsibilities: [
      'Manage all accounting transactions.',
      'Handle monthly, quarterly and annual closings.',
      'Reconcile accounts payable and receivable.',
      'Ensure timely bank payments and manage balance sheets.',
    ],
    qualifications: [
      'Bachelor\'s degree in Accounting, Finance, or relevant degree.',
      'Proven experience as an Accountant.',
      'Hands-on experience with accounting software like Tally.',
      'Strong attention to detail and good analytical skills.',
    ],
  },
   {
    id: 'lib-asst-01',
    title: 'Library Assistant',
    department: 'Support Staff',
    type: 'Part-time',
    location: 'On-site',
    postedDate: 'July 15, 2024',
    description: 'Assist the Head Librarian in managing library resources, helping students and faculty, and maintaining a conducive learning environment in the library.',
    responsibilities: [
      'Assisting users in locating books and resources.',
      'Cataloging and shelving new books.',
      'Managing the circulation desk (check-ins/check-outs).',
      'Maintaining library records and managing the digital library system.',
    ],
    qualifications: [
      'Bachelor\'s degree in Library Science or related field preferred.',
      'Strong organizational and customer service skills.',
      'Familiarity with library database systems.',
      'Previous experience in a library setting is a plus.',
    ],
  }
];
import { Program } from '../types';

export const programs: Program[] = [
  {
    id: 'science',
    title: '+2 Science',
    level: 'Plus 2',
    affiliation: 'NEB',
    description: 'A rigorous program designed for aspiring engineers, doctors, and scientists. Features state-of-the-art labs.',
    duration: '2 Years (Class 11 & 12)',
    image: 'https://picsum.photos/800/600?random=10',
    overview: 'The +2 Science program at Tilottama College is a premier course designed to provide a strong foundation in physics, chemistry, biology, and mathematics. We focus on preparing students for competitive entrance examinations like IOE (Engineering) and IOM (Medical). Our approach combines theoretical learning with extensive practical sessions in our well-equipped laboratories.',
    eligibility: [
      'Passed SEE with minimum GPA 3.0',
      'Minimum C+ grade in Science and Mathematics',
      'Minimum D+ grade in English, Nepali, and Social Studies'
    ],
    feeStructure: 'Please contact the administration for detailed fee structure.',
    syllabus: [
      'Physics',
      'Chemistry',
      'Mathematics (Compulsory)',
      'English',
      'Nepali',
      'Optional Group: Biology or Computer Science'
    ],
    syllabusPdf: '#science-syllabus',
    careerOpportunities: [
      'Medical Doctor (MBBS, BDS)',
      'Engineer (Civil, Computer, Electrical)',
      'Biotechnologist',
      'IT Professional',
      'Researcher / Scientist'
    ],
    faculty: [
      { name: "Dr. H.P. Sharma", role: "Physics HOD", image: "https://picsum.photos/200/200?random=60" },
      { name: "Mr. R.K. Yadav", role: "Chemistry Senior Faculty", image: "https://picsum.photos/200/200?random=61" },
      { name: "Mrs. S. Karki", role: "Biology Coordinator", image: "https://picsum.photos/200/200?random=62" }
    ],
    admissionRequirements: [
      'Completed Online Application Form',
      'Copy of SEE Marksheet and Character Certificate',
      '2 Passport Size Photos',
      'Pass Entrance Examination'
    ],
    gallery: [
      'https://picsum.photos/400/300?random=70',
      'https://picsum.photos/400/300?random=71',
      'https://picsum.photos/400/300?random=72',
      'https://picsum.photos/400/300?random=73'
    ],
    faq: [
      {
        question: "Is the bridge course mandatory?",
        answer: "While not explicitly mandatory, we highly recommend taking the bridge course to cover the gap between the SEE curriculum and the +2 Science syllabus."
      },
      {
        question: "Do you offer Medical/Engineering entrance preparation?",
        answer: "Yes, we integrate entrance preparation classes into our regular schedule, taught by experienced instructors."
      },
      {
        question: "Can I choose both Biology and Computer Science?",
        answer: "Students must choose one optional group, either Biology or Computer Science, alongside the compulsory subjects."
      }
    ]
  },
  {
    id: 'management',
    title: '+2 Management',
    level: 'Plus 2',
    affiliation: 'NEB',
    description: 'Comprehensive business education focusing on Accountancy, Economics, and Computer Science.',
    duration: '2 Years (Class 11 & 12)',
    image: 'https://picsum.photos/800/600?random=11',
    overview: 'Our Management stream aims to produce capable mid-level human resources in the field of business and administration. Students learn the principles of accounting, economics, and business studies, along with practical skills in their chosen specialization. We organize regular field visits and industrial tours.',
    eligibility: [
      'Passed SEE with minimum GPA 2.4',
      'Minimum D+ grade in all subjects',
      'Interest in business and commerce'
    ],
    feeStructure: 'Please contact the administration for detailed fee structure.',
    syllabus: [
      'Accountancy',
      'Economics',
      'Business Studies',
      'English & Nepali',
      'Social Studies',
      'Specialization (Choose one): Hotel Management (H.M.), Finance, or Computer Science'
    ],
    syllabusPdf: '#management-syllabus',
    careerOpportunities: [
      'Chartered Accountant (CA)',
      'Banker',
      'Business Entrepreneur',
      'Hotel Manager',
      'Marketing Executive'
    ],
    faculty: [
      { name: "Mr. B.B. Singh", role: "Management Coordinator", image: "https://picsum.photos/200/200?random=63" },
      { name: "Mrs. A. Tuladhar", role: "Accountancy Faculty", image: "https://picsum.photos/200/200?random=64" }
    ],
    admissionRequirements: [
      'Completed Online Application Form',
      'SEE Gradesheet',
      'Entrance Interview'
    ],
    gallery: [
      'https://picsum.photos/400/300?random=74',
      'https://picsum.photos/400/300?random=75',
      'https://picsum.photos/400/300?random=76'
    ],
    faq: [
      {
        question: "Is Hotel Management practical-based?",
        answer: "Yes, we have a dedicated kitchen and restaurant setup for Hotel Management students to practice culinary and service skills."
      },
      {
        question: "Can I study BCA after taking +2 Management?",
        answer: "Yes, if you study Computer Science as your specialization in +2 Management, you are eligible for BCA and other IT degrees."
      },
      {
        question: "Does the college provide internships?",
        answer: "We facilitate internships for Hotel Management students in reputed hotels. For business students, we organize industrial visits."
      }
    ]
  },
  {
    id: 'bba',
    title: 'BBA (Bachelor of Business Administration)',
    level: 'Bachelor',
    affiliation: 'PU',
    description: 'A comprehensive program focusing on business management, leadership, and entrepreneurial skills.',
    duration: '4 Years (8 Semesters)',
    image: 'https://picsum.photos/800/600?random=14',
    overview: 'The Bachelor of Business Administration (BBA) program at Tilottama College, affiliated with Pokhara University, is designed to develop socially responsible, creative, and result-oriented management professionals to fill up the middle-level managerial positions in the rapidly growing business sector in Nepal and abroad. The program provides students with a sound conceptual foundation and practical skills in various areas of business.',
    eligibility: [
      'Passed +2 or equivalent from any stream with a minimum D+ grade in all subjects.',
      'Must pass the CMAT entrance examination conducted by the university.'
    ],
    feeStructure: 'Please contact the administration for detailed fee structure.',
    syllabus: [
      'Principles of Management',
      'Financial Accounting',
      'Business Communication',
      'Organizational Behavior',
      'Human Resource Management',
      'Marketing Management',
      'Financial Management',
      'Business Research Methods'
    ],
    syllabusPdf: '#bba-syllabus',
    careerOpportunities: [
      'Marketing Manager',
      'HR Manager',
      'Financial Analyst',
      'Investment Banker',
      'Business Consultant',
      'Entrepreneur'
    ],
    faculty: [
      { name: "Dr. R. Pandey", role: "Department Head", image: "https://picsum.photos/200/200?random=67" },
      { name: "Mr. S.R. Khanal", role: "Senior Lecturer", image: "https://picsum.photos/200/200?random=92" }
    ],
    admissionRequirements: [
      'Academic Transcripts of +2',
      'CMAT Entrance Score Card',
      'Personal Interview and Group Discussion'
    ],
    gallery: [
      'https://picsum.photos/400/300?random=80',
      'https://picsum.photos/400/300?random=81'
    ],
    faq: [
      {
        question: "Is there a lot of practical work in BBA?",
        answer: "Yes, the BBA program emphasizes practical learning through case studies, presentations, group projects, and mandatory internships."
      },
      {
        question: "What are the specialization areas available?",
        answer: "Students can choose to specialize in areas like Marketing, Finance, or Human Resource Management in their final year."
      }
    ]
  },
  {
    id: 'mba',
    title: 'MBA (Master of Business Administration)',
    level: 'Master',
    affiliation: 'PU',
    description: 'An executive-level program for aspiring business leaders and strategic thinkers.',
    duration: '2 Years (4 Semesters)',
    image: 'https://picsum.photos/800/600?random=16',
    overview: 'The Master of Business Administration (MBA) program at Tilottama College is an internationally recognized degree designed to develop the skills required for careers in business and management. The value of the MBA, however, is not limited strictly to the business world. An MBA can also be useful for those pursuing a managerial career in the public sector, government, private industry, and other areas.',
    eligibility: [
      'Passed Bachelor degree in any discipline with a minimum CGPA of 2.0 or 45% marks.',
      'Must pass the entrance examination conducted by PU.'
    ],
    feeStructure: 'Please contact the administration for detailed fee structure.',
    syllabus: [
      'Managerial Economics',
      'Strategic Management',
      'Corporate Finance',
      'Global Marketing Management',
      'Leadership and Organizational Behavior',
      'Entrepreneurship',
      'Business Analytics',
      'Thesis Writing'
    ],
    syllabusPdf: '#mba-syllabus',
    careerOpportunities: [
      'Chief Executive Officer (CEO)',
      'Management Consultant',
      'Investment Banker',
      'Operations Manager',
      'Marketing Director',
      'Policy Advisor'
    ],
    faculty: [
      { name: "Prof. K. Acharya", role: "Program Director", image: "https://picsum.photos/200/200?random=68" }
    ],
    admissionRequirements: [
      'Bachelor Degree Transcripts',
      'Entrance Score Card (CMAT/Equivalent)',
      'Work Experience Letter (if applicable)',
      'Interview and Group Discussion'
    ],
    gallery: [
      'https://picsum.photos/400/300?random=82',
      'https://picsum.photos/400/300?random=83'
    ],
    faq: [
      {
        question: "Is work experience required for the MBA program?",
        answer: "While not mandatory, prior work experience is highly encouraged and carries weight during the admission process."
      },
      {
        question: "Do you have evening classes for the MBA?",
        answer: "Yes, we have an executive MBA program with evening classes tailored for working professionals."
      }
    ]
  }
];
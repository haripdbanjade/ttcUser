import { Program } from '../types';
import { nebToppers, medicalAlumni, engineeringAlumni } from './achievementsData';

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
    syllabus: {
      gradeXI: [
        'Compulsory English',
        'Compulsory Nepali',
        'Social Studies',
        'Physics I',
        'Chemistry I',
        'Mathematics I',
        'Optional: Biology I or Computer Science I',
      ],
      gradeXII: [
        'Compulsory English',
        'Compulsory Nepali',
        'Physics II',
        'Chemistry II',
        'Mathematics II',
        'Optional: Biology II or Computer Science II',
      ],
    },
    syllabusPdf: '#science-syllabus',
    careerOpportunities: [
      'Medical Doctor (MBBS, BDS)',
      'Engineer (Civil, Computer, Electrical)',
      'Biotechnologist',
      'IT Professional',
      'Researcher / Scientist'
    ],
    facultyIds: [
      'chem-1', 'chem-2', 'chem-3', 'chem-4', 'chem-5', 'chem-6', 'chem-7', 'chem-8', 'chem-9', 'chem-10', 'chem-11', 'chem-12', 'chem-13',
      'phy-1', 'phy-2', 'phy-3', 'phy-4', 'phy-5', 'phy-6', 'phy-7',
      'bio-1', 'bio-2', 'bio-3', 'bio-4', 'bio-5', 'bio-6',
      'math-1', 'math-2', 'math-3', 'math-4', 'math-5', 'math-6', 'math-7', 'math-8',
      'eng-1', 'eng-2', 'eng-3', 'eng-4', 'eng-5', 'eng-6',
      'nep-1', 'nep-2', 'nep-3', 'nep-4', 'nep-5',
      'cs-1', 'cs-2', 'cs-3', 'cs-4', 'cs-5', 'cs-6'
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
    ],
    achievementHighlights: {
      title: 'A Legacy of Success in Science',
      stats: [
        { value: '150+', label: 'MBBS/BDS Placements' },
        { value: '300+', label: 'BE Placements' },
        { value: '50+', label: 'B.Sc. Ag/Vet/Forestry' },
        { value: '70+', label: 'B.Sc. CSIT & Paramedical' },
      ],
      topperList: nebToppers,
      alumniLists: [
        { category: 'Medical Professionals', names: medicalAlumni.map(a => a.name) },
        { category: 'Engineering Professionals', names: engineeringAlumni.map(a => a.name) },
      ],
    }
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
    syllabus: {
      gradeXI: [
        'Compulsory English',
        'Compulsory Nepali',
        'Social Studies',
        'Accountancy I',
        'Economics I',
      ],
      gradeXII: [
        'Compulsory English',
        'Compulsory Nepali',
        'Accountancy II',
        'Economics II',
        'Business Studies',
        'Optional: Computer Science, Finance, Hotel Management, or Business Mathematics',
      ],
    },
    syllabusPdf: '#management-syllabus',
    careerOpportunities: [
      'Chartered Accountant (CA)',
      'Banker',
      'Business Entrepreneur',
      'Hotel Manager',
      'Marketing Executive'
    ],
    facultyIds: [
      'mgmt-1', 'mgmt-2', 'mgmt-3', 'mgmt-4', 'mgmt-5', 'mgmt-6', 'mgmt-7', 'mgmt-8', 'mgmt-9', 'mgmt-10', 'mgmt-11', 'mgmt-12', 'mgmt-13', 'mgmt-14', 'mgmt-15',
      'math-1', 'math-2', 'math-3', 'math-4', 'math-5', 'math-6', 'math-7', 'math-8',
      'eng-1', 'eng-2', 'eng-3', 'eng-4', 'eng-5', 'eng-6',
      'nep-1', 'nep-2', 'nep-3', 'nep-4', 'nep-5',
      'cs-1', 'cs-2', 'cs-3', 'cs-4', 'cs-5', 'cs-6'
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
    ],
    achievementHighlights: {
        title: 'Pathways to Professional Success',
        stats: [
          { value: 'Top Ranks', label: 'in NEB/HSEB Exams' },
          { value: 'Strong Alumni', label: 'in Banking Sector' },
          { value: 'Proven Success', label: 'in Public Service (Lok Sewa)' },
          { value: 'Future Leaders', label: 'in Business & Entrepreneurship' },
        ],
        topperList: nebToppers
    }
  },
  {
    id: 'bba',
    title: 'BBA (Bachelor of Business Administration)',
    level: 'Bachelor',
    affiliation: 'PU',
    description: 'A comprehensive program focusing on business management, leadership, and entrepreneurial skills.',
    duration: '4 Years (8 Semesters)',
    image: 'https://picsum.photos/800/600?random=14',
    overview: "The Bachelor of Business Administration (BBA) program at Tilottama College, affiliated with Pokhara University, is designed to develop socially responsible, creative, and result-oriented management professionals. As the first college to launch a BBA program in the region in 1999, we have a legacy of excellence. Our curriculum emphasizes applied learning through internships, community engagement, and field trips to connect with corporate houses, providing students with a sound conceptual foundation and practical skills.",
    eligibility: [
      'Passed +2 or equivalent from any stream with a minimum D+ grade in all subjects.',
      'Must pass the CMAT entrance examination conducted by the university.'
    ],
    feeStructure: 'Please contact the administration for detailed fee structure.',
    syllabus: [
      'English I', 'Basic Mathematics', 'IT for Business', 'Behavioral Science', 'Principles of Management', 'Data Analysis & Modeling', 'Business and Society', 'Business Research Methods', 'Human Resource Management', 'Financial Management', 'Internship'
    ],
    syllabusPdf: '#bba-syllabus',
    careerOpportunities: [
      'General Manager', 'Project Manager', 'Financial Analyst', 'Investment Banker', 'Chief Marketing Officer', 'Sales Manager', 'Market Research Analyst', 'Management Consultant', 'Corporate Trainer', 'Entrepreneur'
    ],
    facultyIds: [
      'mgmt-new-1', 'mgmt-new-2', 'mgmt-new-3', 'mgmt-new-4', 'mgmt-new-5', 'mgmt-new-6', 'mgmt-new-7', 'mgmt-new-8', 'mgmt-new-9', 'mgmt-new-10', 'mgmt-new-11', 'mgmt-new-12', 'mgmt-new-13', 'mgmt-new-14', 'mgmt-new-15', 'mgmt-new-16', 'mgmt-new-17', 'mgmt-new-18', 'mgmt-new-19', 'mgmt-new-20', 'mgmt-new-21', 'mgmt-new-22', 'mgmt-new-23', 'mgmt-new-24', 'mgmt-new-25', 'mgmt-new-26'
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
    ],
    achievementHighlights: {
      title: 'Alumni in Leadership Roles',
      stats: [
        { value: 'Proven Track Record', label: 'in Corporate Placements' },
        { value: 'Successful Entrepreneurs', label: 'in Various Sectors' },
        { value: 'Leaders in Banking', label: 'and Financial Institutions' },
        { value: 'High Success Rate', label: 'in Public Service Exams' },
      ],
    }
  },
  {
    id: 'mba',
    title: 'MBA (Master of Business Administration)',
    level: 'Master',
    affiliation: 'PU',
    description: 'An executive-level program for aspiring business leaders and strategic thinkers.',
    duration: '2 Years (4 Semesters)',
    image: 'https://picsum.photos/800/600?random=16',
    overview: 'The Master of Business Administration (MBA) program at Tilottama College is an internationally recognized degree designed to deepen advanced business topics and specializations, blending academic theory with practical application through internships and projects. The value of the MBA is not limited strictly to the business world; it is also useful for those pursuing a managerial career in the public sector, government, and private industry.',
    eligibility: [
      '15 years of formal education (12 years schooling + 3-year Bachelor\'s degree).',
      'Minimum CGPA of 2.0 or 45% at the Bachelor\'s level.',
      'Must pass university entrance examination and interview.'
    ],
    feeStructure: 'Please contact the administration for detailed fee structure.',
    syllabus: [
      'Accounting for Managerial Decisions', 'Statistics for Managers', 'Managerial Economics', 'Organizational Behavior', 'Financial Management', 'Quantitative Methods', 'Macroeconomics & Global Economy', 'Operations & Supply Chain', 'Marketing Management', 'Business Environment and Strategy', 'Capstone Project'
    ],
    syllabusPdf: '#mba-syllabus',
    careerOpportunities: [
      'Chief Executive Officer (CEO)', 'General Manager', 'Executive Director', 'Project Manager', 'CFO', 'Financial Analyst', 'Investment Banker', 'Chief Marketing Officer', 'Sales Manager', 'Management Consultant', 'Corporate Trainer', 'Entrepreneur'
    ],
    facultyIds: [
      'mgmt-new-1', 'mgmt-new-2', 'mgmt-new-3', 'mgmt-new-4', 'mgmt-new-5', 'mgmt-new-6', 'mgmt-new-7', 'mgmt-new-8', 'mgmt-new-9', 'mgmt-new-10', 'mgmt-new-11', 'mgmt-new-12', 'mgmt-new-13', 'mgmt-new-14', 'mgmt-new-15', 'mgmt-new-16', 'mgmt-new-17', 'mgmt-new-18', 'mgmt-new-19', 'mgmt-new-20', 'mgmt-new-21', 'mgmt-new-22', 'mgmt-new-23', 'mgmt-new-24', 'mgmt-new-25', 'mgmt-new-26'
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
    ],
    achievementHighlights: {
      title: 'Shaping Executive Leaders',
      stats: [
        { value: 'C-Suite Executives', label: 'in Multinational Companies' },
        { value: 'Strategic Consultants', label: 'in Top Firms' },
        { value: 'Policy Advisors', label: 'in Governmental Organizations' },
        { value: 'Successful Founders', label: 'of Innovative Startups' },
      ],
    }
  }
];
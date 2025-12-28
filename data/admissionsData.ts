import { Program } from '../types';

export interface AdmissionInfo {
  id: 'neb' | 'pu';
  title: string;
  level: string;
  description: string;
  eligibility: {
    program: string;
    criteria: string[];
  }[];
  process: {
    title: string;
    description: string;
  }[];
  keyDates: {
    event: string;
    date: string;
  }[];
  prospectusUrl: string;
  formPrograms: Program['title'][];
}

export const admissionsData: AdmissionInfo[] = [
  {
    id: 'neb',
    title: 'NEB (+2) Admission',
    level: '+2 / Higher Secondary',
    description: 'The admission process for our +2 programs in Science and Management, affiliated with the National Examination Board (NEB), is designed to select motivated and capable students right after their SEE.',
    eligibility: [
      { 
        program: '+2 Science', 
        criteria: [
          'Passed SEE with minimum GPA 3.0',
          'Minimum C+ grade in Science and Mathematics',
          'Minimum D+ grade in English, Nepali, and Social Studies'
        ] 
      },
      { 
        program: '+2 Management', 
        criteria: [
          'Passed SEE with minimum GPA 2.4',
          'Minimum D+ grade in all subjects',
          'Interest in business and commerce'
        ]
      }
    ],
    process: [
      { title: 'Online Application', description: 'Fill out the application form available on our website or visit the college administration.' },
      { title: 'Entrance Examination', description: 'Appear for a written test covering compulsory subjects like English, Math, and Science.' },
      { title: 'Interview & Enrollment', description: 'Shortlisted candidates will be called for a personal interview with the admissions committee.' }
    ],
    keyDates: [
      { event: 'Form Distribution Starts', date: 'June 15, 2024' },
      { event: 'Submission Deadline', date: 'July 10, 2024' },
      { event: 'Entrance Exam', date: 'July 15, 2024' },
      { event: 'Classes Start', date: 'August 01, 2024' }
    ],
    prospectusUrl: '#',
    formPrograms: ['+2 Science', '+2 Management']
  },
  {
    id: 'pu',
    title: 'PU (Bachelor & Master) Admission',
    level: 'Undergraduate & Graduate',
    description: 'Our Bachelor of Business Administration (BBA) and Master of Business Administration (MBA) programs, affiliated with Pokhara University (PU), follow a comprehensive admission process.',
    eligibility: [
      {
        program: 'BBA (Bachelor of Business Administration)',
        criteria: [
          'Passed +2 or equivalent from any stream.',
          'Minimum D+ grade in all subjects.',
          'Must pass CMAT entrance examination.'
        ]
      },
      {
        program: 'MBA (Master of Business Administration)',
        criteria: [
          'Passed Bachelor degree in any discipline.',
          'Minimum CGPA of 2.0 or 45% marks.',
          'Must pass university entrance examination.'
        ]
      }
    ],
    process: [
      { title: 'University Entrance (CMAT)', description: 'Candidates must appear for and pass the entrance examinations conducted by Pokhara University.' },
      { title: 'College Application', description: 'Submit the college application form along with the university entrance score card and academic transcripts.' },
      { title: 'Interview & Admission', description: 'Successful candidates will be called for an interview and final admission confirmation.' }
    ],
    keyDates: [
      { event: 'University Entrance Form', date: 'August 2024' },
      { event: 'Entrance Exam', date: 'September 2024' },
      { event: 'College Admission Starts', date: 'October 2024' },
      { event: 'Classes Start', date: 'November 2024' }
    ],
    prospectusUrl: '#',
    formPrograms: ['BBA (Bachelor of Business Administration)', 'MBA (Master of Business Administration)']
  }
];
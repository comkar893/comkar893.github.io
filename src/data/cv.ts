
import type { ElementType } from 'react';
import {
  Code2, // Generic for languages
  Database, // Generic for DBs
  Cloud, // AWS
  GitFork, // Git, GitLab
  Container, // Kubernetes
  Package, // Docker
  Network, // Kafka
  Layers, // Terraform
  LineChart, // Datadog
  ListChecks, // Jira
  TerminalSquare, // IDEs
  AppWindow, // Generic for frameworks (can be an alternative)
  Cpu, // For Spring Boot (more techy than Leaf)
  Atom, // For React
  LayoutGrid, // For Angular (alternative to Shield)
  Cable, // For Next.js (representing connections/routing)
  Workflow, // For Agile
} from 'lucide-react';

export interface CourseDetail {
  name: string;
  description?: string;
}

export interface CvEntry {
  id: string;
  title: string;
  subtitle?: string; // e.g., Degree for education, Company for experience
  period: string;
  description: string | string[];
  location?: string;
  url?: string;
  tags?: string[];
  logoUrl?: string; // Optional: for company/university logo
  logoAiHint?: string; // Optional: hint for AI image generation if logoUrl is a placeholder
  courses?: CourseDetail[]; // Optional: for education entries
}

export interface Skill {
  id: string;
  name: string;
  category: string; 
  icon?: ElementType; 
}

export const educationData: CvEntry[] = [
  {
    id: 'edu1',
    title: 'Master of Science in Data Science',
    subtitle: 'Rochester Institute of Technology',
    period: 'Graduated May 2024',
    description: 'GPA: 4.0/4.0',
    location: 'Rochester, NY',
    logoUrl: 'https://placehold.co/40x40.png',
    logoAiHint: 'university building',
    courses: [
      { name: 'SWEN601 - Software Construction' },
      { name: 'DSCI633 - Foundations of Data Science & Analytics' },
      { name: 'STAT614 - Applied Statistics' },
      { name: 'DSCI644 - Software Engineering for Data Science' },
      { name: 'ISTE608 - Database Design Implementation' },
      { name: 'MGIS650 - Introduction to Data Analytics and Business Intelligence' },
      { name: 'DSCI601 - Applied Data Science I' },
      { name: 'DSCI602 - Applied Data Science II' },
      { name: 'ISTE610 - Non Relational Data Management' },
      { name: 'SWEN614 - Engineering Cloud Software Systems' },
    ],
  },
];

export const experienceData: CvEntry[] = [
  {
    id: 'exp1',
    title: 'Software Engineer II',
    subtitle: 'Foundry Digital LLC',
    period: 'May 2024 - Present',
    description: [
      'I work with a team to manage daily global payouts for a Bitcoin mining pool, ensuring accurate calculations and timely disbursements at scale. I design, maintain, and optimize payment-related microservices, administer databases with controlled access, and ensure the reliability of payment infrastructure. I maintain clear process documentation, manage test and staging environments for safe production releases, handle incident investigation and resolution, provide on-call operational support, and collaborate with stakeholders to resolve critical system and client issues.'
    ],
    location: 'USA',
    tags: ['Kotlin', 'Spring Boot', 'MySQL', 'AWS', 'Kubernetes', 'Kafka', 'Datadog'],
    logoUrl: 'https://placehold.co/40x40.png',
    logoAiHint: 'company office',
  },
  {
    id: 'exp2',
    title: 'Data Analyst Intern',
    subtitle: 'Foundry Digital LLC',
    period: 'Jan 2024 - May 2024 & May 2023 - Dec 2023',
    description: [
      'I collaborated with cross-functional teams to support system testing, monitoring, and operational improvements, assisting in issue resolution, streamlining workflows, and providing hands-on support to help teams meet goals while improving overall system reliability and efficiency.'
    ],
    location: 'USA',
    tags: ['Kotlin', 'Python', 'Spring Boot', 'MySQL', 'Docker', 'Kafka', 'Datadog', 'Tableau'],
    logoUrl: 'https://placehold.co/40x40.png',
    logoAiHint: 'company office',
  },
  {
    id: 'exp3',
    title: 'Systems Engineer',
    subtitle: 'Tata Consultancy Services',
    period: 'Nov 2020 - July 2022',
    description: [
      'I worked with the IPRMS Patent team to modernize the patent filing system by migrating legacy software to a new platform built with modern technologies. I contributed to end-to-end development across frontend and backend, handled data migration to new database structures, ensured required testing coverage, and supported smooth releases through SIT and UAT pipelines to production. I also mentored new team members by guiding them through the codebase and development setup.'
    ],
    location: 'India',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Angular', 'Kafka', 'System Design'],
    logoUrl: 'https://placehold.co/40x40.png',
    logoAiHint: 'tech company',
  },
];

export const projectData: CvEntry[] = [
  {
    id: 'proj1',
    title: 'Sentiment Analysis Application',
    subtitle: 'React, Python, AWS, Terraform',
    period: '2024',
    description: 'Add Description',
    url: 'https://github.com/comkar893/product-sentiment-analysis',
    tags: ['React, Python, AWS, Terraform'],
    logoUrl: 'https://placehold.co/400x250.png',
    logoAiHint: 'Sentiment Analysis',
  },
  {
    id: 'proj2',
    title: 'Bird Sightings Application',
    subtitle: 'Next.js, Express, MongoDB, Node JS',
    period: '2024',
    description: 'Add Description',
    url: 'https://github.com/RIT-iSchool/mongo-project-flocknroll',
    tags: ['Next.js, Express, MongoDB, Node JS'],
    logoUrl: 'https://placehold.co/400x250.png',
    logoAiHint: 'Bird Sightings',
  },
];

export const publicationData: CvEntry[] = [
  {
    id: 'pub1',
    title: 'Analyzing Developer-ChatGPT Conversations for Software Refactoring: An Exploratory Study',
    subtitle: 'MSR 2024: Proceedings of the 21st International Conference on Mining Software Repositories Challenge Track',
    period: 'April 2024',
    description: 'A research paper accepted and presented at the MSR 2024 Mining Challenge, part of the ICSE Conference. It detailed the analysis of conversations between developers and ChatGPT for software refactoring, provided insights into AI-assisted development and was showcased at the conference.',
    url: 'https://dl.acm.org/doi/abs/10.1145/3643991.3644874',
    tags: ['Software Engineering', 'AI', 'ChatGPT', 'Refactoring', 'Empirical Study', 'MSR', 'ICSE'],
  },
];

export const skillsData: Skill[] = [
  // Languages
  { id: 'sk1', name: 'Java', category: 'Programming Languages', icon: Code2 },
  { id: 'sk2', name: 'Kotlin', category: 'Programming Languages', icon: Code2 },
  { id: 'sk3', name: 'Python', category: 'Programming Languages', icon: Code2 },
  { id: 'sk4', name: 'SQL', category: 'Programming Languages', icon: Database },
  // Databases
  { id: 'sk5', name: 'MySQL', category: 'Databases', icon: Database },
  { id: 'sk6', name: 'PostgreSQL', category: 'Databases', icon: Database },
  // Frameworks/Libraries
  { id: 'sk7', name: 'Spring Boot', category: 'Frameworks & Libraries', icon: Cpu },
  { id: 'sk8', name: 'Angular', category: 'Frameworks & Libraries', icon: LayoutGrid },
  { id: 'sk20', name: 'Next.js', category: 'Frameworks & Libraries', icon: Cable },
  { id: 'sk21', name: 'React', category: 'Frameworks & Libraries', icon: Atom },
  // Cloud & DevOps
  { id: 'sk9', name: 'Amazon Web Services (AWS)', category: 'Cloud & DevOps', icon: Cloud },
  { id: 'sk10', name: 'Terraform', category: 'Cloud & DevOps', icon: Layers },
  { id: 'sk11', name: 'Kubernetes', category: 'Cloud & DevOps', icon: Container },
  { id: 'sk12', name: 'Docker', category: 'Cloud & DevOps', icon: Package },
  // Development & Version Control
  { id: 'sk14', name: 'Git', category: 'Development & Version Control', icon: GitFork },
  { id: 'sk15', name: 'GitLab', category: 'Development & Version Control', icon: GitFork },
  { id: 'sk17', name: 'Jira', category: 'Development & Version Control', icon: ListChecks },
  { id: 'sk18', name: 'IntelliJ IDEA', category: 'Development & Version Control', icon: TerminalSquare },
  { id: 'sk19', name: 'VS Code', category: 'Development & Version Control', icon: TerminalSquare },
  // Data & Monitoring
  { id: 'sk13', name: 'Kafka', category: 'Data & Monitoring', icon: Network },
  { id: 'sk16', name: 'Datadog', category: 'Data & Monitoring', icon: LineChart },
  // Methodologies
  { id: 'sk22', name: 'Agile Methodology', category: 'Methodologies', icon: Workflow },
];

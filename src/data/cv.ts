
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
  responsibilities?: string; // Optional: ongoing ownership, shown as one paragraph separate from achievements
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
    description: 'GPA: 4.0/4.0. Focused on advanced data analysis, machine learning, and statistical modeling.',
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
    title: 'Software Engineer III',
    subtitle: 'Foundry Digital LLC',
    period: 'May 2024 - Present',
    description: [
      'Contributed to the launch of the ZEC Mining Pool, focusing on payment workflows and supporting infrastructure to ensure reliable and stable payout operations.',
      'Designed and developed a configuration-driven blockchain explorer integration, decoupling explorer dependencies to reduce incidents caused by third-party explorer issues; actively contributed to security improvements across the platform.',
      'Successfully deployed micro-services and their dependencies on Amazon EKS to leverage scalability, assigned TLS certificates with Cert-Manager for enhanced security and restricted intra-pod communication using Network Policies, reducing manual intervention and ensuring a more efficient and automated environment.',
      'Streamlined cryptocurrency payment workflows by optimizing system design and transaction processes, ensuring secure and error-free handling which improved operational efficiency, achieving 100% on-time payments.',
      'Improved the performance of stored procedures executed periodically by the Spring Boot application after identifying bottlenecks, reducing flush times by 50% and enhancing overall system efficiency.',
      'Conducted an analysis of AWS resource usage, identifying redundant resources and implementing cost savings optimizations which reduced monthly cloud expenses by $20,000 while maintaining performance.',
      'Designed and implemented back-end solutions for a Spring Boot application, including migrating API endpoints, developing cross-application designs, testing cryptocurrency payments and adding failover mechanisms, ensuring seamless integration and smooth feature releases.',
    ],
    responsibilities:
      'I ensure 100% on-time payments to clients and maintain the payout workflow, making it robust and failure-proof. I develop and maintain infrastructure and dependencies, design new features along that path, identify potential issues early and fix them before they affect payouts, and build and maintain test environments so the team can move quickly with confidence.',
    location: 'USA',
    tags: ['Java', 'Spring Boot', 'AWS', 'EKS', 'Kubernetes', 'Microservices', 'SQL'],
    logoUrl: 'https://placehold.co/40x40.png',
    logoAiHint: 'company office',
  },
  {
    id: 'exp2',
    title: 'Data Analyst Intern',
    subtitle: 'Foundry Digital LLC',
    period: 'Jan 2024 - May 2024 & May 2023 - Dec 2023',
    description: [
      'Built Python scripts for data comparison between database instances which helped to validate data processed by newly developed services in just 20 minutes, eliminating the need for manual comparison. Containerized with Docker to automate dependency installation and environment setup.',
      'Configured automated alert triggers in Datadog for newly integrated API endpoints in scheduled jobs, enabling timely alerts to identify and debug issues with third-party APIs, facilitating swift troubleshooting actions on critical connection errors and ensuring quicker resolution.',
      'Enhanced data ingestion efficiency in the MySQL database by optimizing continuous data consumption from Kafka, reducing processing time from 25-30 minutes to just 2-3 minutes.',
      'Optimized Spring Boot API endpoints and scheduled jobs by addressing bugs, improving data processing speed and system performance, resulting in faster response times and better data accessibility.',
      'Established a baseline for integration tests across multiple micro-services, standardizing and enabling efficient local testing for early issue detection and instilling team confidence for seamless, reliable production deployments.',
    ],
    location: 'USA',
    tags: ['Python', 'Docker', 'Datadog', 'MySQL', 'Kafka', 'Spring Boot', 'Data Analysis'],
    logoUrl: 'https://placehold.co/40x40.png',
    logoAiHint: 'company office',
  },
  {
    id: 'exp3',
    title: 'Systems Engineer',
    subtitle: 'Tata Consultancy Services',
    period: 'Nov 2020 - July 2022',
    description: [
      'Engineered the end-to-end cloning flow for Invention Declaration Forms using Spring Boot, Java, PostgreSQL and Angular, significantly improving workflow efficiency and addressing prior system limitations, resulting in enhanced usability and cross-jurisdiction compatibility.',
      'Designed and implemented a comprehensive database schema, optimizing data retrieval through advanced SQL joins across multiple tables and successfully integrated APIs with the user interface, ensuring seamless data flow and performance.',
      'Leveraged Kafka to synchronize data in real-time between IPRMS and TIPAR modules, eliminating latency issues in the legacy system and ensuring timely and accurate data synchronization.',
      'Developed a user-friendly interface with Angular for viewing Invention Declaration Form details, streamlining role based access for both inventors and authorities, enhancing user experience and accessibility by enabling a more intuitive and responsive interface.',
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
    title: 'Personal Portfolio Website (Omkar\'s Odyssey)',
    subtitle: 'Next.js, React, Tailwind CSS, TypeScript',
    period: '2024',
    description: 'The very website you are browsing! An interactive portfolio built with modern web technologies to showcase my skills, projects, and professional journey.',
    url: '#', // Links to the current site
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Responsive Design', 'Vercel'],
    logoUrl: 'https://placehold.co/400x250.png',
    logoAiHint: 'website portfolio',
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

export interface ImpactHighlight {
  value: string; // The measurable result, as stated in the experience entry
  label: string; // What it measures
  source: string; // Where it happened
}

// Each figure is copied from an existing experience bullet. Do not add figures that aren't in experienceData.
export const impactHighlights: ImpactHighlight[] = [
  { value: '$20,000', label: 'Monthly cloud cost reduced while keeping performance', source: 'Software Engineer II, Foundry Digital' },
  { value: '50%', label: 'Reduction in stored procedure flush times', source: 'Software Engineer II, Foundry Digital' },
  { value: '100%', label: 'On-time cryptocurrency payments', source: 'Software Engineer II, Foundry Digital' },
  { value: '25–30 min → 2–3 min', label: 'Kafka data ingestion processing time', source: 'Data Analyst Intern, Foundry Digital' },
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
  { id: 'sk23', name: 'dbt', category: 'Data & Monitoring', icon: Database },
  // Methodologies
  { id: 'sk22', name: 'Agile Methodology', category: 'Methodologies', icon: Workflow },
];

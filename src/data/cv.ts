
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
import { siBitcoin, siZcash, type SimpleIcon } from 'simple-icons';

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
  domains?: { name: string; detail: string; icons?: SimpleIcon[] }[]; // Optional: areas of work shown as tiles on the left
  highlight?: string; // Optional: a key fact (such as GPA) shown as a tag under the title
  typedTitle?: boolean; // Optional: type the title out on scroll, as a feature for the current role
  practices?: string[]; // Optional: methods and concepts, shown separately from tools
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
    highlight: 'GPA 4.0 / 4.0',
    description: 'Coursework in data science, software engineering, and cloud systems.',
    location: 'Rochester, NY',
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
    logoUrl: 'https://placehold.co/40x40.png',
    logoAiHint: 'university building',
  },
];

export const experienceData: CvEntry[] = [
  {
    id: 'exp1',
    title: 'Software Engineer III',
    typedTitle: true,
    subtitle: 'Foundry Digital LLC',
    period: 'May 2024 - Present',
    description:
      'I contributed to the launch of the ZEC Mining Pool, focusing on payment workflows and supporting infrastructure, and built a configuration-driven blockchain explorer integration that reduced incidents caused by third-party explorer issues. I streamlined cryptocurrency payment workflows to achieve 100% on-time payments, cut stored procedure flush times by 50%, and reduced monthly cloud expenses by $20,000 through AWS resource optimization. I also automated provisioning and deployments for the Bitcoin Mining Pool, and deployed microservices on EKS to handle spikes in processing demand.',
    responsibilities:
      'I ensure 100% on-time payments to clients and maintain the payout workflow, making it robust and failure-proof. I develop and maintain infrastructure and dependencies, design new features along that path, identify potential issues early and fix them before they affect payouts, and build and maintain test environments so the team can move quickly with confidence.',
    location: 'USA',
    domains: [
      { name: 'Crypto Payments', detail: 'Bitcoin and ZEC payment workflows', icons: [siBitcoin, siZcash] },
    ],
    tags: ['Kotlin', 'Spring Boot', 'MySQL', 'AWS', 'Terraform', 'EKS', 'Kubernetes', 'Datadog'],
    practices: ['System Design', 'Microservices', 'Observability', 'Agile', 'End-to-End Tests'],
    logoUrl: 'https://placehold.co/40x40.png',
    logoAiHint: 'company office',
  },
  {
    id: 'exp2',
    title: 'Data Analyst Intern',
    typedTitle: true,
    subtitle: 'Foundry Digital LLC',
    period: 'Jan 2024 - May 2024 & May 2023 - Dec 2023',
    description:
      'I built Python scripts that validate data between database instances in about 20 minutes, replacing manual comparison, and containerized them with Docker to automate dependency installation and environment setup. I optimized continuous Kafka ingestion into MySQL, reducing processing time from 25–30 minutes to 2–3 minutes, and tuned Spring Boot API endpoints and scheduled jobs to improve processing speed and response times. I configured Datadog alerts for newly integrated API endpoints so third-party connection errors could be caught and resolved quickly, and set up a baseline for integration tests across micro-services, enabling early issue detection and more reliable production deployments.',
    location: 'USA',
    domains: [{ name: 'Bitcoin Pool', detail: 'Kafka pipelines, data validation, and API monitoring' }],
    tags: ['Python', 'Docker', 'Datadog', 'MySQL', 'Kafka', 'Spring Boot'],
    practices: ['Data Analysis', 'Integration Testing', 'Monitoring'],
    logoUrl: 'https://placehold.co/40x40.png',
    logoAiHint: 'company office',
  },
  {
    id: 'exp3',
    title: 'Systems Engineer',
    typedTitle: true,
    subtitle: 'Tata Consultancy Services',
    period: 'Nov 2020 - July 2022',
    description:
      'I engineered the end-to-end cloning flow for Invention Declaration Forms using Spring Boot, Java, PostgreSQL and Angular, improving workflow efficiency and cross-jurisdiction compatibility. I designed and implemented a database schema optimized for retrieval through advanced SQL joins across multiple tables, and integrated APIs with the user interface for seamless data flow. I built an Angular interface for viewing form details, with role-based access for inventors and authorities. I also used Kafka to synchronize data in real time between IPRMS and TIPAR modules, eliminating latency issues in the legacy system.',
    location: 'India',
    domains: [{ name: 'Intellectual Property', detail: 'Invention declaration forms and patent workflows' }],
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Angular', 'Kafka'],
    practices: ['System Design', 'Microservices'],
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

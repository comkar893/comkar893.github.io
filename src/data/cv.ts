
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
  responsibilitiesLabel?: string; // Optional: heading for the paragraph above. Defaults to "Current Responsibilities".
  domains?: { name: string; detail: string; icons?: SimpleIcon[] }[]; // Optional: areas of work shown as tiles on the left
  highlight?: string; // Optional: a key fact (such as GPA) shown as a tag under the title
  details?: string | string[]; // Optional: "More Details" dropdown content. A string is paragraphs separated by a blank line; an array is a bullet list.
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
      'Contributed to the launch of the Zcash Mining Pool, focusing on cryptocurrency payment workflows and supporting infrastructure to ensure reliable payout operations. Improved payment reliability to 100% on-time payments while reducing monthly AWS expenses by $20,000 through resource optimization.',
    responsibilities:
      'Own and maintain critical cryptocurrency payout workflows across both Bitcoin and Zcash Mining Pools, ensuring reliable and timely client payments. Develop and improve supporting infrastructure, build new payment capabilities, proactively identify and resolve potential production issues, and maintain test environments to enable confident and efficient feature delivery.',
    details: [
      'Designed and developed a configuration-driven blockchain explorer integration, decoupling third-party dependencies and reducing incidents caused by external explorer issues.',
      'Tested and documented the Business Continuity Plan (BCP) for the Bitcoin Mining Pool, automating infrastructure provisioning with Terraform and application deployments through CI/CD pipelines, reducing execution time by 20% compared to the previous year.',
      'Deployed microservices and supporting dependencies on AWS EKS to handle spikes in processing demand.',
      'Identified and optimized database bottlenecks, reducing stored procedure flush execution times by 50%.',
      'Analyzed AWS resource utilization and eliminated redundant resources, reducing monthly cloud expenses by $20,000 while maintaining performance.',
      'Designed production-like test environments for cryptocurrency payment workflows and developed backend solutions in Spring Boot, including API migrations, cross-application integrations, and failover mechanisms.',
      'Contributed to platform security improvements and infrastructure reliability.',
    ],
    location: 'USA',
    domains: [
      { name: 'Crypto Payments', detail: 'Bitcoin and Zcash payment workflows', icons: [siBitcoin, siZcash] },
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
    period: 'May 2023 - Dec 2023 & Jan 2024 - May 2024',
    description:
      'Developed Python-based data validation tools and optimized Kafka-to-MySQL data ingestion, reducing processing time from 25–30 minutes to 2–3 minutes while eliminating manual database comparisons. Improved monitoring and backend performance to enable faster issue detection and more reliable data processing.',
    responsibilitiesLabel: 'Key Contributions',
    responsibilities:
      'Developed automation tools to streamline database validation, improve data ingestion efficiency, and strengthen service monitoring. Optimized backend APIs and scheduled jobs, introduced integration testing practices across microservices, and improved development workflows through containerization.',
    details: [
      'Built Python scripts to validate data across database instances, reducing comparison time to approximately 20 minutes and eliminating manual validation. Containerized the scripts with Docker to automate dependency installation and environment setup.',
      'Optimized continuous Kafka-to-MySQL data ingestion, reducing processing time from 25–30 minutes to 2–3 minutes.',
      'Configured automated Datadog alerts for newly integrated API endpoints in scheduled jobs, enabling faster detection and resolution of third-party API connectivity issues.',
      'Optimized Spring Boot API endpoints and scheduled jobs by identifying and resolving bugs, improving processing speed and response times.',
      'Established a baseline for integration testing across multiple microservices, enabling consistent local testing, early issue detection, and more reliable production deployments.',
    ],
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
    period: 'Nov 2020 - Jul 2022',
    description:
      'Engineered an end-to-end Invention Declaration Form cloning workflow using Java, Spring Boot, PostgreSQL, and Angular, improving workflow efficiency and cross-jurisdiction compatibility. Implemented real-time data synchronization between IPRMS and TIPAR modules using Apache Kafka, eliminating latency issues in the legacy system.',
    responsibilitiesLabel: 'Key Contributions',
    responsibilities:
      'Designed and developed full-stack solutions spanning backend services, database architecture, API integrations, and user interfaces. Improved data accessibility and synchronization while streamlining workflows for inventors and authorities.',
    details: [
      'Designed and implemented an end-to-end cloning workflow for Invention Declaration Forms, addressing existing system limitations and improving cross-jurisdiction compatibility.',
      'Developed backend services using Java and Spring Boot, integrating APIs with Angular interfaces to enable seamless data flow.',
      'Designed and implemented a PostgreSQL database schema, optimizing data retrieval through advanced SQL joins across multiple tables.',
      'Implemented real-time data synchronization using Apache Kafka between IPRMS and TIPAR modules, eliminating latency issues in the legacy system.',
      'Developed an Angular interface for viewing Invention Declaration Form details, implementing role-based access for inventors and authorities to improve usability and accessibility.',
    ],
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
  },
];

export interface ImpactHighlight {
  value: string; // The measurable result, as stated in the experience entry
  label: string; // What it measures
  source: string; // Where it happened
}

// Each figure is copied from an existing experience bullet. Do not add figures that aren't in experienceData.
export const impactHighlights: ImpactHighlight[] = [
  { value: '100%', label: 'On-time and accurate payments', source: 'Foundry Digital' },
  { value: '$20,000', label: 'Monthly cloud cost reduced', source: 'Foundry Digital' },
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
  { id: 'sk9', name: 'AWS', category: 'Cloud & DevOps', icon: Cloud },
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
];

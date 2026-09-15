import React, { useState } from 'react';
import { Calendar, Briefcase, GraduationCap, Award, Code, Database, Server, TestTube, Zap, Eye, ExternalLink, ChevronLeft, ChevronRight, X, CheckCircle, Terminal, Layers, GitBranch, HardDrive, Monitor, Cpu, Network, Activity } from 'lucide-react';

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  organization: string;
  description: string;
  icon: React.ReactNode;
  category: 'work' | 'education' | 'achievement';
  isClickable?: boolean;
  detailContent?: React.ReactNode;
}

const frinksDetailContent = (
  <div className="space-y-8">
    {/* Header */}
    <div className="flex items-start gap-4 pb-6 border-b border-gray-200 dark:border-gray-700">
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Software Development Engineer 1 — Frinks.ai</h3>
        <p className="text-indigo-600 dark:text-indigo-400 font-medium mt-1">Mar 2025 – Present • Bangalore, India (Hybrid)</p>
        <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
          First 6 months: Full-stack product engineering across frontend, backend APIs, testing, deployment, release engineering, system monitoring, and industrial AI/vision systems.
        </p>
      </div>
    </div>

    {/* Sections */}
    <DetailSection
      title="Product & Frontend Development"
      icon={Layers}
      iconColor="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
      items={[
        {
          title: "Responsive Landing Page",
          desc: "Built a responsive landing page with media queries for different screen sizes, ensuring consistent UX across desktop, tablet, and mobile viewports.",
          tags: ["React", "CSS", "Media Queries", "Responsive Design"]
        },
        {
          title: "Edit Module Configuration Refactor",
          desc: "Refactored the Edit Module Configuration system from ~4,000 lines of complex code to ~600 lines (85% reduction), separating module-specific configuration handling into maintainable, type-safe components with schema-driven validation.",
          tags: ["TypeScript", "Refactoring", "Architecture", "Schema Validation", "85% LOC Reduction"]
        },
        {
          title: "Analyzed Image Configuration",
          desc: "Implemented post-deployment visual configuration of inferred images, enabling operators to adjust detection parameters on analyzed frames without code changes or redeployment.",
          tags: ["React", "Computer Vision", "Configuration", "Real-time Updates"]
        },
        {
          title: "Module Configuration (Thresholds & GT Values)",
          desc: "Built configuration management for thresholds and ground-truth values across different variants and instances, supporting variant-specific parameterization for industrial vision modules.",
          tags: ["Configuration", "Variants", "Instances", "Thresholds", "Ground Truth"]
        },
        {
          title: "End-to-End API Development",
          desc: "Built and integrated 1–2 APIs end-to-end from frontend interactions through the Node.js backend to MariaDB persistence, including request validation, error handling, pagination, and OpenAPI documentation.",
          tags: ["React", "Node.js", "MariaDB", "OpenAPI", "Validation"]
        }
      ]}
    />

    <DetailSection
      title="Release, Deployment & Cross-Platform Engineering"
      icon={Server}
      iconColor="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
      items={[
        {
          title: "Linux-to-Windows Migration via WSL2",
          desc: "Led migration of the Linux-based product installation system to Windows using WSL2, evaluating Docker Desktop vs. WSL2 approach; resolved filesystem performance bottlenecks, path resolution issues, and container networking differences to achieve parity across dev/test/prod environments.",
          tags: ["WSL2", "Docker", "Linux", "Windows", "DevOps", "Migration"]
        },
        {
          title: "Version Validation & Deployment Variants",
          desc: "Implemented semantic version validation, variant-aware artifact generation, Node/Python runtime image management, and deployment scripts for consistent, reproducible releases across environments.",
          tags: ["Versioning", "Variants", "Docker", "Runtime Images", "Scripts"]
        },
        {
          title: "Release Distribution Flow (S3 + Release Manager)",
          desc: "Designed the release distribution pipeline: packaging releases as ZIP artifacts, storing in S3 with checksum verification, and surfacing them through the Release Manager/installer page for controlled rollouts.",
          tags: ["S3", "Release Engineering", "Checksums", "Installer", "Distribution"]
        },
        {
          title: "Cross-Environment Debugging",
          desc: "Debugged deployed plants remotely across Linux and Windows/WSL2 environments using AnyDesk, Docker, and PM2 to diagnose service issues, inspect logs, and validate fixes in production.",
          tags: ["AnyDesk", "Docker", "PM2", "Remote Debugging", "Production"]
        }
      ]}
    />

    <DetailSection
      title="Release Management"
      icon={GitBranch}
      iconColor="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
      items={[
        {
          title: "Feature Branch Drift Detection",
          desc: "Built automated drift detection comparing feature branches against mainline, surfacing configuration and code divergences early in CI/CD to prevent integration surprises.",
          tags: ["Git", "CI/CD", "Automation", "Branch Protection"]
        },
        {
          title: "Release Drift Detection",
          desc: "Implemented release artifact drift detection comparing deployed releases against source, providing visibility into the current state of production code and catching unauthorized or accidental changes.",
          tags: ["Release Engineering", "Audit", "Compliance", "Production Monitoring"]
        }
      ]}
    />

    <DetailSection
      title="Testing & TDD"
      icon={TestTube}
      iconColor="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
      items={[
        {
          title: "Behavior-First TDD Across Repositories",
          desc: "Established behavior-first TDD practices across ~2 primary repositories (with broader testing work spanning the product's repositories), identifying frontend-called endpoints and defining expected behavior before inspecting implementation.",
          tags: ["TDD", "Jest", "Vitest", "Behavior-Driven", "Test Strategy"]
        },
        {
          title: "Implementation-Bias Reduction",
          desc: "Designed test cases independently of implementation logic to reduce implementation-biased testing; used existing behavior only for clarification, then added missing edge cases and failure scenarios.",
          tags: ["Test Design", "Edge Cases", "Failure Scenarios", "Bias Reduction"]
        },
        {
          title: "Test Suite Organization",
          desc: "Implemented and organized resulting test suites within respective repositories with clear structure, naming conventions, and >90% coverage on critical paths, enabling confident refactoring.",
          tags: ["Test Organization", "Coverage", "Refactoring Safety", "Maintainability"]
        }
      ]}
    />

    <DetailSection
      title="Health Monitoring & Industrial Systems"
      icon={Activity}
      iconColor="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
      items={[
        {
          title: "Unified Health Monitor",
          desc: "Built comprehensive health monitoring covering containers, Python components, shell scripts, PLCs, MariaDB, RabbitMQ, and other system dependencies with circuit-breaker patterns and automated alerting for 99.9% uptime SLA.",
          tags: ["Monitoring", "Docker", "Python", "PLC", "MariaDB", "RabbitMQ", "Circuit Breaker"]
        },
        {
          title: "PLC Read & Trigger Log Visibility",
          desc: "Developed frontend visibility for PLC read operations and trigger logs, including dummy data generation for testing and validation of industrial communication pathways.",
          tags: ["PLC", "Industrial IoT", "Frontend", "Logging", "Testing"]
        },
        {
          title: "Remote Plant Debugging",
          desc: "Debugged deployed plants remotely using AnyDesk, investigating services and running Docker/PM2 commands to diagnose issues, restart services, and validate fixes in production environments.",
          tags: ["AnyDesk", "Docker", "PM2", "Production Debugging", "Incident Response"]
        }
      ]}
    />

    <DetailSection
      title="Industrial AI / Computer Vision"
      icon={Eye}
      iconColor="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
      items={[
        {
          title: "Module Ecosystem Mastery",
          desc: "Developed working knowledge of the company's industrial AI/vision modules: Inferencing, IC (Image Classification), ODC (Object Detection), OCR, Search Area, Color Detection, Dimensioning, Segmentation, and Bead Inspection.",
          tags: ["Computer Vision", "Inferencing", "Classification", "Detection", "OCR", "Segmentation"]
        },
        {
          title: "Configuration & Model Interaction",
          desc: "Gained deep understanding of how module configurations, trained models, variants, instances, and inference results interact within the overall product architecture for configurable vision pipelines.",
          tags: ["Architecture", "Models", "Variants", "Instances", "Inference Pipeline"]
        }
      ]}
    />

    <DetailSection
      title="AI-Assisted Engineering"
      icon={Terminal}
      iconColor="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400"
      items={[
        {
          title: "AI as Engineering Collaborator",
          desc: "Integrated AI as an engineering collaborator for repository exploration, architecture analysis, implementation, testing, debugging, and code review—moving beyond code completion to accelerate end-to-end delivery while maintaining code ownership.",
          tags: ["AI-Assisted Dev", "Architecture", "Code Review", "Debugging", "Productivity"]
        },
        {
          title: "Selective AI in TDD",
          desc: "Used AI selectively during TDD for scaffolding and boilerplate while maintaining independent test-case design to avoid reproducing implementation logic in tests, preserving the integrity of behavior-first approach.",
          tags: ["TDD", "AI Ethics", "Test Integrity", "Human-in-the-loop"]
        }
      ]}
    />

    {/* Tech Stack Summary */}
    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
        <Cpu size={18} className="text-indigo-600 dark:text-indigo-400" />
        Tech Stack
      </h4>
      <div className="flex flex-wrap gap-2">
        {[
          "React", "Node.js", "TypeScript", "Python", "MariaDB", "RabbitMQ",
          "Docker", "WSL2", "S3", "PLC", "Jest", "Vitest", "Git", "CI/CD",
          "PM2", "AnyDesk", "OpenAPI", "Linux", "Windows"
        ].map((tech) => (
          <span key={tech} className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 text-sm rounded-full border border-indigo-100 dark:border-indigo-800">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

interface DetailSectionProps {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  iconColor: string;
  items: Array<{
    title: string;
    desc: string;
    tags: string[];
  }>;
}

function DetailSection({ title, icon: Icon, iconColor, items }: DetailSectionProps) {
  return (
    <div>
    <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white mb-4">
      <Icon size={20} className={iconColor} />
      {title}
    </h4>
    <div className="space-y-4 ml-6 border-l-2 border-gray-200 dark:border-gray-700 pl-4">
      {items.map((item, index) => (
        <div key={index} className="group relative">
          <div className="absolute left-[-10px] top-2 w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600 group-hover:bg-indigo-500 dark:group-hover:bg-indigo-500 transition-colors"></div>
          <h5 className="font-medium text-gray-900 dark:text-white mb-1">{item.title}</h5>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{item.desc}</p>
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag, i) => (
              <span key={i} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded border border-gray-200 dark:border-gray-700">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: '2025 Mar – Present',
    title: 'Software Development Engineer 1',
    organization: 'Frinks.ai',
    description: 'First full-time role. Full-stack product engineering across frontend, backend APIs, testing, deployment, release engineering, system monitoring, and industrial AI/vision systems. Click to view detailed breakdown.',
    icon: <Code size={20} />,
    category: 'work',
    isClickable: true,
    detailContent: frinksDetailContent
  },
  {
    id: 2,
    year: '2022 – 2026',
    title: "Bachelor's Degree, Computer Science",
    organization: 'Vellore Institute Of Technology',
    description: 'Built a strong foundation in computer science while actively applying concepts through hands-on projects and practical work. Graduated with focus on software engineering, algorithms, and systems.',
    icon: <GraduationCap size={20} />,
    category: 'education'
  },
  {
    id: 3,
    year: '2025 June – Aug',
    title: 'Data Analysis Intern',
    organization: 'SiyaCloud Private Limited',
    description: 'Analysed sales data, generated actionable insights, and supported business intelligence needs. Worked with data visualization, statistical analysis, and reporting dashboards.',
    icon: <Briefcase size={20} />,
    category: 'work'
  },
  {
    id: 4,
    year: '2025 Mar',
    title: 'Semi Finalist',
    organization: 'Build With India — Hackathon',
    description: 'Placed among top 80 teams out of 25,000+ across India with innovative idea and realistic deployment plans. Recognized for technical approach and product thinking.',
    icon: <Award size={20} />,
    category: 'achievement'
  },
  {
    id: 5,
    year: '2025 Feb – Apr',
    title: 'Frontend Developer',
    organization: 'Pooja Fasteners',
    description: 'Built the landing page for Pooja Fasteners, enhancing the company&apos;s online presence. Collaborated with stakeholders to gather requirements and refine website functionalities.',
    icon: <Briefcase size={20} />,
    category: 'work'
  }
];

const Journey: React.FC = () => {
  const [openDetail, setOpenDetail] = useState<TimelineItem | null>(null);

  return (
    <>
      <section 
        id="journey" 
        className="py-20 bg-white dark:bg-gray-900"
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <div 
            className="text-center mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Journey
            </h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
              The path that has shaped my skills and expertise. A timeline of professional growth and learning.
            </p>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Connector Line */}
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-indigo-200 dark:bg-indigo-900 transform md:translate-x-[-0.5px]"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                  data-aos-delay={100 + (index * 50)}
                  data-aos-duration="800"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-6 w-6 h-6 rounded-full bg-indigo-600 transform md:translate-x-[-50%] shadow-md flex items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  
                  {/* Timeline Content */}
                  <div className={`md:w-1/2 pl-10 md:pl-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div 
                      className={`p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 ${item.isClickable ? 'cursor-pointer ring-2 ring-indigo-500/20' : ''}`}
                      onClick={() => item.isClickable && setOpenDetail(item)}
                    >
                      <div className="flex items-center mb-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${item.category === 'work' 
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                          : item.category === 'education'
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                            : 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                        }`}>
                          {item.icon}
                        </div>
                        <span className="text-sm font-medium bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 py-1 px-3 rounded-full">
                          {item.year}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">
                        {item.organization}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                      
                      {item.isClickable && (
                        <div className="mt-4 flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-sm font-medium">
                          <ExternalLink size={16} />
                          <span>View details →</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {openDetail && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpenDetail(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="detail-title"
        >
          <div 
            className="bg-white dark:bg-gray-950 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white/95 dark:bg-gray-950/95 backdrop-blur rounded-t-2xl z-10">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setOpenDetail(null)}
                  className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Close detail view"
                >
                  <X size={20} className="text-gray-600 dark:text-gray-300" />
                </button>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <Code size={22} className="text-white" />
                </div>
                <div>
                  <h3 id="detail-title" className="text-xl font-bold text-gray-900 dark:text-white">
                    {openDetail.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{openDetail.organization}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 dark:text-gray-400 hidden sm:block">
                  {openDetail.year}
                </span>
              </div>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-6 pr-8">
              {openDetail.detailContent}
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-3 p-4 border-t border-gray-200 dark:border-gray-800 sticky bottom-0 bg-white/95 dark:bg-gray-950/95 backdrop-blur rounded-b-2xl">
              <button
                onClick={() => setOpenDetail(null)}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Journey;
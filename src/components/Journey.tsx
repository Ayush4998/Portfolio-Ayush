import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Layers, Server, TestTube, Activity, Eye, Terminal } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ---------------------------------------------------------------------------
// Current role, modeled as "modules" — mirrors the way FrinksEdge itself
// organizes work (configurable modules, variants, instances) rather than a
// generic list of bullet points.
// ---------------------------------------------------------------------------

type ModuleKey = 'product' | 'release' | 'testing' | 'health' | 'vision' | 'ai';

interface ModuleItem {
  title: string;
  desc: string;
  tags: string[];
}

interface Accent {
  tint: string;
  text: string;
  border: string;
  dot: string;
}

interface Module {
  key: ModuleKey;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  accent: Accent;
  items: ModuleItem[];
}

const MODULES: Module[] = [
  {
    key: 'product',
    label: 'Product & frontend',
    icon: Layers,
    accent: {
      tint: 'bg-[#EAF3F4] dark:bg-[#132226]',
      text: 'text-[#2C6470] dark:text-[#8FD0D9]',
      border: 'border-[#3E7C8C]',
      dot: 'bg-[#3E7C8C]',
    },
    items: [
      {
        title: 'Responsive landing page',
        desc: 'Built a responsive landing page with media queries for different screen sizes.',
        tags: ['React', 'Media queries'],
      },
      {
        title: 'Edit-module configuration refactor',
        desc: 'Refactored the Edit Module Configuration system from roughly 4,000 lines to 600, separating module-specific configuration handling into maintainable components.',
        tags: ['TypeScript', 'Refactoring'],
      },
      {
        title: 'Analyzed image configuration',
        desc: 'Worked on post-deployment visual configuration of inferred images.',
        tags: ['React', 'Computer vision'],
      },
      {
        title: 'Thresholds & ground-truth values',
        desc: 'Worked on module configuration involving thresholds and GT values across different variants and instances.',
        tags: ['Variants', 'Instances'],
      },
      {
        title: 'End-to-end API development',
        desc: 'Built and integrated 1–2 APIs end-to-end, from frontend interactions through the Node.js backend to database persistence.',
        tags: ['Node.js', 'Database'],
      },
    ],
  },
  {
    key: 'release',
    label: 'Release engineering',
    icon: Server,
    accent: {
      tint: 'bg-[#FBF1E3] dark:bg-[#241C10]',
      text: 'text-[#8A5A1E] dark:text-[#E7B36B]',
      border: 'border-[#C6822E]',
      dot: 'bg-[#C6822E]',
    },
    items: [
      {
        title: 'Linux to Windows, via WSL2',
        desc: 'Worked on migrating the existing Linux-based product installation system to Windows using WSL2, evaluating Docker Desktop and adopting the WSL2-based approach.',
        tags: ['WSL2', 'Docker'],
      },
      {
        title: 'Version validation & deployment variants',
        desc: 'Worked with version validation, deployment variants, Node/Python runtime images, deployment scripts, and release artifacts.',
        tags: ['Versioning', 'Runtime images'],
      },
      {
        title: 'Release distribution pipeline',
        desc: 'Worked on the release distribution flow: packaging releases as ZIP artifacts, storing them in S3, and making them available through the Release Manager/installer page.',
        tags: ['S3'],
      },
      {
        title: 'Feature-branch & release drift',
        desc: 'Built Feature Branch Drift and Release Drift functionality to identify differences between branches and releases, giving visibility into the current state of production code.',
        tags: ['Git'],
      },
      {
        title: 'Cross-environment debugging',
        desc: 'Worked across Linux and Windows/WSL2 environments and remotely debugged deployed plants using AnyDesk, Docker, and PM2.',
        tags: ['AnyDesk', 'PM2'],
      },
    ],
  },
  {
    key: 'testing',
    label: 'Testing & TDD',
    icon: TestTube,
    accent: {
      tint: 'bg-[#EBF4EC] dark:bg-[#141F17]',
      text: 'text-[#356B41] dark:text-[#8FCE9C]',
      border: 'border-[#4E8B5C]',
      dot: 'bg-[#4E8B5C]',
    },
    items: [
      {
        title: 'Behavior-first TDD',
        desc: 'Worked on behavior-first TDD across roughly two repositories, with broader testing work spanning the product\u2019s repositories. Identified frontend-called endpoints and defined expected behavior before inspecting the underlying implementation.',
        tags: ['Jest', 'Vitest'],
      },
      {
        title: 'Reducing implementation bias',
        desc: 'Designed test cases independently of implementation logic, using existing behavior only where clarification was needed, then added the missing edge cases and failure scenarios.',
        tags: ['Edge cases'],
      },
      {
        title: 'Suite organization',
        desc: 'Implemented and organized the resulting test suites within their respective repositories.',
        tags: [],
      },
    ],
  },
  {
    key: 'health',
    label: 'Health monitoring',
    icon: Activity,
    accent: {
      tint: 'bg-[#F8EBEA] dark:bg-[#251413]',
      text: 'text-[#9C3F38] dark:text-[#E7938C]',
      border: 'border-[#B85049]',
      dot: 'bg-[#B85049]',
    },
    items: [
      {
        title: 'Health monitor',
        desc: 'Worked on health monitor functionality covering the health, connectivity, and status of containers, Python components, scripts, PLCs, MariaDB, RabbitMQ, and other system dependencies.',
        tags: ['Docker', 'PLC', 'RabbitMQ'],
      },
      {
        title: 'PLC read & trigger log visibility',
        desc: 'Worked on PLC read and trigger log visibility in the frontend, including dummy data for testing and validation.',
        tags: ['PLC', 'Logging'],
      },
      {
        title: 'Remote plant debugging',
        desc: 'Debugged deployed plants remotely using AnyDesk, investigating services and running Docker/PM2 commands to diagnose issues.',
        tags: ['AnyDesk', 'PM2'],
      },
    ],
  },
  {
    key: 'vision',
    label: 'Industrial AI & vision',
    icon: Eye,
    accent: {
      tint: 'bg-[#F1EDF6] dark:bg-[#1C1625]',
      text: 'text-[#5F4A82] dark:text-[#BBA4DA]',
      border: 'border-[#7C63A3]',
      dot: 'bg-[#7C63A3]',
    },
    items: [
      {
        title: 'Module ecosystem',
        desc: "Developed working knowledge of the platform's industrial AI/vision modules: inferencing, image classification, object detection, OCR, search area, color detection, dimensioning, segmentation, and bead inspection.",
        tags: ['9 modules'],
      },
      {
        title: 'Configuration & model interaction',
        desc: 'Gained an understanding of how module configurations, trained models, variants, instances, and inference results interact within the overall product.',
        tags: [],
      },
    ],
  },
  {
    key: 'ai',
    label: 'AI-assisted engineering',
    icon: Terminal,
    accent: {
      tint: 'bg-[#EEF1F2] dark:bg-[#171B1D]',
      text: 'text-[#3E4C55] dark:text-[#A9B8C0]',
      border: 'border-[#5B6B79]',
      dot: 'bg-[#5B6B79]',
    },
    items: [
      {
        title: 'AI as an engineering collaborator',
        desc: 'Used AI for repo exploration, architecture analysis, implementation, debugging, and review, while keeping ownership of the code.',
        tags: ['Code review'],
      },
      {
        title: 'Selective AI in TDD',
        desc: 'Used AI for scaffolding and boilerplate but kept test-case design independent, so tests never just mirror the implementation.',
        tags: ['Test integrity'],
      },
    ],
  },
];

const STATS: { value: string; label: string }[] = [
  { value: '4,000 → 600', label: 'Lines in the config module refactor' },
  { value: '9', label: 'Vision modules worked across' },
  { value: '1–2', label: 'APIs built end-to-end' },
];

const TECH_STACK = [
  'React', 'Node.js', 'TypeScript', 'Python', 'MariaDB', 'RabbitMQ',
  'Docker', 'WSL2', 'S3', 'PLC', 'Reddis', 'Git', 'CI/CD', 'PM2', 'AnyDesk',
];

// ---------------------------------------------------------------------------
// Everything before the current role — a quiet, chronological log rather
// than another set of cards competing for attention.
// ---------------------------------------------------------------------------

interface LogEntry {
  year: string;
  title: string;
  org: string;
  desc: string;
}

const LOG_ITEMS: LogEntry[] = [
  {
    year: 'Jun – Aug 2025',
    title: 'Data Analysis Intern',
    org: 'SiyaCloud Private Limited',
    desc: 'Analyzed sales data and built reporting dashboards to support business intelligence and decision-making.',
  },
  {
    year: 'Mar 2025',
    title: 'Semi-finalist',
    org: 'Build With India, national hackathon',
    desc: 'Placed among the top 80 teams out of 25,000+ nationwide, recognized for technical approach and product thinking.',
  },
  {
    year: 'Feb – Apr 2025',
    title: 'Frontend Developer',
    org: 'Pooja Fasteners',
    desc: "Built the company's landing page and worked with stakeholders to shape site requirements and functionality.",
  },
  {
    year: '2022 – 2026',
    title: 'B.Tech, Computer Science',
    org: 'Vellore Institute of Technology',
    desc: 'Coursework in software engineering, algorithms, and systems, applied through hands-on projects alongside internships and hackathons.',
  },
];

const Journey: React.FC = () => {
  const [activeModule, setActiveModule] = useState<ModuleKey>('product');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.journey-reveal', { opacity: 1, y: 0 });
      gsap.from('.journey-reveal', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power2.out',
        immediateRender: false,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const module = useMemo(() => MODULES.find((m) => m.key === activeModule)!, [activeModule]);

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="journey-reveal mb-12 sm:mb-14 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
            My journey
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
            A year and a half building inside an industrial vision product, and how I got there.
          </p>
        </div>

        {/* Current role — dashboard panel, no click required to see anything */}
        <div className="journey-reveal rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden mb-14">
          <div className="grid lg:grid-cols-[280px_1fr]">
            {/* Identity + stat readouts */}
            <div className="p-6 sm:p-7 bg-gray-50 dark:bg-gray-900/60 lg:border-r border-gray-200 dark:border-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-500">Mar 2025 — Present</p>
              <h3 className="mt-1 text-xl font-semibold text-gray-900 dark:text-white">
                Software Development Engineer 1
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Frinks.ai</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">Bangalore, India (hybrid)</p>

              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                During my first six months at Frinks.ai, I worked across <b>product development, backend systems, testing, deployment, release management, system monitoring, and industrial AI</b>. My work spanned multiple layers of the product, from frontend and APIs to infrastructure, deployment workflows, and AI-powered inspection systems.
              </p>
            </div>

            {/* Module selector + active module content */}
            <div className="p-6 sm:p-7">
              <div
                role="tablist"
                aria-label="Areas of work"
                className="flex flex-wrap gap-1.5"
              >
                {MODULES.map((m) => {
                  const active = m.key === activeModule;
                  return (
                    <button
                      key={m.key}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setActiveModule(m.key)}
                      className={`shrink-0 inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-400 dark:focus-visible:ring-offset-gray-950 ${
                        active
                          ? `${m.accent.tint} ${m.accent.text} border-transparent font-medium`
                          : 'border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${m.accent.dot}`} />
                      {m.label}
                    </button>
                  );
                })}
              </div>

              <div key={module.key} role="tabpanel" className="journey-fade mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-5">
                {module.items.map((item) => (
                  <div key={item.title} className={`border-l-2 pl-4 py-0.5 ${module.accent.border}`}>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs px-2 py-0.5 rounded ${module.accent.tint} ${module.accent.text}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stack strip */}
          <div className="border-t border-gray-200 dark:border-gray-800 px-6 sm:px-7 py-3 flex flex-wrap gap-x-4 gap-y-1.5 bg-gray-50/60 dark:bg-gray-900/30">
            {TECH_STACK.map((tech) => (
              <span key={tech} className="font-mono text-xs text-gray-500 dark:text-gray-500">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Everything before it — quiet, chronological, no cards */}
        <div className="journey-reveal">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-500 mb-5">
            Before that
          </h3>
          <ol className="space-y-7">
            {LOG_ITEMS.map((entry) => (
              <li key={entry.title} className="flex flex-col sm:flex-row sm:gap-6">
                <span className="font-mono text-xs text-gray-500 dark:text-gray-500 sm:w-28 sm:pt-0.5 shrink-0">
                  {entry.year}
                </span>
                <div>
                  <h4 className="text-base font-medium text-gray-900 dark:text-white">
                    {entry.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{entry.org}</p>
                  <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
                    {entry.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <style>{`
        .journey-fade { animation: journeyFade 0.35s ease; }
        @keyframes journeyFade {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .journey-fade { animation: none; }
        }
      `}</style>
    </section>
  );
};

export default Journey;
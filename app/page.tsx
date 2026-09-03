'use client';
import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  ArrowDown,
  MapPin,
  Code2,
  Mail,
  Plus,
  Menu,
  X,
} from 'lucide-react';
import { flushSync } from 'react-dom';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
const projects = [
  [
    'Murika',
    'Where talent meets opportunity.',
    'Web & mobile',
    'React · Mobile · APIs',
    'A talent marketplace connecting creators with clients. I contributed responsive web interfaces, mobile features, API integrations, and navigation improvements.',
    'https://murika.rw',
    'lime',
    'Talent marketplace',
  ],
  [
    'Medisoft',
    'Better tools. Better care.',
    'Healthcare',
    'Full-stack · Biometrics · APIs',
    'A hospital management system supporting healthcare operations. I developed system modules, integrated backend services, and implemented fingerprint authentication with the Digital Persona 4500 SDK.',
    'https://medisoft.rw',
    'blue',
    'Hospital management',
  ],
  [
    'Isange',
    'Discover your next destination.',
    'Web & mobile',
    'Web · Mobile · Navigation',
    'A visitor-services and navigation platform. I contributed web and mobile interfaces, location-discovery features, API integration, and usability improvements.',
    'https://isange.cybaselabs.com',
    'sand',
    'Discovery & navigation',
  ],
  [
    'iBimina',
    'Growing together, digitally.',
    'Platforms',
    'Full-stack · Databases · APIs',
    'A platform for modern community savings groups. I developed member management, activity tracking, and communication features to improve efficiency and transparency.',
    'https://ikimina.rw',
    'pink',
    'Community savings',
  ],
  [
    'Ibyapa',
    'Advertising, organized.',
    'Web & mobile',
    'Web · Mobile · Payments',
    'A road advertising board management platform. I contributed responsive interfaces and mobile features for board management and payment workflows, integrated with backend APIs.',
    'https://ibyapav1.cybaselabs.com',
    'sand',
    'Advertising management',
  ],
  [
    'DR AI Assistant',
    'Making health information accessible.',
    'Healthcare',
    'Full-stack · AI · APIs',
    'A medication and symptom-based assistant designed to offer possible diagnosis suggestions. I developed frontend and backend functionality, symptom-input interfaces, and information presentation.',
    '',
    'blue',
    'Healthcare assistant',
  ],
  [
    'Medtronic Labs',
    'Turning data into understanding.',
    'Healthcare',
    'Data visualization · Web',
    'I contributed to upgrading NCD data visualization tools used with hospital medical applications across Rwanda, improving medical graphs and the accessibility of healthcare data.',
    '',
    'pink',
    'NCD data visualization',
  ],
  [
    'BRD',
    'Digital access to development.',
    'Websites',
    'Frontend · Responsive design',
    'I contributed responsive frontend interfaces and user-facing components for the Development Bank of Rwanda website, supporting testing, debugging, and refinement across screen sizes.',
    'https://brdv3.cybaselabs.com',
    'lime',
    'Institutional website',
  ],
  [
    'NDU Rwanda',
    'A connected learning institution.',
    'Websites',
    'Frontend · Responsive design',
    'I contributed to the National Defence University of Rwanda website, developing responsive interfaces and reusable web components and supporting testing and usability improvements.',
    'https://ndu.webtesting.co.rw',
    'blue',
    'University website',
  ],
  [
    'D-Treat',
    'Technology with patients in mind.',
    'Healthcare',
    'Team leadership · Full-stack',
    'I led development of a platform for medical consultations and patient care, coordinating the team and overseeing architecture, feature development, testing, and delivery.',
    '',
    'sand',
    'Medical consultations',
  ],
];
const categories = [
  'All projects',
  'Web & mobile',
  'Healthcare',
  'Platforms',
  'Websites',
];
const details = [
  {
    role: 'Front-End & Mobile Developer',
    organization: 'Cybase 63',
    contributions: [
      'Responsive web interfaces and mobile application features',
      'API integrations supporting marketplace workflows',
      'Navigation, debugging, and cross-device usability',
    ],
  },
  {
    role: 'Full-Stack Developer',
    organization: 'Dynasoft Ltd',
    contributions: [
      'Hospital-management modules and digital workflows',
      'Frontend and backend service integration',
      'Biometric authentication with the Digital Persona 4500 SDK',
    ],
  },
  {
    role: 'Front-End & Mobile Developer',
    organization: 'Cybase 63',
    contributions: [
      'Location discovery and visitor-service interfaces',
      'Responsive web and mobile features',
      'Navigation improvements and backend API integration',
    ],
  },
  {
    role: 'Full-Stack Developer',
    organization: 'Automate',
    contributions: [
      'Member management for community savings groups',
      'Activity tracking and communication features',
      'Workflows supporting operational efficiency and transparency',
    ],
  },
  {
    role: 'Front-End & Mobile Developer',
    organization: 'Cybase 63',
    contributions: [
      'Road advertising board management interfaces',
      'Payment-related workflows across web and mobile',
      'Responsive components integrated with backend APIs',
    ],
  },
  {
    role: 'Full-Stack Developer',
    organization: 'Dynasoft Ltd',
    contributions: [
      'Symptom-input and information-presentation interfaces',
      'Frontend and backend application functionality',
      'API integration with an emphasis on usability and reliability',
    ],
  },
  {
    role: 'Full-Stack Developer',
    organization: 'Dynasoft Ltd',
    contributions: [
      'Upgrades to NCD data visualization tools',
      'Medical graphs for hospital applications across Rwanda',
      'Improved presentation and accessibility of healthcare data',
    ],
  },
  {
    role: 'Front-End Developer',
    organization: 'Cybase 63',
    contributions: [
      'Responsive website interfaces and reusable components',
      'User-facing feature implementation',
      'Testing, debugging, and refinement across screen sizes',
    ],
  },
  {
    role: 'Front-End Developer',
    organization: 'Cybase 63',
    contributions: [
      'Responsive interfaces for the university website',
      'Web components supporting accessibility and usability',
      'Implementation, testing, and functionality improvements',
    ],
  },
  {
    role: 'Team Lead & Full-Stack Developer',
    organization: 'D-Treat Project',
    contributions: [
      'Technical leadership and team coordination',
      'System architecture and feature development',
      'Delivery from ideation through testing and deployment',
    ],
  },
];
function ProjectCard({ project: p }: { project: string[] }) {
  const index = projects.indexOf(p),
    detail = details[index];
  return (
    <article className="project">
      <Dialog>
        <DialogTrigger
          render={
            <Button className={'project-cover ' + p[6]} variant="ghost" />
          }
          aria-label={'Explore ' + p[0] + ' project'}
        >
          <span className="cover-top">
            <span>{p[7]}</span>
            <span>{String(index + 1).padStart(2, '0')} / 10</span>
          </span>
          <span className="cover-title">
            <span className={p[0].length > 12 ? 'long-title' : ''}>
              {p[0]}
              <b>.</b>
            </span>
            <span className="cover-subtitle">{p[1]}</span>
          </span>
          <span className="cover-bottom">
            <Code2 size={22} />
            <span className="cover-cta">
              Explore project <ArrowUpRight size={15} />
            </span>
          </span>
        </DialogTrigger>
        <DialogContent className="project-dialog">
          <div className={'detail-banner ' + p[6]}>
            <span className="eyebrow">{p[7]}</span>
            <DialogTitle>
              {p[0]}
              <span>.</span>
            </DialogTitle>
            <p>{p[1]}</p>
          </div>
          <div className="detail-body">
            <div className="detail-meta">
              <div>
                <span>MY ROLE</span>
                <p>{detail.role}</p>
              </div>
              <div>
                <span>TEAM / ORGANIZATION</span>
                <p>{detail.organization}</p>
              </div>
            </div>
            <DialogDescription>{p[4]}</DialogDescription>
            <h4>What I contributed</h4>
            <ul>
              {detail.contributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="tags">
              {p[3].split(' · ').map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            {p[5] ? (
              <a
                className="primary-link detail-link"
                href={p[5]}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit project website <ArrowUpRight size={17} />
              </a>
            ) : (
              <a
                className="primary-link detail-link"
                href={
                  'mailto:musimentalois@gmail.com?subject=' +
                  encodeURIComponent('Let’s talk about ' + p[0])
                }
              >
                Ask me about this project <ArrowUpRight size={17} />
              </a>
            )}
          </div>
        </DialogContent>
      </Dialog>
      <div className="project-heading">
        <h3>{p[0]}</h3>
        {p[5] && (
          <a
            href={p[5]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={'Visit ' + p[0] + ' website'}
          >
            <ArrowUpRight size={23} />
          </a>
        )}
      </div>
      <p className="project-description">{p[4]}</p>
      <div className="tags">
        {p[3].split(' · ').map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </article>
  );
}
export default function Home() {
  const [filter, setFilter] = useState('All projects');
  const [expanded, setExpanded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const filtered = projects.filter(
    (p) => filter === 'All projects' || p[2] === filter,
  );
  const visible =
    filter === 'All projects' && !expanded ? filtered.slice(0, 4) : filtered;
  useEffect(() => {
    const context = (
      document as Document & {
        modelContext?: {
          registerTool: (
            tool: unknown,
            options: { signal: AbortSignal },
          ) => void | Promise<void>;
        };
      }
    ).modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    const register = async () => {
      try {
        await context.registerTool(
          {
            name: 'filter_portfolio_projects',
            title: 'Filter portfolio projects',
            description:
              'Show all portfolio projects in a selected category in the visible project gallery.',
            inputSchema: {
              type: 'object',
              properties: { category: { type: 'string', enum: categories } },
              required: ['category'],
              additionalProperties: false,
            },
            annotations: { readOnlyHint: false, untrustedContentHint: false },
            execute(input: unknown) {
              if (
                !input ||
                typeof input !== 'object' ||
                Array.isArray(input) ||
                !('category' in input) ||
                Object.keys(input).length !== 1 ||
                typeof input.category !== 'string' ||
                !categories.includes(input.category)
              )
                throw new Error('Choose a supported project category.');
              const category = input.category;
              flushSync(() => {
                setFilter(category);
                setExpanded(true);
              });
              document
                .getElementById('work')
                ?.scrollIntoView({ behavior: 'instant' });
              return {
                category,
                projects: projects
                  .filter(
                    (p) => category === 'All projects' || p[2] === category,
                  )
                  .map((p) => ({
                    name: p[0],
                    category: p[2],
                    contribution: p[4],
                    url: p[5] || null,
                  })),
              };
            },
          },
          { signal: lifecycle.signal },
        );
      } catch (error) {
        if (!lifecycle.signal.aborted)
          console.warn('Portfolio tool registration unavailable', error);
      }
    };
    void register();
    return () => lifecycle.abort();
  }, []);
  return (
    <>
      <a className="skip" href="#work">
        Skip to projects
      </a>
      <header className="header wrap">
        <a className="wordmark" href="#">
          lois<span>.</span>
        </a>
        <nav
          className={menuOpen ? 'nav-open' : ''}
          aria-label="Main navigation"
          onClick={() => setMenuOpen(false)}
        >
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a className="mobile-contact" href="#contact">
            Contact
          </a>
        </nav>
        <Button
          className="menu-toggle"
          variant="ghost"
          size="icon"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
        <a className="contact-link" href="#contact">
          Let’s talk <ArrowUpRight size={17} />
        </a>
      </header>
      <main>
        <section className="hero wrap">
          <div className="eyebrow">
            <span className="dot" /> SOFTWARE DEVELOPER · KIGALI, RWANDA
          </div>
          <h1>
            Thoughtful code.
            <br />
            Meaningful <span>experiences.</span>
          </h1>
          <div className="hero-bottom">
            <p>
              I’m Lois Nyishimente, a software developer building web and mobile
              experiences that make everyday life a little better.
            </p>
            <a className="primary-link" href="#work">
              Explore my work <ArrowDown size={18} />
            </a>
          </div>
          <div className="hero-foot">
            <span>FRONTEND / FULL-STACK / MOBILE</span>
            <span>Built with care. Made for people.</span>
          </div>
        </section>
        <section id="work" className="work wrap">
          <div className="section-heading">
            <div>
              <span className="eyebrow">01 / SELECTED WORK</span>
              <h2>
                Ideas turned into impact<span>.</span>
              </h2>
            </div>
            <p>
              A selection of products I’ve
              <br />
              helped bring to life.
            </p>
          </div>
          <div className="filters" aria-label="Filter projects">
            {categories.map((c) => (
              <Button
                key={c}
                variant="ghost"
                className={filter === c ? 'filter active' : 'filter'}
                aria-pressed={filter === c}
                onClick={() => {
                  setFilter(c);
                  setExpanded(false);
                }}
              >
                {c}
                {c === 'All projects' && <span>10</span>}
              </Button>
            ))}
          </div>
          <p className="sr-only" aria-live="polite">
            {visible.length} of {filtered.length} projects shown
          </p>
          <div className="project-grid" key={filter}>
            {visible.map((p) => (
              <ProjectCard key={p[0]} project={p} />
            ))}
          </div>
          {filter === 'All projects' && (
            <div className="more-projects">
              <span>
                Showing {visible.length} of {projects.length} projects
              </span>
              <Button
                variant="outline"
                onClick={() => {
                  setExpanded(!expanded);
                  if (expanded)
                    document.getElementById('work')?.scrollIntoView();
                }}
              >
                {expanded
                  ? 'Show selected projects'
                  : 'Explore all 10 projects'}
                {expanded ? <ArrowUpRight size={16} /> : <Plus size={16} />}
              </Button>
            </div>
          )}
        </section>
        <section id="about" className="about">
          <div className="wrap about-grid">
            <div>
              <span className="eyebrow">02 / A LITTLE ABOUT ME</span>
              <h2>
                Curious by nature.
                <br />
                Developer by craft.
              </h2>
              <div className="location">
                <MapPin size={16} /> Based in Kigali, Rwanda
              </div>
            </div>
            <div>
              <p className="about-intro">
                I build software around the people who use it.
              </p>
              <p>
                My work spans responsive websites, mobile applications,
                healthcare tools, and community platforms. I enjoy translating
                complex requirements into clear, dependable experiences—from the
                interface to the API behind it.
              </p>
              <p>
                I studied Software Programming & Embedded Systems at Rwanda
                Coding Academy (2021–2024), with additional international
                technical training in South Korea.
              </p>
              <div className="skills">
                {[
                  [
                    'Interfaces',
                    'React · Vue.js · JavaScript · HTML & CSS · Tailwind CSS',
                  ],
                  ['Mobile', 'React Native · Flutter · Expo'],
                  [
                    'Behind the scenes',
                    'Node.js · Express · Spring Boot · MySQL · PostgreSQL · REST · GraphQL',
                  ],
                  ['My toolkit', 'Git · Figma · Firebase · JWT · OAuth 2.0'],
                ].map(([a, b]) => (
                  <div key={a}>
                    <h3>{a}</h3>
                    <p>{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="experience" className="experience wrap">
          <span className="eyebrow">03 / THE JOURNEY SO FAR</span>
          <h2>Experience that builds.</h2>
          <div className="experience-list">
            {[
              [
                'Apr – Sep 2026',
                'Cybase 63',
                'Front-End & Mobile Developer',
                'Web and mobile development for Murika, Isange, Ibyapa, NDU Rwanda, and BRD.',
              ],
              [
                '2024 – 2025',
                'Dynasoft Ltd',
                'Full-Stack Developer',
                'Healthcare software, biometric authentication, AI assistant interfaces, and medical data visualization.',
              ],
              [
                '2024 – 2025',
                'Automate · iBimina',
                'Full-Stack Developer',
                'Digital tools for savings groups, member management, activity tracking, and communication.',
              ],
              [
                '2023 – 2024',
                'D-Treat',
                'Team Lead & Full-Stack Developer',
                'Technical leadership and product development from ideation through deployment.',
              ],
            ].map(([date, company, role, detail]) => (
              <div className="experience-row" key={company}>
                <span>{date}</span>
                <div>
                  <h3>{company}</h3>
                  <p>{role}</p>
                </div>
                <p>{detail}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="contact" className="contact wrap">
          <div className="eyebrow">04 / LET’S CONNECT</div>
          <h2>
            Have something
            <br />
            in mind?{' '}
            <a href="mailto:musimentalois@gmail.com">
              Let’s build it.
              <ArrowUpRight />
            </a>
          </h2>
          <div className="contact-bottom">
            <p>
              For collaborations, opportunities,
              <br />
              or just a good conversation.
            </p>
            <a href="mailto:musimentalois@gmail.com">
              <Mail size={19} /> musimentalois@gmail.com
            </a>
          </div>
        </section>
      </main>
      <footer className="wrap">
        <span>© {new Date().getFullYear()} Lois Nyishimente</span>
        <span>Made with intention in Kigali.</span>
        <a href="#">Back to top ↑</a>
      </footer>
    </>
  );
}

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Link2,
  MapPin,
} from 'lucide-react';

const projects = [
  {
    name: 'Murika',
    category: 'Creative marketplace',
    description:
      'Connecting Rwanda’s creative talent with the people who need it.',
    contribution: 'Front-end & mobile development',
    theme: 'murika',
    image: '/images/murika.webp',
    imageAlt: 'Murika creative marketplace campaign',
    imageWidth: 960,
    imageHeight: 600,
    screenshot: false,
    url: 'https://murika.rw',
  },
  {
    name: 'Medisoft',
    category: 'Healthcare technology',
    description:
      'Making hospital workflows simpler, more connected, and secure.',
    contribution: 'Full-stack & biometric integration',
    theme: 'medisoft',
    image: '/images/medisoft.png',
    imageAlt:
      'Medisoft website showing its electronic health records platform and hospital dashboard',
    imageWidth: 1918,
    imageHeight: 826,
    screenshot: true,
    url: 'https://medisoft.rw',
  },
  {
    name: 'Isange',
    category: 'Discovery & navigation',
    description:
      'Helping visitors discover places and find their way with ease.',
    contribution: 'Web & mobile interfaces',
    theme: 'isange',
    image: '/images/isange.png',
    imageAlt:
      'Isange city services page with permits, utilities, and citizen services',
    imageWidth: 1916,
    imageHeight: 871,
    screenshot: true,
    url: 'https://isange.cybaselabs.com',
  },
  {
    name: 'iBimina',
    category: 'Community finance',
    description:
      'Bringing member management and savings-group activity together.',
    contribution: 'Full-stack development',
    theme: 'ibimina',
    image: '/images/ibimina.png',
    imageAlt: 'Ikimina community savings platform showing its member dashboard',
    imageWidth: 1915,
    imageHeight: 896,
    screenshot: true,
    url: 'https://ikimina.rw',
  },
];

export default function Home() {
  return (
    <div id="top">
      <a className="skip-link" href="#work">
        Skip to projects
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a
            className="wordmark"
            href="#top"
            aria-label="Lois Nyishimente home"
          >
            lois<span>.</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a className="nav-contact" href="#contact">
              Let’s talk <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </header>
      <main>
        <section className="hero container" aria-labelledby="intro-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> Software developer
            </p>
            <h1 id="intro-title">
              Thoughtful code.
              <br />
              <span>Meaningful</span>
              <br />
              experiences.
            </h1>
            <p className="hero-description">
              Hi, I’m <strong>Lois Nyishimente</strong>. I turn ideas into
              useful web and mobile experiences, with care in every detail.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <ArrowDown size={17} aria-hidden="true" />
              </a>
              <a
                className="text-link"
                href="https://github.com/loisnyishimente"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in a new tab)"
              >
                <Code2 size={19} aria-hidden="true" /> GitHub{' '}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-note">
              <Code2 size={16} aria-hidden="true" /> Built with care.
            </div>
            <img
              className="hero-art"
              src="/images/sage-ribbon.webp"
              alt=""
              width="900"
              height="900"
              fetchPriority="high"
            />
            <div className="location-note">
              <span className="location-icon">
                <MapPin size={18} aria-hidden="true" />
              </span>
              <div>
                <span>Based in</span>
                <strong>Kigali, Rwanda</strong>
              </div>
              <span className="location-coordinate" aria-hidden="true">
                01° S / 30° E
              </span>
            </div>
          </div>
        </section>
        <section
          id="work"
          className="work-section container"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow section-eyebrow">A selection of my work</p>
              <h2 id="work-title">
                Ideas, brought to life<span>.</span>
              </h2>
            </div>
            <p>
              Real projects.
              <br />
              Thoughtful contributions.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => {
              return (
                <article
                  className={'project-card ' + project.theme}
                  key={project.name}
                >
                  <a
                    className="project-link"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={
                      project.name +
                      ' — visit project website (opens in a new tab)'
                    }
                  >
                    <div
                      className={
                        'project-cover' +
                        (project.screenshot ? ' project-cover-screenshot' : '')
                      }
                    >
                      <img
                        className="project-image"
                        src={project.image}
                        alt={project.imageAlt}
                        width={project.imageWidth}
                        height={project.imageHeight}
                        loading="lazy"
                      />
                      <span className="project-number">0{index + 1}</span>
                      <span className="project-open" aria-hidden="true">
                        <ArrowUpRight size={21} />
                      </span>
                    </div>
                    <div className="project-details">
                      <div className="project-title-row">
                        <h3>{project.name}</h3>
                        <span>{project.category}</span>
                      </div>
                      <p>{project.description}</p>
                      <div className="project-contribution">
                        <span>{project.contribution}</span>
                        <span className="visit-project">
                          View project{' '}
                          <ArrowUpRight size={14} aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </a>
                </article>
              );
            })}
          </div>
        </section>
        <section
          id="about"
          className="about-section container"
          aria-labelledby="about-title"
        >
          <div className="about-heading">
            <p className="eyebrow section-eyebrow">A little about me</p>
            <h2 id="about-title">
              A developer.
              <br />A problem solver<span>.</span>
            </h2>
          </div>
          <div className="about-copy">
            <p>
              I’m Lois, a software developer and Rwanda Coding Academy graduate.
              Through my work at Cybase 63 and Dynasoft, I’ve helped build
              products across healthcare, community finance, and digital
              services.
            </p>
            <p>
              I enjoy making complex things feel simple, from the first screen
              to the services behind it.
            </p>
            <ul className="skill-list" aria-label="Core technologies">
              {['React', 'Vue.js', 'React Native', 'Node.js'].map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </section>
        <section
          id="contact"
          className="contact-section container"
          aria-labelledby="contact-title"
        >
          <div className="contact-panel">
            <div>
              <p className="eyebrow">Have something in mind?</p>
              <h2 id="contact-title">
                Let’s build
                <br />
                something <em>good.</em>
              </h2>
            </div>
            <div className="contact-actions">
              <a
                className="button button-light"
                href="mailto:musimentalois@gmail.com"
              >
                Say hello <ArrowUpRight size={19} aria-hidden="true" />
              </a>
              <a className="email-link" href="mailto:musimentalois@gmail.com">
                musimentalois@gmail.com
              </a>
              <p>Projects, collaborations, or a friendly hello.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="container site-footer">
        <p>© {new Date().getFullYear()} Lois Nyishimente</p>
        <div className="social-links">
          <a
            href="https://github.com/loisnyishimente"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in a new tab)"
          >
            <Code2 size={16} aria-hidden="true" /> GitHub{' '}
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/lois-musimenta-72766636a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in a new tab)"
          >
            <Link2 size={16} aria-hidden="true" /> LinkedIn{' '}
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <a className="back-to-top" href="#top" aria-label="Back to top">
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </footer>
    </div>
  );
}

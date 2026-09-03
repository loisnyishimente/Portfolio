import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    name: 'Murika',
    description:
      'Web and mobile interfaces for a marketplace connecting creators with clients.',
    type: 'Web & mobile',
    url: 'https://murika.rw',
  },
  {
    name: 'Medisoft',
    description:
      'Hospital management modules, API integration, and fingerprint authentication.',
    type: 'Full-stack',
    url: 'https://medisoft.rw',
  },
  {
    name: 'Isange',
    description:
      'Responsive interfaces for location discovery and visitor navigation.',
    type: 'Web & mobile',
    url: 'https://isange.cybaselabs.com',
  },
  {
    name: 'iBimina',
    description:
      'Member management and activity tracking for community savings groups.',
    type: 'Full-stack',
    url: 'https://ikimina.rw',
  },
];

export default function Home() {
  return (
    <div className="portfolio">
      <a className="skip-link" href="#work">
        Skip to projects
      </a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Lois Nyishimente home">
          lois<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="mailto:musimentalois@gmail.com">
            Contact <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="intro" aria-labelledby="intro-title">
          <p className="location">Kigali, Rwanda</p>
          <h1 id="intro-title">
            Lois Nyishimente<span>.</span>
          </h1>
          <p className="role">Software developer</p>
          <p className="intro-copy">
            I build thoughtful web and mobile applications.
            <br className="desktop-break" /> Clear interfaces, useful features,
            and care in the details.
          </p>
        </section>

        <section id="work" className="work" aria-labelledby="work-title">
          <div className="section-heading">
            <h2 id="work-title">Selected work</h2>
            <span>A few projects I’ve contributed to</span>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <a
                className="project"
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} — visit project website (opens in a new tab)`}
              >
                <div className="project-copy">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
                <span className="project-type">{project.type}</span>
                <ArrowUpRight
                  className="project-arrow"
                  size={21}
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </section>

        <section id="about" className="about" aria-labelledby="about-title">
          <h2 id="about-title">A little about me</h2>
          <div>
            <p>
              I’m a Rwanda Coding Academy graduate with experience at Cybase 63
              and Dynasoft. My work spans healthcare, community finance, and
              digital services.
            </p>
            <p className="skills">React · Vue.js · React Native · Node.js</p>
          </div>
        </section>

        <section className="contact" aria-labelledby="contact-title">
          <div>
            <h2 id="contact-title">Let’s work together.</h2>
            <p>Have a project or an opportunity in mind?</p>
          </div>
          <div className="contact-links">
            <a href="mailto:musimentalois@gmail.com">
              musimentalois@gmail.com{' '}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <div className="social-links">
              <a
                href="https://github.com/loisnyishimente"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in a new tab)"
              >
                GitHub <ArrowUpRight size={14} aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/lois-musimenta-72766636a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile (opens in a new tab)"
              >
                LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer>© {new Date().getFullYear()} Lois Nyishimente</footer>
    </div>
  );
}

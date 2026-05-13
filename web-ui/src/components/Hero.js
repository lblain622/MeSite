import { Card, Link } from '@heroui/react';

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Software Developer</p>
        <h1>Hi, I am Lucille Blain. I build softeware that I think the might be fun to use and build</h1>
        <p className="hero-text">
          I enjoy creating web apps, services, and tools that feel clear to use and solid under the hood.
        </p>
        <div className="hero-actions" aria-label="Portfolio actions">
          <Link className="primary-action" href="#projects">
            View Projects
          </Link>
          <Link className="secondary-action" href="#skills">
            See Skills
          </Link>
        </div>
      </div>

      <Card className="terminal-card" aria-label="Developer profile snapshot">
        <Card.Header className="terminal-header">
          <span></span>
          <span></span>
          <span></span>
        </Card.Header>
        <Card.Content className="terminal-lines">
          <p>
            <span>$</span> focus --today
          </p>
          <p>Seeeking Full time Roles</p>
          <p>Designing New Projects</p>
          <p>Learn the Cloud and earning Certifications</p>
        </Card.Content>
      </Card>
    </section>
  );
}

export default Hero;

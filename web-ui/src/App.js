import Hero from './components/Hero';
import InterestList from './components/InterestList';
import Navigation from './components/Navigation';
import ProjectCard from './components/ProjectCard';
import ContactSection from './components/ContactSection';
import ResumeSection from './components/ResumeSection';
import SectionHeader from './components/SectionHeader';
import SkillCard from './components/SkillCard';
import { contactLinks, interests, projects, resume, skillGroups } from './data/portfolioData';
import './App.css';

function App() {
  return (
    <main className="portfolio-shell">
      <Navigation />
      <Hero />

      <section className="section" id="skills">
        <SectionHeader eyebrow="Skills & Tools" />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <SkillCard group={group} key={group.type} />
          ))}
        </div>
      </section>

      {/* <section className="section" id="projects">
        <SectionHeader eyebrow="Projects" title="Things I am building and/or refining." />
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
      </section>

      <section className="section interest-section" id="interests">
        <SectionHeader eyebrow="Interests" title="What keeps me curious." />
        <InterestList interests={interests} />
      </section> */}

      <ResumeSection resume={resume} />
      <ContactSection contactLinks={contactLinks} />
    </main>
  );
}

export default App;

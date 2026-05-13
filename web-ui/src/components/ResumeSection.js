import { Card, Chip, Link } from '@heroui/react';
import SectionHeader from './SectionHeader';

function ResumeSection({ resume }) {
  const resumeHref = `${process.env.PUBLIC_URL}/${encodeURIComponent(resume.fileName)}`;

  return (
    <section className="section" id="resume">
      <SectionHeader eyebrow="Resume" title="A place for the real thing." />
      <Card className="resume-card">
        <Card.Content className="resume-content">
          <div>
            <Chip className="tag favorite" color="primary" size="sm" variant="bordered">
              PDF ready
            </Chip>
            <h3>{resume.headline}</h3>
            <p>{resume.summary}</p>
          </div>

          <div className="resume-actions">
            <Link className="primary-action" href={resumeHref} target="_blank" rel="noreferrer">
              View Resume
            </Link>
            <Link className="secondary-action" href={resumeHref} download={resume.fileName}>
              Download PDF
            </Link>
          </div>
        </Card.Content>

        <Card.Footer className="resume-highlights">
          {resume.highlights.map((highlight) => (
            <p key={highlight}>{highlight}</p>
          ))}
        </Card.Footer>
      </Card>
    </section>
  );
}

export default ResumeSection;

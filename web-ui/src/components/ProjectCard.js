import { Card, Chip } from '@heroui/react';

function ProjectCard({ project }) {
  return (
    <Card className="project-card">
      <Card.Header className="card-heading">
        <h3>{project.name}</h3>
      </Card.Header>
      <Card.Content className="project-copy">
        <p>{project.summary}</p>
      </Card.Content>
      <Card.Footer className="project-stack">
        {project.stack.map((item) => (
          <Chip key={item} size="sm" variant="bordered">
            {item}
          </Chip>
        ))}
      </Card.Footer>
    </Card>
  );
}

export default ProjectCard;

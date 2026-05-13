import { Card, Chip } from '@heroui/react';

function SkillCard({ group }) {
  return (
    <Card className="skill-card">
      <Card.Header className="card-heading">
        <h3>{group.type}</h3>
      </Card.Header>
      <Card.Content className="skill-list">
        {group.skills.map((skill) => (
          <div className="skill-row" key={skill.name}>
            <span>{skill.name}</span>
            <div className="tags">
              <Chip className="tag" size="sm" variant="bordered">
                {skill.level}
              </Chip>
              {skill.favorite && (
                <Chip className="tag favorite" color="primary" size="sm" variant="bordered">
                  Favorite
                </Chip>
              )}
            </div>
          </div>
        ))}
      </Card.Content>
    </Card>
  );
}

export default SkillCard;

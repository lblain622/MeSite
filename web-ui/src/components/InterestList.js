import { Chip } from '@heroui/react';

function InterestList({ interests }) {
  return (
    <div className="interest-list">
      {interests.map((interest) => (
        <Chip className="interest-chip" key={interest} variant="bordered">
          {interest}
        </Chip>
      ))}
    </div>
  );
}

export default InterestList;

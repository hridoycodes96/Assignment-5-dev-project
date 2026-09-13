import { type Dispatch, type SetStateAction } from 'react';
import type { Iobject } from '../types/objectType';
import TechCard from './TechCard';

interface TechListProps{
    technologies : Iobject[];
    selectedStack: Iobject[];
    setSelectedStack:Dispatch<SetStateAction<Iobject[]>>;

}

const TechList = ({
  technologies,
  selectedStack,
  setSelectedStack,
}: TechListProps) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {technologies.map((tech) => (
          <TechCard
            key={tech.id}
            tech={tech}
            selectedStack={selectedStack}
            setSelectedStack={setSelectedStack}
          />
        ))}
      </div>
    </div>
  );
};

export default TechList;
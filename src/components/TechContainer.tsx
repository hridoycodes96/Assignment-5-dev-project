import React, { use, type Dispatch, type SetStateAction } from 'react';
import type { Iobject } from '../types/objectType';
import TechList from './TechList';


interface TechContainerProps {
    techPromise: Promise<Iobject[]>;
    selectedStack: Iobject[];
    setSelectedStack: Dispatch<SetStateAction<Iobject[]>>;
}
const TechContainer = ({
  techPromise,
  selectedStack,
  setSelectedStack,
}: TechContainerProps) => {
  const technologies = use(techPromise);

  return (
    <TechList
    
      technologies={technologies}
      selectedStack={selectedStack}
      setSelectedStack={setSelectedStack}
    />
  );
};

export default TechContainer;
import { useDroppable } from '@dnd-kit/core';
import { ReactNode } from 'react';

const DroppableBoard = ({ id, children } : {id: number, children: ReactNode}) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });



  return (
    <div ref={setNodeRef}>
      {children}
    </div>
  );
};

export default DroppableBoard;
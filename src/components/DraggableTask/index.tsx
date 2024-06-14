import { useDraggable } from '@dnd-kit/core';
import { ReactNode } from 'react';

const DraggableTask = ({ id, children } : {id: number, children: ReactNode}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = {
    transform: `translate3d(${transform?.x ?? 0}px, ${transform?.y ?? 0}px, 0)`,
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  );
};

export default DraggableTask;
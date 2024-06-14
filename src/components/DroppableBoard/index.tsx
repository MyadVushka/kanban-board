import { useDroppable } from '@dnd-kit/core';

const DroppableBoard = ({ id, children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  const style = {
    backgroundColor: isOver ? 'lightblue' : undefined,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
};

export default DroppableBoard;
import "./Main.css";
import Board from "../../components/Board";
import { BoardSettings, TaskSettings } from "../../types/general-types";
import {
  DndContext,
  DragEndEvent,
  DragStartEvent,
  MouseSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useDispatch, useSelector } from "react-redux";
import { moveTask, selectAll } from "../../store/features/taskSlice";
import { useState } from "react";
import { DragOverlay } from "@dnd-kit/core";
import Task from "../../components/Task";

const BOARD_SETTINGS: BoardSettings[] = [
  {
    id: 10,
    title: "To do",
    color: "rgb(225 191 23)",
    number: 1,
  },
  {
    id: 11,
    title: "In progress",
    color: "#bfd2e6",
    number: 2,
  },
  {
    id: 12,
    title: "Complete",
    color: "#a3d1be",
    number: 3,
  },
  {
    id: 13,
    title: "To refactor",
    color: "#b58c5d",
    number: 4,
  },
];

const Main = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectAll);
  const [activeTask, setActiveTask] = useState<null | TaskSettings>(null);

  const handleDragStart = (e: DragStartEvent) => {
    const { active } = e;
    const task = tasks.find((task: TaskSettings) => task.id === active.id);
    setActiveTask(task!);
  };

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    setActiveTask(null);

    if (over) {
      dispatch(moveTask({ id: active.id, toBoardId: over.id }));
    }
  };

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const sensors = useSensors(mouseSensor);

  return (
    <main className="wrapper-main">
      <DndContext
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
        sensors={sensors}
      >
        {BOARD_SETTINGS.map((el: BoardSettings) => (
          <Board
            key={el.id}
            id={el.id}
            title={el.title}
            color={el.color}
            number={el.number}
          />
        ))}
        <DragOverlay>
          {activeTask && (
            <Task
              type={activeTask.type}
              id={activeTask.id}
              title={activeTask.title}
              description={activeTask.description}
              priority={activeTask.priority}
            />
          )}
        </DragOverlay>
      </DndContext>
    </main>
  );
};

export default Main;

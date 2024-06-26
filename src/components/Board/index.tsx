import "./Board.css";
import ModalSettings from "../../layouts/ModalSettings";
import Task from "../Task";
import DraggableTask from "../DraggableTask";
import DroppableBoard from "../DroppableBoard";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectTodo,
  selectInProgress,
  selectComplete,
  selectToRefactor,
} from "../../store/features/taskSlice";
import { TaskSettings } from "../../types/general-types";
import { useAutoAnimate } from "@formkit/auto-animate/react";
const Board = ({
  title,
  color,
  number,
  id,
}: {
  title: string;
  color: string;
  number: number;
  id: number;
}) => {
  const [modalVisibility, setModalVisibility] = useState<boolean>(false);

  const todoTasks = useSelector(selectTodo);
  const inProgressTasks = useSelector(selectInProgress);
  const completeTasks = useSelector(selectComplete);
  const toRefactorTasks = useSelector(selectToRefactor);

  const handleAdd = () => {
    setModalVisibility(true);
  };

  const [parent] = useAutoAnimate();

  return (
    <DroppableBoard id={id}>
      <div className="wrapper-board">
        {modalVisibility && (
          <ModalSettings
            board_id={id}
            toChangeVis={() => setModalVisibility(false)}
          />
        )}
        <h2 className="title" style={{ color }}>
          {number} {title}
        </h2>
        <button onClick={handleAdd} className="board-button">
          Add card +
        </button>
        <ul className="tasks-list" ref={parent}>
          {title == "To do" &&
            todoTasks.map((task: TaskSettings) => (
              <DraggableTask key={task.id} id={task.id}>
                <Task
                  key={task.id}
                  type={task.type}
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  priority={task.priority}
                />
              </DraggableTask>
            ))}
          {title == "In progress" &&
            inProgressTasks.map((task: TaskSettings) => (
              <DraggableTask key={task.id} id={task.id}>
                <Task
                  key={task.id}
                  type={task.type}
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  priority={task.priority}
                />
              </DraggableTask>
            ))}
          {title == "Complete" &&
            completeTasks.map((task: TaskSettings) => (
              <DraggableTask key={task.id} id={task.id}>
                <Task
                  key={task.id}
                  type={task.type}
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  priority={task.priority}
                />
              </DraggableTask>
            ))}
          {title == "To refactor" &&
            toRefactorTasks.map((task: TaskSettings) => (
              <DraggableTask key={task.id} id={task.id}>
                <Task
                  key={task.id}
                  type={task.type}
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  priority={task.priority}
                />
              </DraggableTask>
            ))}
        </ul>
      </div>
    </DroppableBoard>
  );
};

export default Board;

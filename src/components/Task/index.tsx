import { TaskSettings } from "../../types/general-types";
import "./Task.css";
import { useDispatch } from "react-redux";
import {
  removeTodo,
  removeInProgress,
  removeComplete,
  removeToRefactor,
} from "../../store/features/taskSlice";

const Task = (props: TaskSettings) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    switch (props.type) {
      case "todo":
        dispatch(removeTodo(props.id));
        break;
      case "inProgress":
        dispatch(removeInProgress(props.id));
        break;
      case "complete":
        dispatch(removeComplete(props.id));
        break;
      case "toRefactor":
        dispatch(removeToRefactor(props.id));
        break;
      default:
        break;
    }
  };

  return (
    <div className={"wrapper-task " + props.type}>
      <h2 className="task-text task-title">{props.title}</h2>
      <p className="task-text description">{props.description}</p>
      <p className="task-text priority">Priority: {props.priority}</p>
      <button onClick={handleDelete} className="task-delete">
        Delete
      </button>
    </div>
  );
};

export default Task;

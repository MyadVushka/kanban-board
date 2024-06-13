import "./ModalSettings.css";
import { RefObject, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  addTodo,
  addInProgress,
  addComplete,
  addToRefactor,
} from "../../store/features/taskSlice";

const ModalSettings = ({
  toChangeVis,
  board_id,
}: {
  toChangeVis: () => void;
  board_id: number;
}) => {
  const titleValidator: RefObject<HTMLInputElement> = useRef(null);
  const describeValidator: RefObject<HTMLTextAreaElement> = useRef(null);
  const priorityValidator: RefObject<HTMLInputElement> = useRef(null);

  const dispatch = useDispatch();

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();

    let flag: boolean = true;

    if (!titleValidator.current?.value.length) {
      flag = false;
      titleValidator.current!.style.borderColor = "red";
      setTimeout(() => {
        titleValidator.current!.style.borderColor = "grey";
      }, 1500);
    }

    if (!describeValidator.current?.value.length) {
      flag = false;
      describeValidator.current!.style.borderColor = "red";
      setTimeout(() => {
        describeValidator.current!.style.borderColor = "grey";
      }, 1500);
    }

    if (!priorityValidator.current?.value.length) {
      flag = false;
      priorityValidator.current!.style.borderColor = "red";
      setTimeout(() => {
        priorityValidator.current!.style.borderColor = "grey";
      }, 1500);
    }

    if (flag) {
      switch (board_id) {
        case 10:
          dispatch(
            addTodo({
              id: Date.now(),
              type: "todo",
              title: titleValidator.current?.value,
              description: describeValidator.current?.value,
              priority: priorityValidator.current?.value,
            })
          );
          break;
        case 11:
          dispatch(
            addInProgress({
              id: Date.now(),
              type: "inProgress",
              title: titleValidator.current?.value,
              description: describeValidator.current?.value,
              priority: priorityValidator.current?.value,
            })
          );
          break;
        case 12:
          dispatch(
            addComplete({
              id: Date.now(),
              type: "complete",
              title: titleValidator.current?.value,
              description: describeValidator.current?.value,
              priority: priorityValidator.current?.value,
            })
          );
          break;
        case 13:
          dispatch(
            addToRefactor({
              id: Date.now(),
              type: "toRefactor",
              title: titleValidator.current?.value,
              description: describeValidator.current?.value,
              priority: priorityValidator.current?.value,
            })
          );
          break;
        default:
          break;
      }
      titleValidator.current!.value = "";
      describeValidator.current!.value = "";
      priorityValidator.current!.value = "";
    }
  };

  const handleClose = () => {
    toChangeVis();
  }

  return (
    <div className="wrapper-modal">
      <div className="wrapper-modal__inner">
        <button onClick={handleClose} className="close-button">
          X
        </button>
        <form action="" className="wrapper-modal__form">
          <div className="wrapper-modal__form-block">
            <p>Task title:</p>
            <input
              ref={titleValidator}
              className="wrapper-modal__form_input"
              type="text"
              placeholder="Task name"
            />
          </div>
          <div className="wrapper-modal__form-block">
            <p>Task describe:</p>
            <textarea
              ref={describeValidator}
              className="wrapper-modal__form_input task-describing"
            />
          </div>
          <div className="wrapper-modal__form-block">
            <p>Task priority (1 - lowest, 5 - highest):</p>
            <input
              ref={priorityValidator}
              className="wrapper-modal__form_input"
              type="number"
            />
          </div>
          <button
            onClick={handleConfirm}
            type="submit"
            className="wrapper-modal__form-confirm"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalSettings;

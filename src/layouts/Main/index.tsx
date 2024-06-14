import "./Main.css";
import Board from "../../components/Board";
import { BoardSettings } from "../../types/general-types";
import { DndContext } from "@dnd-kit/core";
import { useDispatch } from "react-redux";
import { moveTask } from "../../store/features/taskSlice";

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

  const handleDragEnd = (e) => {
    const { active, over } = e;

    if (over) {
      dispatch(moveTask({ id: active.id, toBoardId: over.id }));
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <main className="wrapper-main">
        {BOARD_SETTINGS.map((el: BoardSettings) => (
          <Board
            key={el.id}
            id={el.id}
            title={el.title}
            color={el.color}
            number={el.number}
          />
        ))}
      </main>
    </DndContext>
  );
};

export default Main;

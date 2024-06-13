import "./Main.css";
import Board from "../../components/Board";
import { BoardSettings } from "../../types/board_settings";

const BOARD_SETTINGS: BoardSettings[] = [
  {
    title: "To do",
    color: "#c1be90",
    number: 1,
  },
  {
    title: "In progress",
    color: "#bfd2e6",
    number: 2,
  },
  {
    title: "Complete",
    color: "#a3d1be",
    number: 3,
  },
  {
    title: "To refactor",
    color: "#b58c5d",
    number: 4,
  },
];

const Main = () => {
  return (
    <main className="wrapper-main">
      {BOARD_SETTINGS.map((el: BoardSettings) => (
        <Board key={el.number} title={el.title} color={el.color} number={el.number} />
      ))}
    </main>
  );
};

export default Main;

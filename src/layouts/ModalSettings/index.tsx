import "./ModalSettings.css";

const ModalSettings = ({ toChangeVis }: { toChangeVis: () => void }) => {
  return (
    <div className="wrapper-modal">
      <div className="wrapper-modal__inner">
        <button onClick={toChangeVis} className="close-button">
          X
        </button>
        <form action="" className="wrapper-modal__form">
          <div className="wrapper-modal__form-block">
            <p>Task title</p>
            <input
              className="wrapper-modal__form_input"
              type="text"
              placeholder="Task name"
            />
          </div>
          <div className="wrapper-modal__form-block">
            <p>Task priority</p>
            <input className="wrapper-modal__form_input" type="number" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalSettings;

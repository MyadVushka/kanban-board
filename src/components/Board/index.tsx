import './Board.css'
import ModalSettings from '../../layouts/ModalSettings';
import { useState } from 'react';
const Board = ({title, color, number}: {title: string, color: string, number: number}) => {

    const [modalVisibility, setModalVisibility] = useState<boolean>(false);
    const handleAdd = () => {
        setModalVisibility(true);
    }

    return (
        <div className="wrapper-board">
            {modalVisibility && <ModalSettings toChangeVis={() => setModalVisibility(false)} />}
            <h2 className='title' style={{color}}>{number} {title}</h2>
            <button onClick={handleAdd} className='board-button'>Add card +</button>
        </div>
    )
}

export default Board;
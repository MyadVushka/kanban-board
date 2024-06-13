import './Header.css'

const Header = () => {
    return (
        <header className='wrapper-header'>
            <div className="wrapper-balls">
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
            </div>
            <h1>Kanban board</h1>
        </header>
    )
}

export default Header;
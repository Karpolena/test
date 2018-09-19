import React from "react";

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <a className="logo" href="">
                    <img className="logo-img" src="https://www.gstatic.com/images/branding/product/2x/drive_48dp.png" />
                    <span className="logo-text">Диск</span>
                </a>
                <form className="search">
                    <button className="search-btn zoom">
                        <i className="icon fas fa-search"></i>
                    </button>
                    <input 
                        className="search-input"
                        type="text"
                        placeholder="Поиск на Диске"
                    />
                    <button className="search-btn triangle" type="submit">
                        <i className="icon fas fa-caret-down"></i>
                    </button>
                </form>
            </div>
            <nav>
                <ul className="nav-tools">
                    <li title="Справка">
                        <button className="nav-tools__btn">
                            <i className="icon far fa-question-circle"></i>
                        </button>
                    </li>
                    <li title="Настройки">
                        <button className="nav-tools__btn">
                            <i className="icon fas fa-cog"></i>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
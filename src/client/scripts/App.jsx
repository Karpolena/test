import React, { Component } from "react";

import Header from "./containers/header/Header";
import MainMenu from "./containers/menu/Menu";
import Content from "./containers/content/Content";
import Modal from "./containers/modal/Modal";
import Popup from "./containers/popup/Popup";
class App extends Component {
    render() {
        return (
            <main className="main">
                <Header />
                <div className="main-container">
                    <MainMenu />
                    <Content />
                </div>
                <Modal />
                <Popup />
            </main>
        );
    }
}

export default App;

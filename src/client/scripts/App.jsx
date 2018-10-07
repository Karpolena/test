import React, { Component } from "react";

import Header from "./containers/header/Header";
import MainMenu from "./containers/menu/Menu";
import Content from "./containers/content/Content";


class App extends Component {
    render () {
        return (
            <main className="main">
                <Header />
                <div className="main-container">
                    <MainMenu />
                    <Content />
                </div>
            </main>
        );
    }
}


export default App;
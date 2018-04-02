// App.js

import React, { Component } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';

class App extends Component {

    render() {
        return (
            <div>
                <Header />
                <SideBar />
            </div>
        );
    }
}

export default App;
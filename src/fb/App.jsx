import React, { Component } from 'react';
import RedirectURL from './RedirectURL';
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <RedirectURL/>
                </div> 
            </Router>
        );
    }
}

export default App;
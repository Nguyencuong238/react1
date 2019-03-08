import React, { Component } from 'react';
import RedirectURL from './redirect/RedirectURL.jsx';
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {

    render() {
        return (
            <Router>
                <div className="container">
                    <RedirectURL />
                </div>
            </Router>
        );
    }
}
export default App;


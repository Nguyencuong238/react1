import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Signin from './Signin';
import TaskDetail from './TaskDetail';


class RedirectURL extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Signin" component={Signin} />
                <Route exact path="/detail/:id.:slug.html" component={TaskDetail} />
            </div>
        );
    }
}

export default RedirectURL;
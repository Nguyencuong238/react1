import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <ul className="nav navbar-nav">
                    <li>
                        <NavLink exact activeClassName="doimau" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="doimau" to="/TinTuc">Tin tuc</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="doimau" to="/LienHe">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
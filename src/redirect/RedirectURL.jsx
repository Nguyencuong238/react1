import React, { Component } from 'react';
import { Route } from "react-router-dom";
import TinTuc from './../components/TinTuc.jsx';
import Contact from './../components/Contact.jsx';
import Home from './../components/Home.jsx';
import TinChiTiet from '../components/TinChiTiet.jsx';

class RedirectURL extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/TinTuc" component={TinTuc} />
                <Route exact path="/LienHe" component={Contact} />
                <Route exact path="/ChiTietTin/:id.:slug.html" component={TinChiTiet} />
            </div>
        );
    }
}

export default RedirectURL;
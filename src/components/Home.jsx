import React, { Component } from 'react';
import Nav from './Nav.jsx';

class Home extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div>
                    <img className="img-responsive" src="./img/thien-nhien.jpg" alt="" />
                </div>
            </div>
        );
    }
}

export default Home;
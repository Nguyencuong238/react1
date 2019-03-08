import React, { Component } from 'react';
import Controller from './Controller.jsx';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        return (
            <div>
                <Controller />
                <div>{this.props.myValue}</div>
            </div>
        );
    }
}
let abc = (x) => ({myValue: x.value + x.text});

export default connect(abc)(App);
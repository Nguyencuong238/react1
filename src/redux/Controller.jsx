import React, { Component } from 'react';
import { connect } from 'react-redux';

class Controller extends Component {
    changeUp (){
        this.props.dispatch({type: "UP"});
    }
    changeDown(){
        this.props.dispatch({type: "DOWN"})
    }
    render() {
        
        return (
            <div>
                <button onClick={()=>this.changeUp()}>+</button>
                <button onClick={this.changeDown.bind(this)}>-</button>
            </div>
        );
    }
}

export default connect()(Controller);
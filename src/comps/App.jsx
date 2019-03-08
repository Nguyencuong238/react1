import React, { Component } from 'react';
import {connect} from 'react-redux';
import Content from './App.jsx';
class App extends Component {
    render() {
        return (
            <div>
                {this.props.myWords.map((value,key)=>(
                    <Content key={key} words={value.en}/>
                ))}
            </div>
        );
    }
}
let mapStateToProps = (state)=>({myWords: state.arrs});

export default connect(mapStateToProps)(App);
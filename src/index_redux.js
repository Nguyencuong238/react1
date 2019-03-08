import React from 'react';
import ReactDOM from 'react-dom';
import App from './redux/App.jsx';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

const dState = {value: 12, text: "abc"};

const MyReducer = (state = dState, action)=>{
    if(action.type === "UP") return {value: state.value + 1, text: "da up"}
    if(action.type === "DOWN") return {value: state.value - 1, text: "down"}
    return dState;
}

const store = createStore(MyReducer);




ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
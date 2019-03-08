import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            error: ''
        }
    }
    onChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    submitForm = (event)=>{
        axios.get("http://localhost/react/my-app/src/fb/api/Login.php", {
            params: this.state
        }) 
      	.then(response => {
        	this.setState({
                status: response.data.status,
                error: response.data.error,
                name: response.data.name,
                iduser : response.data.iduser
            })
      	})
		.catch(err => console.log(err));
    }
    
    render() {
        if(this.state.status) return <Redirect to={{
            pathname: '/',
            state: { iduser: this.state.iduser }
        }} />
           
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <ul className="nav navbar-nav">
                        <li>
                            <NavLink to="/Login">Log In</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Signin">Sign In</NavLink>
                        </li>
                    </ul>
                </nav>
                <div>
                    
                    <label>User Name</label>
                    <input type="text" id="lname" onChange={this.onChange.bind(this)} name="username" placeholder="User name.." />
                    
                    <label>Password</label>
                    <input type="password" id="password" onChange={this.onChange.bind(this)} name="password" placeholder="*************" />

                    <button onClick={this.submitForm.bind(this)} name="submit">Submit</button>

                    <div className="text-danger">{this.state.error}</div>
                </div>
            </div>
        );
    }
}

export default Login;
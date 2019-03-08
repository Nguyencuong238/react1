import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Signin extends Component {
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
        axios.get("http://localhost/react/my-app/src/fb/api/Signin.php", {
            params: this.state
        }) 
      	.then(response => {
        	this.setState({
                status: response.data.status,
                error: response.data.error
            })
      	})
		.catch(err => console.log(err));
    }
    render() {
        if(this.state.status) return <Redirect to="/Login"/>
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
                    <div>
                        <label>Full Name</label>
                        <input type="text" onChange={this.onChange.bind()} name="fullname" placeholder="your name.."/>
                        
                        <label>User Name</label>
                        <input type="text" onChange={this.onChange.bind()} name="username" placeholder="User name.." />
                        
                        <label>Password</label>
                        <input type="password" onChange={this.onChange.bind()} name="password" placeholder="*************" />
                        
                        <label>Re_Password</label>
                        <input type="password" onChange={this.onChange.bind()} name="re_password" placeholder="*************" />

                        <button onClick={this.submitForm.bind(this)} name="submit">Submit</button>

                        <div className="text-danger">{this.state.error}</div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Signin;
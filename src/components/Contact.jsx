import React, { Component } from 'react';
import Nav from './Nav';
import {Redirect} from 'react-router-dom';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false
        }
    }
    changeValue = (event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    submitForm = (event)=>{
        event.preventDefault();
        this.setState(
            {isRedirect : true}
        )

    }
    
    
    render() {
        if(this.state.isRedirect) return <Redirect to="/" />
        return (
            <div>
                <Nav />
                <h1>Thong tin lien he</h1>
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <td>Name:</td>
                                <td><input onChange={(event)=>this.changeValue(event)} type="text" name="fName" /></td>
                            </tr>
                            <tr>
                                <td>Phone:</td>
                                <td><input type="text" name="phone" /></td>
                            </tr>
                            <tr>
                                <td />
                                <td><button type="submit" onClick={(event)=>this.submitForm(event)} className="btn btn-warning">Send</button></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}

export default Contact;
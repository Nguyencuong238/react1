import React, { Component } from 'react';
import { NavLink, Redirect } from "react-router-dom";
import axios from 'axios';
import ItemTask from './ItemTask.jsx';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount(){
        
        axios.get("http://localhost/react/my-app/src/fb/api/getData.php",
        {
            params: {id_user: this.props.location.state.iduser, action_name: 'view'}
        })
        .then(response =>{
            this.setState({
                data: response.data.datas,
                login_er : response.data.login_er.name_user
            })
        })
        .catch(err=>console.log('err'))
        }

    render() {
        
        return (

            <div>
                <div id="admin">
                    <h1>BNC Hà Nội</h1>
                    <span>Xin chào {this.state.login_er}</span>
                </div>
                <nav className="navbar navbar-inverse">
                    <ul className="nav navbar-nav">
                        <li>
                            <NavLink exact to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Login">Log Out</NavLink>
                        </li>
                        
                    </ul>
                </nav>

                <div className="task">

                    <h2>Danh sách yêu cầu</h2>
                    <table>
                        <tbody>
                            <tr>
                                <th>Người gửi</th>
                                <th>Tiêu đề</th>
                                <th>Ngày gửi</th>
                            </tr>
                            {this.state.data ? (this.state.data.map((value,key) => <ItemTask key={key} id_task={value.id_task} user_send={value.user_send} title={value.title} date={value.start_date}/>)) : null}
                        </tbody>
                    </table>
                
                </div>
            </div>
        )
        
    }
}

export default Home;
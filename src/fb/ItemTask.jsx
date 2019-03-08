import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ItemTask extends Component {
	changeURL = (str) => {
        str = str.toLowerCase();
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');

        str = str.replace(/([^0-9a-z-\s])/g, '');

        str = str.replace(/(\s+)/g, '-');

        str = str.replace(/^-+/g, '');

        str = str.replace(/-+$/g, '');

        return str;
    }
	render() {
		return (
			<tr>
				<td><Link to={"/detail/" + this.props.id_task + "." + this.changeURL(this.props.title) + ".html"}>{this.props.user_send}</Link></td>
				<td><Link to={"/detail/" + this.props.id_task + "." + this.changeURL(this.props.title) + ".html"}>{this.props.title}</Link></td>
				<td><Link to={"/detail/" + this.props.id_task + "."+this.changeURL(this.props.title) + ".html"}>{this.props.date}</Link></td>
			</tr>
		);
	}
}
export default ItemTask;
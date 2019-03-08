import React, { Component } from 'react';

import { Link } from "react-router-dom";

class Item extends Component {
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
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 align-center">
                <img className="img-responsive" src={this.props.anh} alt="" />
                <h3><Link to={"/ChiTietTin/" + this.props.id + "." + this.changeURL(this.props.tieuDe) + ".html"}>{this.props.tieuDe}</Link></h3>
                <p>{this.props.trichDan}</p>
            </div>
        );
    }
}

export default Item;
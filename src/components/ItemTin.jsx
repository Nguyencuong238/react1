import React, { Component } from 'react';

class ItemTin extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.tieuDe}</h2>
                <img src={this.props.anh} alt="" />
                <div dangerouslySetInnerHTML={{__html: this.props.noiDung}} />
            </div>
        );
    }
}

export default ItemTin;
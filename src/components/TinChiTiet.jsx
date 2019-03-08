import React, { Component } from 'react';
import Nav from './Nav.jsx';
import ItemTin from './ItemTin.jsx';
import data from './../data/data.json';

class TinChiTiet extends Component {
    render() {
        return (
            <div>
                <div>
                    <Nav />
                </div>
                {data.map((value, key) => {
                    if (parseInt(value.id) === parseInt(this.props.match.params.id)) {
                        return (<ItemTin key={key} tieuDe={value.tieuDe} noiDung={value.noiDung} anh={value.anh} />)
                    }else return "";
                })}
            </div>

        );
    }
}

export default TinChiTiet;
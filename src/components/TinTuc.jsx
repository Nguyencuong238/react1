import React, { Component } from 'react';
import Nav from './Nav.jsx';
import Item from './Item.jsx';
import data from './../data/data.json';

class TinTuc extends Component {

    render() {

        return (
            <div>
                <Nav />
                <div className="content">
                    {data.map((value, key) => <Item key={key} id={value.id} tieuDe={value.tieuDe} anh={value.anh} trichDan={value.trichDan} />)}
                </div>

            </div>
        )
    }
}

export default TinTuc;
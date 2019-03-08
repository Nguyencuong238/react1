import React, { Component } from 'react';
import {connect} from 'react-redux';

class Content extends Component {
    render() {
        return (
            <div>
                {this.props.words}
            </div>
        );
    }
}

export default connect()(Content);
import React, { Component } from 'react';

 class TaskDetail extends Component {

	render() {
		return (
			<div>
				{this.props.match.params.id}
			</div>
		);
	}
}
export default TaskDetail;
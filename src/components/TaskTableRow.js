'use strict';

var React = require('react/addons');
var Duration = require('duration-js');

var CELL_STYLE = {
	border: 'black solid 1px',
	padding: '5px',
};

var TaskTableRow = React.createClass({
	propTypes: {
		task: React.PropTypes.object.isRequired,
		clockInFunc: React.PropTypes.func.isRequired,
	},

	render: function() {
		var task = this.props.task;
		var timeThisWeek = task.timeThisWeek;
		timeThisWeek -= timeThisWeek % 1000;

		var clockInButton = (
			<button
				onClick={() => this.props.clockInFunc(task.name)}>
				Clock in
			</button>
		);

		var clockInCell = !this.props.clockedIn ?
			<td
				style={CELL_STYLE}>
				{clockInButton}
			</td> :
			null;

		return (
			<tr>
				<td
					style={CELL_STYLE}>
					{task.name}
				</td>
				<td
					style={CELL_STYLE}>
					{new Duration(timeThisWeek).toString()}
				</td>
				<td
					style={CELL_STYLE}>
					{task.hoursPerWeek}h
				</td>
				{clockInCell}
			</tr>
		);
	}
});

module.exports = TaskTableRow;

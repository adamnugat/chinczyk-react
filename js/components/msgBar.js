import React from 'react';

import { connect } from 'react-redux'

import { setMessage } from '../actions/messageActions'

@connect((store) => {
	return {
		message: store.message.message
	}
})

export class MsgBar extends React.Component {
	constructor() {
		super();
	}

	displayOrNot() {
		if (this.props.message.show) {
			return {display: 'block'};
		}

		return {display: 'none'};
	}

	render() {
		return (
			<div className={this.props.classNames} style={this.displayOrNot()}>{this.props.message.text}</div>
		)
	}
}

MsgBar.defaultProps = {
	classNames: 'infoMsg'
};

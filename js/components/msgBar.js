import React from 'react';

export class MsgBar extends React.Component {
	constructor() {
		super();

	}

	displayOrNot() {
		if (this.props.show) {
			return {display: 'block'};
		}

		return {display: 'none'};
	}

	render() {
		return (
			<div className={this.props.classNames} style={this.displayOrNot()}>{this.props.error}</div>
		)
	}
}

MsgBar.defaultProps = {
	classNames: 'infoMsg'
};

import React from 'react';

export class StartBtn extends React.Component {
	constructor() {
		super();
	}

	clicked(event) {
		if (this.props.settings.playersCount == 0) {
			this.props.updateMessage('musisz wybrać przynajmniej 2 graczy');
		}
	}

	render() {
		return (
			<div className="actionBtn btnStart" onClick={(e)=>this.clicked(e)}>START</div>
		)
	}
}
import React from 'react';

export class StartBtn extends React.Component {
	constructor() {
		super();
	}

	clicked(event) {
		if (this.props.settings.playersCount < 2) {
			this.props.updateMessage('musisz wybrać przynajmniej 2 graczy', true);

			return;
		}

		this.props.updateMessage('', false);

		this.props.startGame();
	}

	render() {
		return (
			<div className="actionBtn btnStart" onClick={(e)=>this.clicked(e)}>START</div>
		)
	}
}
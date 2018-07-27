import React from 'react';

import { connect } from 'react-redux'

import { startGame } from '../actions/gameActions'

@connect((store) => {
	return {
		game: store.game.game
	}
})

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

		this.props.dispatch(startGame());
	}

	render() {
		console.log(this.props);

		return (
			<div className="actionBtn btnStart" onClick={(e)=>this.clicked(e)}>START</div>
		)
	}
}
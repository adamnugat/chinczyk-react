import React from 'react';

import { connect } from 'react-redux'

import { startGame } from '../actions/gameActions'
import { setMessage } from '../actions/messageActions'

@connect((store) => {
	return {
		game: store.game.game,
		message: store.message.message,
		countPlayers: store.player.countPlayers,
	}
})

export class StartBtn extends React.Component {
	constructor() {
		super();
	}

	clicked(event) {
		if (this.props.game.started) {
			this.props.dispatch(setMessage('gra już została rozpoczęta!', 'green'));

			return;
		}

		if (this.props.countPlayers < 2) {
			console.log(this.props.countPlayers);

			this.props.dispatch(setMessage('musisz wybrać przynajmniej 2 graczy'));

			return;
		}
		this.props.dispatch(setMessage(''));

		this.props.dispatch(startGame());
	}

	render() {
		console.log(this.props);

		return (
			<div className="actionBtn btnStart" onClick={(e)=>this.clicked(e)}>START</div>
		)
	}
}
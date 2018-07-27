import React from 'react';

import { connect } from 'react-redux'

import { startGame } from '../actions/gameActions'
import { setMessage } from '../actions/messageActions'

@connect((store) => {
	return {
		game: store.game.game,
		message: store.message.message
	}
})

export class StartBtn extends React.Component {
	constructor() {
		super();
	}

	clicked(event) {
		if (this.props.settings.playersCount < 2) {
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
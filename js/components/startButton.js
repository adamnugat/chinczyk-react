import React from 'react';

import { connect } from 'react-redux'

import { startGame, activateDice } from '../actions/gameActions'
import { selectFirstPlayer } from '../actions/playerActions'
import { setMessage, destroyMessage } from '../actions/messageActions'


@connect((store) => {
	return {
		game: store.game.game,
		message: store.message.message,
		countPlayers: store.player.countPlayers,
		activePlayer: store.player.activePlayer,
	}
})

export class StartBtn extends React.Component {
	constructor() {
		super();
	}

	/**
	 * obsługa kliknięcia w przycisk rozpoczęcia gry
	 * po rozpoczęciu gry przycisk pełni funkcję przejscia do następnego gracza
	 * @param  {event}
	 * @return {undefined}
	 */
	clicked(event) {
		if (this.props.countPlayers < 2) {
			this.props.dispatch(setMessage('musisz wybrać przynajmniej 2 graczy'));

			return;
		}

		this.startGame();
	}

	/**
	 * rozpoczęcie gry
	 * @return {undefined}
	 */
	startGame() {
		let startPromise = () => {
			return new Promise((resolve, reject) => {
				this.props.dispatch(startGame());
				this.props.dispatch(setMessage('gra została rozpoczęta', 'green'));

				resolve (true);
			})
		}
		 
		startPromise()
		.then((response) => { 
			return new Promise((resolve, reject) => {
				setTimeout(() => { 
					this.props.dispatch(destroyMessage());

					resolve (true);
				}, 1000);
			}) 
		})
		.then((response) => { 
			return new Promise((resolve, reject) => {
				this.props.dispatch(selectFirstPlayer());
				this.props.dispatch(activateDice());
				this.props.dispatch(setMessage('kolej na gracza ' + this.props.activePlayer, this.props.activePlayer));

				resolve (true);
			}) 
		})
		.catch(error => console.log(error.message));
	}


	render() {
		if (this.props.game.hideStartButton) {
			return null;
		}

		return (
			<div className="actionBtn btnStart" onClick={(e)=>this.clicked(e)}>START</div>
		)
	}
}
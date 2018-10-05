import React from 'react';

import { connect } from 'react-redux'

import { removePlayer } from '../actions/playerActions'

@connect((store) => {
	return {
		players: store.player.players,
		playersObj: store.player.playersObj,
		countPlayers: store.player.countPlayers,
		activePlayer: store.player.activePlayer,
		gameStarted: store.game.game.started,
		diceResult: store.game.dice.result,
	}
})

export class PlayersArea extends React.Component {
	constructor() {
		super();
	}

	/**
	 * klikniecie w jakis element na przestrzeni gracza
	 * @param  {object} event - zdarzenie kliknięcia
	 * @return {undefined}
	 */
	clicked(event) {
		if (event.target.dataset.remove) {
			const player = event.target.dataset.remove;

			if (this.props.gameStarted) {
				return false;
			}

			this.clickedRemovePlayer(player);
		}
	}

	/**
	 * klikniety konkretnie 'x' na przestrzeni gracza, powoduje to usunięcie gracza z kolejki przed rozpoczeciem gry
	 * @param  {string} player - kolor gracza ktory zostanie usunięty z kolejki
	 * @return {undefined}
	 */
	clickedRemovePlayer(player) {
		const playerId = this.props.players.indexOf(player);

		const newPlayers = [...this.props.players.slice(0,playerId), ...this.props.players.slice(playerId+1)];

		const newPlayersObj = [...this.props.playersObj.slice(0,playerId), ...this.props.playersObj.slice(playerId+1)];

		this.props.dispatch(removePlayer(newPlayers, newPlayersObj));
	}

	/**
	 * renderowanie pionków gracza w obrębie obszaru gracza
	 * @param  {object} player obiekt poszczególnego gracza
	 * @return {string} zwraca html
	 */
	renderFigures(player) {
		const figuresArray = new Array(player.sleepingFigures).fill(0);

	    return figuresArray.map((nothing, i) => {
			return (<div className="figure" player={player.color} figure={i + 1}></div>);
		});
	}

	/**
	 * renderowanie tablicy z graczami wybranymi do gry, wywietla przestrzeń graczy
	 * @param  {array} players - tablica z obiektami poszczegolnych graczy wybranych do gry
	 * @return {string} - kod html z przestrzeniami graczy
	 */
	renderPlayers(playersObj) {
	    return playersObj.map((player, i) => {
	    	let active = '';

			if (this.props.activePlayer === player.color) {
				active = 'active';
			}

	        return (
				<div order={i + 1} className={'playerFigures ' + player.color + ' ' + active} onClick={(e)=>this.clicked(e)}>
					<span className="close fa fa-times" data-remove={player.color}></span>

					{ this.renderFigures(player) }
				</div>
	        );
	    });
	}

	render() {
		console.log('qqq');
		return (
			<div className="figuresContainer">{ this.renderPlayers(this.props.playersObj) }</div>
		)
	}
}

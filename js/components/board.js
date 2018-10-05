import React from 'react';
import { Dice } from './dice'

import { connect } from 'react-redux'

import { addPlayer } from '../actions/playerActions'

@connect((store) => {
	return {
		players: store.player.players,
		playersObj: store.player.playersObj,
		countPlayers: store.player.countPlayers,
		game: store.game.game
	}
})

export class Board extends React.Component {
	constructor() {
		super();
	}

	/**
	 * klikniecie w element na planszy
	 * @param  {object} event - zdarzenie klikniecia
	 * @return {undefined}
	 */
	clicked(event) {
		const playersFields = ['blue', 'red', 'green', 'yellow'],
			target = event.target.dataset.start;

		if (playersFields.indexOf(target) === -1) {
			return false;
		}

		if (this.props.game.started) {
			return false;
		}

		this.clickedAddPlayer(target);
	}

	/**
	 * klikniecie konkretnie na pole startowe gracza co oznacza ze:
	 * wybranie gracza do gry
	 * @param  {string} player - kolor kliknietego gracza
	 * @return {undefined}
	 */
	clickedAddPlayer(player) {
		if (this.props.players.indexOf(player) > -1) {
			return false;
		}

		const newPlayers = [...this.props.players, player];

		const newPlayersObj = [...this.props.playersObj, { color: player, sleepingFigures: 4 }];

		this.props.dispatch(addPlayer(newPlayers, newPlayersObj));
	}

	render() {
		return (
			<div className="fieldsArea" onClick={(e)=>this.clicked(e)}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div className="field" field-number="9"></div>
				<div className="field" field-number="10"></div>
				<div className="field" field-number="11" data-start="blue"><div className="figure"></div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div className="field" field-number="8"></div>
				<div className="field" home="blue" home-number="1"></div>
				<div className="field" field-number="12"></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div className="field" field-number="7"></div>
				<div className="field" home="blue" home-number="2"></div>
				<div className="field" field-number="13"></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div className="field" field-number="6"></div>
				<div className="field" home="blue" home-number="3"></div>
				<div className="field" field-number="14"></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div className="field" field-number="1" data-start="red"></div>
				<div className="field" field-number="2"></div>
				<div className="field" field-number="3"></div>
				<div className="field" field-number="4"></div>
				<div className="field" field-number="5"></div>
				<div className="field" home="blue" home-number="4"></div>
				<div className="field" field-number="15"></div>
				<div className="field" field-number="16"></div>
				<div className="field" field-number="17"></div>
				<div className="field" field-number="18"></div>
				<div className="field" field-number="19"></div>
				<div className="field" field-number="40"></div>
				<div className="field" home="red" home-number="1"></div>
				<div className="field" home="red" home-number="2"></div>
				<div className="field" home="red" home-number="3"></div>
				<div className="field" home="red" home-number="4"></div>

				<Dice />

				<div className="field" home="green" home-number="4"></div>
				<div className="field" home="green" home-number="3"></div>
				<div className="field" home="green" home-number="2"></div>
				<div className="field" home="green" home-number="1"></div>
				<div className="field" field-number="20"></div>
				<div className="field" field-number="39"></div>
				<div className="field" field-number="38"></div>
				<div className="field" field-number="37"></div>
				<div className="field" field-number="36"></div>
				<div className="field" field-number="35"></div>
				<div className="field" home="yellow" home-number="4"></div>
				<div className="field" field-number="25"></div>
				<div className="field" field-number="24"></div>
				<div className="field" field-number="23"></div>
				<div className="field" field-number="22"></div>
				<div className="field" field-number="21" data-start="green"></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div className="field" field-number="34"></div>
				<div className="field" home="yellow" home-number="3"></div>
				<div className="field" field-number="26"></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div className="field" field-number="33"></div>
				<div className="field" home="yellow" home-number="2"></div>
				<div className="field" field-number="27"></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div className="field" field-number="32"></div>
				<div className="field" home="yellow" home-number="1"></div>
				<div className="field" field-number="28"></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div className="field" field-number="31" data-start="yellow"></div>
				<div className="field" field-number="30"></div>
				<div className="field" field-number="29"></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		)
	}
}

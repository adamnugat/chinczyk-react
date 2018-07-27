import React from 'react';

import { connect } from 'react-redux'

import { removePlayer } from '../actions/playerActions'

@connect((store) => {
	return {
		players: store.player.players,
		countPlayers: store.player.countPlayers
	}
})

export class PlayersArea extends React.Component {
	constructor() {
		super();
	}

	clicked(event) {
		if (event.target.dataset.remove) {
			const player = event.target.dataset.remove;

			this.clickedRemovePlayer(player);
		}
	}

	clickedRemovePlayer(player) {
		const playerId = this.props.players.indexOf(player);

		let newPlayers = [...this.props.players.slice(0,playerId), ...this.props.players.slice(playerId+1)];

		this.props.dispatch(removePlayer(newPlayers));
	}

	renderPlayers(players) {
	    return players.map((player, i) => {
	        return (
				<div order={i + 1} className={'playerFigures ' + player} onClick={(e)=>this.clicked(e)}>
					<span className="close fa fa-times" data-remove={player}></span>

					<div className="figure" player={player} figure="1"></div>
					<div className="figure" player={player} figure="2"></div>
					<div className="figure" player={player} figure="3"></div>
					<div className="figure" player={player} figure="4"></div>
				</div>
	        );
	    });
	}

	render() {
		return (
			<div className="figuresContainer">{ this.renderPlayers(this.props.players) }</div>
		)
	}
}

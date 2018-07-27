import React from 'react'
import { StartBtn } from './startButton'
import { Board } from './board'
import { MsgBar } from './msgBar'
import { PlayersArea } from './players'

import { connect } from 'react-redux'

import { fetchUser } from '../actions/userActions'

@connect((store) => {
	return {
		user: store.user.user,
	}
})
export class Chinczyk extends React.Component {
	constructor() {
		super();

		this.state = {
			gameStarted: false,
			msg: {
				error: '',
				show: false
			},
			players: []
		};

		this.settings = {
			playersCount: 0
		}
	}

	updateMessage(error, show) {
		this.setState({msg: {error: error, show: true}});
	}

	addPlayer(player) {
		if (this.state.players.indexOf(player) > -1) {
			return false;
		}

		this.settings.playersCount++;

		this.setState({players: [...this.state.players, player]});
	}

	removePlayer(player) {
		const playerId = this.state.players.indexOf(player);

		this.settings.playersCount--;

		this.setState((prevState) => ({
			players: [...prevState.players.slice(0,playerId), ...prevState.players.slice(playerId+1)]
		}))
	}

	componentWillMount() {
		this.props.dispatch(fetchUser());
	}

	render() {
		return (
			<div>
				<div className="infoArea">
					<StartBtn settings={this.settings} updateMessage={this.updateMessage.bind(this)} />

					<PlayersArea players={this.state.players} removePlayer={this.removePlayer.bind(this)} />
				</div>

				<Board addPlayer={this.addPlayer.bind(this)} />

				<MsgBar {...this.state.msg} /> {/* tożsame : <MsgBar {error={this.state.msg.error} show={this.state.msg.show}} /> */}
			</div>
		)
	}
}

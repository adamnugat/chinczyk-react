import React from 'react'
import { StartBtn } from './startButton'
import { Board } from './board'
import { MsgBar } from './msgBar'
import { PlayersArea } from './players'

export class Chinczyk extends React.Component {
	constructor() {
		super();

		this.state = {
			players: []
		};

		this.settings = {
			playersCount: 0
		}
	}

	render() {
		return (
			<div>
				<div className="infoArea">
					<StartBtn settings={this.settings} />

					<PlayersArea />
				</div>

				<Board />

				<MsgBar {...this.props.message} /> {/* tożsame : <MsgBar {error={this.state.msg.error} show={this.state.msg.show}} /> */}
			</div>
		)
	}
}

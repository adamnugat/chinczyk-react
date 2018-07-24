import React from 'react';
import {StartBtn} from './startButton';
import {Board} from './board';
import {MsgBar} from './msgBar';

export class Chinczyk extends React.Component {
	constructor() {
		super();

		this.state = {
			gameStarted: false,
			msg: {
				error: '',
				show: false
			}
		};

		this.settings = {
			playersCount: 0,
		}
	}

	updateMessage(error) {
		this.setState({msg: {error: error, show: true}});
	}

	render() {
		return (
			<div>
				<div className="infoArea">
					<StartBtn settings={this.settings} updateMessage={this.updateMessage.bind(this)} />

					<div className="figuresContainer"></div>
				</div>

				<Board />

				<MsgBar error={this.state.msg.error} show={this.state.msg.show} />
			</div>
		)
	}
}

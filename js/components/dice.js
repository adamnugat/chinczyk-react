import React from 'react';

import { connect } from 'react-redux'

import { rollDice } from '../actions/gameActions'

@connect((store) => {
	return {
		showDice: store.game.dice.showDice,
		activateDice: store.game.dice.activateDice,
		result: store.game.dice.result,
	}
})

export class Dice extends React.Component {
	constructor() {
		super();
	}

	/**
	 * klikniecie w kosc
	 * @param  {object} event - zdarzenie klikniecia
	 * @return {undefined}
	 */
	clicked(event) {
		if (!this.props.activateDice) {
			return false;
		}

		const result = Math.floor(Math.random() * 6) + 1;

		this.props.dispatch(rollDice(result));
	}


	render() {
		let show = '',
			active = '';

		if (this.props.showDice) {
			show = 'show';
		}

		if (this.props.activateDice) {
			active = 'animation';
		}

		return (
			<div className={'dice ' + show + ' ' + active} onClick={(e)=>this.clicked(e)}>
				<div className="result" data-result={this.props.result}></div>
			</div>
		)
	}
}

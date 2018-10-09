import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { rollDice } from '../actions/gameActions';

export default
@connect(store => ({
  showDice: store.game.dice.showDice,
  activateDice: store.game.dice.activateDice,
  result: store.game.dice.result,
}))
class Dice extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    showDice: PropTypes.bool,
    activateDice: PropTypes.bool,
    result: PropTypes.number,
  };

  static defaultProps = {
    dispatch: () => {},
    showDice: false,
    activateDice: false,
    result: 0,
  };

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

    return this.props.dispatch(rollDice(result));
  }

  render() {
    let show = '';

    let active = '';

    if (this.props.showDice) {
      show = 'show';
    }

    if (this.props.activateDice) {
      active = 'animation';
    }

    return (
      <div
        className={`dice ${show} ${active}`}
        onClick={e => this.clicked(e)}
      >
        <div className="result" data-result={this.props.result} />
      </div>
    );
  }
}

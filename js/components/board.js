import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Dice from './dice';
import { addPlayer } from '../actions/playerActions';

export default
@connect(store => ({
  players: store.player.players,
  playersObj: store.player.playersObj,
  countPlayers: store.player.countPlayers,
  game: store.game.game,
}))
class Board extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    players: PropTypes.shape(),
    playersObj: PropTypes.shape(),
    countPlayers: PropTypes.number,
    game: PropTypes.shape({
      started: PropTypes.bool,
    }),
  };

  static defaultProps = {
    dispatch: () => {},
    players: {},
    playersObj: {},
    countPlayers: 0,
    game: {},
  };

  /**
     * klikniecie w element na planszy
     * @param  {object} event - zdarzenie klikniecia
     * @return {undefined}
     */
  clicked(event) {
    const playersFields = ['blue', 'red', 'green', 'yellow'];

    const target = event.target.dataset.start;

    if (playersFields.indexOf(target) === -1) {
      return false;
    }

    if (this.props.game.started) {
      return false;
    }

    this.clickedAddPlayer(target);
    return true;
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

    const newPlayersObj = [...this.props.playersObj, { color: player, sleepingFigures: 4, }];

    this.props.dispatch(addPlayer(newPlayers, newPlayersObj));

    return true;
  }

  render() {
    return (
      <div
        className="fieldsArea"
        onClick={e => this.clicked(e)}
      >
        <div />
        <div />
        <div />
        <div />
        <div className="field" field-number="9" />
        <div className="field" field-number="10" />
        <div className="field" field-number="11" data-start="blue">
          <div className="figure" />
        </div>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div className="field" field-number="8" />
        <div className="field" home="blue" home-number="1" />
        <div className="field" field-number="12" />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div className="field" field-number="7" />
        <div className="field" home="blue" home-number="2" />
        <div className="field" field-number="13" />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div className="field" field-number="6" />
        <div className="field" home="blue" home-number="3" />
        <div className="field" field-number="14" />
        <div />
        <div />
        <div />
        <div />
        <div className="field" field-number="1" data-start="red" />
        <div className="field" field-number="2" />
        <div className="field" field-number="3" />
        <div className="field" field-number="4" />
        <div className="field" field-number="5" />
        <div className="field" home="blue" home-number="4" />
        <div className="field" field-number="15" />
        <div className="field" field-number="16" />
        <div className="field" field-number="17" />
        <div className="field" field-number="18" />
        <div className="field" field-number="19" />
        <div className="field" field-number="40" />
        <div className="field" home="red" home-number="1" />
        <div className="field" home="red" home-number="2" />
        <div className="field" home="red" home-number="3" />
        <div className="field" home="red" home-number="4" />

        <Dice />

        <div className="field" home="green" home-number="4" />
        <div className="field" home="green" home-number="3" />
        <div className="field" home="green" home-number="2" />
        <div className="field" home="green" home-number="1" />
        <div className="field" field-number="20" />
        <div className="field" field-number="39" />
        <div className="field" field-number="38" />
        <div className="field" field-number="37" />
        <div className="field" field-number="36" />
        <div className="field" field-number="35" />
        <div className="field" home="yellow" home-number="4" />
        <div className="field" field-number="25" />
        <div className="field" field-number="24" />
        <div className="field" field-number="23" />
        <div className="field" field-number="22" />
        <div className="field" field-number="21" data-start="green" />
        <div />
        <div />
        <div />
        <div />
        <div className="field" field-number="34" />
        <div className="field" home="yellow" home-number="3" />
        <div className="field" field-number="26" />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div className="field" field-number="33" />
        <div className="field" home="yellow" home-number="2" />
        <div className="field" field-number="27" />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div className="field" field-number="32" />
        <div className="field" home="yellow" home-number="1" />
        <div className="field" field-number="28" />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div className="field" field-number="31" data-start="yellow" />
        <div className="field" field-number="30" />
        <div className="field" field-number="29" />
        <div />
        <div />
        <div />
        <div />
      </div>
    );
  }
}

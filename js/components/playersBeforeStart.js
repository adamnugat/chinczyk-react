import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addPlayer } from '../actions/playerActions';

@connect(store => ({
  players: store.player.players,
  playersObj: store.player.playersObj,
}))
class PlayersBeforeStart extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    players: PropTypes.shape(),
    playersObj: PropTypes.shape(),
  };

  static defaultProps = {
    dispatch: () => {},
    players: {},
    playersObj: {},
  };

  /**
   * klikniecie konkretnie na pole startowe gracza co oznacza ze:
   * wybranie gracza do gry
   * @param  {string} player - kolor kliknietego gracza
   * @return {undefined}
   */
  addPlayerHandler(color) {
    if (this.props.players.indexOf(color) > -1) {
      return false;
    }

    const newPlayers = [...this.props.players, color];

    const newPlayersObj = [...this.props.playersObj, { color, sleepingFigures: 4, }];

    this.props.dispatch(addPlayer(newPlayers, newPlayersObj));

    return true;
  }

  render() {
    return (
      <div className="playersToChose">
        <div
          className="singlePlayer singlePlayer--red"
          onClick={() => this.addPlayerHandler('red')}
        />
        <div
          className="singlePlayer singlePlayer--blue"
          onClick={() => this.addPlayerHandler('blue')}
        />
        <div
          className="singlePlayer singlePlayer--green"
          onClick={() => this.addPlayerHandler('green')}
        />
        <div
          className="singlePlayer singlePlayer--yellow"
          onClick={() => this.addPlayerHandler('yellow')}
        />
      </div>
    );
  }
}

export default PlayersBeforeStart;

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addPlayer } from '../actions/playerActions';

@connect(store => ({
  players: store.player.players,
  playersObj: store.player.playersObj,
  playersToChoose: store.player.playersToChoose,
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
    this.props.dispatch(addPlayer(color));

    return true;
  }

  renderPlayersToChose(playersToChoose) {
    return playersToChoose.map((playerToChoose) => {
      return (
        <div
          className={`singlePlayer singlePlayer--${playerToChoose}`}
          onClick={() => this.addPlayerHandler(playerToChoose)}
        />
      );
    })
  }

  render() {
    return (
      <div className="playersToChose">
        { this.renderPlayersToChose(this.props.playersToChoose) }
      </div>
    );
  }
}

export default PlayersBeforeStart;

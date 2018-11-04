import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removePlayer } from '../actions/playerActions';

export default
@connect(store => ({
  players: store.player.players,
  playersObj: store.player.playersObj,
  countPlayers: store.player.countPlayers,
  activePlayer: store.player.activePlayer,
  gameStarted: store.game.game.started,
  diceResult: store.game.dice.result,
}))
class PlayersArea extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    players: PropTypes.shape(),
    playersObj: PropTypes.shape(),
    // countPlayers: PropTypes.number,
    activePlayer: PropTypes.number,
    gameStarted: PropTypes.bool,
    // diceResult: PropTypes.bool,
  }

  static defaultProps = {
    dispatch: () => {},
    players: {},
    playersObj: {},
    // countPlayers: 0,
    activePlayer: 1,
    gameStarted: false,
    // diceResult: 1,
  };

  /**
   * klikniecie w jakis element na przestrzeni gracza
   * @param  {object} event - zdarzenie kliknięcia
   * @return {undefined}
   */
  clicked(event) {
    if (event.target.dataset.remove) {
      const player = event.target.dataset.remove;

      if (this.props.gameStarted) {
        return false;
      }

      this.clickedRemovePlayer(player);
    }

    return true;
  }

  /**
   * klikniety konkretnie 'x' na przestrzeni gracza, powoduje to usunięcie gracza z kolejki
   * przed rozpoczeciem gry
   * @param  {string} player - kolor gracza ktory zostanie usunięty z kolejki
   * @return {undefined}
   */
  clickedRemovePlayer(color) {
    this.props.dispatch(removePlayer(color));

    return true;
  }

  /**
   * renderowanie pionków gracza w obrębie obszaru gracza
   * @param  {object} player obiekt poszczególnego gracza
   * @return {string} zwraca html
   */
  renderFigures(player) {
    const figuresArray = new Array(player.sleepingFigures).fill(0);

	  return figuresArray.map((nothing, i) => (<div className="figure" player={player.color} figure={i + 1} />));
  }

  /**
  * renderowanie tablicy z graczami wybranymi do gry, wywietla przestrzeń graczy
  * @param  {array} players - tablica z obiektami poszczegolnych graczy wybranych do gry
  * @return {string} - kod html z przestrzeniami graczy
  */
  renderPlayers(playersObj) {
    return playersObj.map((player, i) => {
      let active = '';

      if (this.props.activePlayer === player.color) {
        active = 'active';
      }

      return (
        <div
          order={i + 1}
          className={`playerFigures ${player.color} ${active}`}
          onClick={e => this.clicked(e)}
        >
          <span className="close fa fa-times" data-remove={player.color} />

          { this.renderFigures(player) }
        </div>
      );
    });
  }

  render() {
    return (
      <div className="figuresContainer">
        { this.renderPlayers(this.props.playersObj) }
      </div>
    );
  }
}

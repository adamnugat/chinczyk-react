import React from 'react';
import { connect } from 'react-redux';

import StartBtn from './startButton';
import PlayersBeforeStart from './playersBeforeStart';
import Board from './board';
import MsgBar from './msgBar';
import PlayersArea from './players';

import { initData } from '../actions/gameActions';

export default
@connect(store => ({
  message: store.message.message,
  initDataDone: store.game.initDataDone,
}))
class Chinczyk extends React.Component {
  constructor() {
    super();

    this.state = {
      players: [],
    };

    this.settings = {
      playersCount: 0,
    };
  }

  componentDidMount() {
    this.props.dispatch(initData());
  }

  render() {
    if (!this.props.initDataDone) {
      return (
        <div>
          Uruchamianie...
        </div>
      );
    }

    return (
      <React.Fragment>
        <div className="infoArea">
          <StartBtn settings={this.settings} />

          <PlayersBeforeStart />

          <PlayersArea />
        </div>

        <Board />

        <MsgBar {...this.props.message} />
      </React.Fragment>
    );
  }
}

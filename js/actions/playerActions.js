export function addPlayer(color) {
  return (dispatch, getState) => {
    const players = getState().player.players;
    const playersObj = getState().player.playersObj;

    if (players.indexOf(color) > -1) {
      return false;
    }

    const newPlayers = [...players, color];
    const newPlayersObj = [...playersObj, { color, sleepingFigures: 4, }];

    dispatch({
      type: 'ADD_PLAYER',
      players: newPlayers,
      playersObj: newPlayersObj,
    });
  };
}

export function removePlayer(color) {
  return (dispatch, getState) => {
    const players = getState().player.players;
    const playersObj = getState().player.playersObj;

    if (players.indexOf(color) === -1) {
      return false;
    }

    const playerId = players.indexOf(color);

    const newPlayers = [...players.slice(0, playerId), ...players.slice(playerId + 1)];
    const newPlayersObj = [...playersObj.slice(0, playerId), ...playersObj.slice(playerId + 1)];

    dispatch({
      type: 'REMOVE_PLAYER',
      players: newPlayers,
      playersObj: newPlayersObj,
    });
  };
}

export function selectFirstPlayer() {
  return (dispatch, getState) => {
    const activeP = getState().player.players[0];

    dispatch({
      type: 'SELECT_FIRST_PLAYER',
      activePlayer: activeP,
    });
  };
}

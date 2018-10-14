import board from '../data/boardTemplate';

export function initData() {
  return (dispatch) => {
    const boardFields = board;
    dispatch({
      type: 'INIT_DATA',
      boardFields,
    });
  };
}

export function startGame() {
  return {
    type: 'START_GAME',
    game: {
      started: true,
      hideStartButton: true,
    },
    showDice: true,
  };
}

export function activateDice() {
  return {
    type: 'ACTIVATE_DICE',
    activateDice: true,
  };
}

export function rollDice(result) {
  return {
    type: 'ROLL_DICE',
    result,
  };
}

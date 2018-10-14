export default function reducer(state = {
  boardFields: {},
  initDataDone: false,
  game: {
    started: false,
    hideStartButton: false,
  },
  dice: {
    showDice: false,
    activateDice: false,
    result: '',
  },
  updateFields: false,
}, action) {
  switch (action.type) {
    case 'INIT_DATA': {
      return {
        ...state,
        boardFields: action.boardFields,
        initDataDone: true,
      };
    }
    case 'START_GAME': {
      return {
        ...state,
        game: action.game,
        dice: {
          showDice: action.showDice,
        },
      };
    }
    case 'ACTIVATE_DICE': {
      return {
        ...state,
        dice: {
          showDice: true,
          activateDice: action.activateDice,
        },
      };
    }
    case 'ROLL_DICE': {
      return {
        ...state,
        dice: {
          showDice: true,
          activateDice: false,
          result: action.result,
        },
      };
    }
    case 'RENDER_FIELDS': {
      return {
        ...state,
        updateFields: action.updateFields,
      };
    }
    default:
      return {
        ...state,
      };
  }

  return state;
}

export default function reducer(state={
	players: [],
	playersObj: [],
	countPlayers: 0,
	activePlayer: '',
}, action) {
	switch (action.type) {
		case 'ADD_PLAYER': {
			return { 
				...state, 
				players: action.players,
				playersObj: action.playersObj,
				countPlayers: ++state.countPlayers
			}
		}
		case 'REMOVE_PLAYER': {
			return { 
				...state, 
				players: action.players,
				playersObj: action.playersObj,
				countPlayers: --state.countPlayers				
			}
		}
		case 'SELECT_FIRST_PLAYER': {
			return { 
				...state, 
				activePlayer: action.activePlayer,
			}
		}
	}

	return state;
}
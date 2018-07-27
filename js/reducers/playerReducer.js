export default function reducer(state={
	players: [],
	countPlayers: 0,
}, action) {
	switch (action.type) {
		case 'ADD_PLAYER': {
			return { 
				...state, 
				players: action.players,
				countPlayers: ++state.countPlayers
			}
		}
		case 'REMOVE_PLAYER': {
			return { 
				...state, 
				players: action.players,
				countPlayers: --state.countPlayers				
			}
		}
	}

	return state;
}
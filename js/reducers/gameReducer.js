export default function reducer(state={
	game: {
		started: false,
	},
}, action) {
	switch (action.type) {
		case 'START_GAME': {
			return { 
				...state, 
				game: action.game 
			}
		}
	}

	return state;
}
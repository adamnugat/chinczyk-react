export default function reducer(state={
	game: {
		started: false,
		hideStartButton: false,
	},
	dice: {
		showDice: false,
		activateDice: false,
		result: ''
	},
	updateFields: false
}, action) {
	switch (action.type) {
		case 'START_GAME': {
			return { 
				...state, 
				game: action.game,
				dice: {
					showDice: action.showDice,
				} 
			}
		}
		case 'ACTIVATE_DICE': {
			return { 
				...state,
				dice: {
					showDice: true,
					activateDice: action.activateDice
				}
			}
		}
		case 'ROLL_DICE': {
			return { 
				...state, 
				dice: {
					showDice: true,
					activateDice: false,
					result: action.result,
				}
			}
		}
		case 'RENDER_FIELDS': {
			return { 
				...state, 
				updateFields: action.updateFields
			}
		}
	}

	return state;
}
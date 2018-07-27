export default function reducer(state={
	message: {
		text: '',
		show: false
	},
}, action) {
	switch (action.type) {
		case 'SET_MESSAGE': {
			return { 
				...state, 
				message: action.message 
			}
		}
	}

	return state;
}
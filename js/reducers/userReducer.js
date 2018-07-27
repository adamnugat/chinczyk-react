export default function reducer(state={
	user: {
		id: null,
		name: null,
		age: null
	},
	fetching: false
}, action) {
	switch (action.type) {
		case 'FETCH_USER': {
			return { ...state, fetching: true }
		}
		case 'FETCH_USER_FULFILLED': {
			return {
				...state,
				fetching: false,
				fetched: true,
				user: action.payload,
			}
		}
	}

	return state;
}
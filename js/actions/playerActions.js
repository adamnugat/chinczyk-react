export function addPlayer(players) {
	return {
		type: 'ADD_PLAYER',
		players: players
	}
}

export function removePlayer(players) {
	return {
		type: 'REMOVE_PLAYER',
		players: players
	}
}

export function selectFirstPlayer() {
	return (dispatch, getState) => {
		const activeP = getState().player.players[0];

		dispatch({
			type: 'SELECT_FIRST_PLAYER',
			activePlayer: activeP
		})

	}
}

export function addPlayer(players, playersObj) {
	return {
		type: 'ADD_PLAYER',
		players: players,
		playersObj: playersObj,
	}
}

export function removePlayer(players, playersObj) {
	return {
		type: 'REMOVE_PLAYER',
		players: players,
		playersObj: playersObj,
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

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

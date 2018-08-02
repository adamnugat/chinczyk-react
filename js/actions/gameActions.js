export function startGame() {
	return {
		type: 'START_GAME',
		game: {
			started: true,
			hideStartButton: true,
		},
		showDice: true,
	}
}

export function activateDice() {
	return {
		type: 'ACTIVATE_DICE',
		activateDice: true
	}
}

export function rollDice(result) {
	return {
		type: 'ROLL_DICE',
		result: result
	}
}


export function startGame() {
	return {
		type: 'START_GAME',
		game: {
			started: true,
		}
	}
}

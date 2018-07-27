export function startGame() {
	return {
		type: 'START_GAME',
		data: {
			started: true,
		}
	}
}

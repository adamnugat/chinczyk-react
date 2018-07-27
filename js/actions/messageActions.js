export function setMessage(message) {
	return {
		type: 'SET_MESSAGE',
		message: {
			text: message,
			show: true
		}
	}
}

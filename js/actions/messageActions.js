export function setMessage(message, color) {
	return {
		type: 'SET_MESSAGE',
		message: {
			text: message,
			color: color || '#840400',
			show: true,
		}
	}
}

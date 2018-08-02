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

export function destroyMessage() {
	return {
		type: 'DESTROY_MESSAGE',
		message: {
			text: '',
			show: false,
		}
	}
}

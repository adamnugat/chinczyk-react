import { combineReducers } from 'redux'

import game from './gameReducer'
import message from './messageReducer'
import player from './playerReducer'

export default combineReducers({
	game,
	message,
	player
})
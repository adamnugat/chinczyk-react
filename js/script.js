import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Chinczyk } from './components/main'
import store from './store'

ReactDOM.render(<Provider store={store}>
		<Chinczyk />
	</Provider>,
	document.getElementById('chinczykapp')
);
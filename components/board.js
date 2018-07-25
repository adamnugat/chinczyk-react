import React from 'react';

export class Board extends React.Component {
	constructor() {
		super();

	}

	clicked(event) {
		console.log(event.target.dataset.color);
		// console.log(event.target.attributes.getNamedItem('start-color').value);
	}

	render() {
		return (
			<div className="fieldsArea" onClick={(e)=>this.clicked(e)}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div className="field" field-number="9"></div>
				<div className="field" field-number="10"></div>
				<div className="field" field-number="11" data-color="blue"></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div className="field" field-number="8"></div>
				<div className="field" home="blue" home-number="1"></div>
				<div className="field" field-number="12"></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div className="field" field-number="7"></div>
				<div className="field" home="blue" home-number="2"></div>
				<div className="field" field-number="13"></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div className="field" field-number="6"></div>
				<div className="field" home="blue" home-number="3"></div>
				<div className="field" field-number="14"></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div className="field" field-number="1" data-color="red"></div>
				<div className="field" field-number="2"></div>
				<div className="field" field-number="3"></div>
				<div className="field" field-number="4"></div>
				<div className="field" field-number="5"></div>
				<div className="field" home="blue" home-number="4"></div>
				<div className="field" field-number="15"></div>
				<div className="field" field-number="16"></div>
				<div className="field" field-number="17"></div>
				<div className="field" field-number="18"></div>
				<div className="field" field-number="19"></div>
				<div className="field" field-number="40"></div>
				<div className="field" home="red" home-number="1"></div>
				<div className="field" home="red" home-number="2"></div>
				<div className="field" home="red" home-number="3"></div>
				<div className="field" home="red" home-number="4"></div>
				<div className="dice">
					<div className="result"></div>
				</div>
				<div className="field" home="green" home-number="4"></div>
				<div className="field" home="green" home-number="3"></div>
				<div className="field" home="green" home-number="2"></div>
				<div className="field" home="green" home-number="1"></div>
				<div className="field" field-number="20"></div>
				<div className="field" field-number="39"></div>
				<div className="field" field-number="38"></div>
				<div className="field" field-number="37"></div>
				<div className="field" field-number="36"></div>
				<div className="field" field-number="35"></div>
				<div className="field" home="yellow" home-number="4"></div>
				<div className="field" field-number="25"></div>
				<div className="field" field-number="24"></div>
				<div className="field" field-number="23"></div>
				<div className="field" field-number="22"></div>
				<div className="field" field-number="21" data-color="green"></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div className="field" field-number="34"></div>
				<div className="field" home="yellow" home-number="3"></div>
				<div className="field" field-number="26"></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div className="field" field-number="33"></div>
				<div className="field" home="yellow" home-number="2"></div>
				<div className="field" field-number="27"></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div className="field" field-number="32"></div>
				<div className="field" home="yellow" home-number="1"></div>
				<div className="field" field-number="28"></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div className="field" field-number="31" data-color="yellow"></div>
				<div className="field" field-number="30"></div>
				<div className="field" field-number="29"></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		)
	}
}
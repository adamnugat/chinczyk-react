import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TrashField from './fields/trashField';
import JourneyField from './fields/journeyField';
import HomeField from './fields/homeField';
import StartField from './fields/startField';
import Dice from './dice';

import { addPlayer } from '../actions/playerActions';

export default
@connect(store => ({
  game: store.game.game,
  boardFields: store.game.boardFields,
}))
class Board extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    game: PropTypes.shape({
      started: PropTypes.bool,
    }),
  };

  static defaultProps = {
    dispatch: () => {},
    game: {},
  };

  /**
     * klikniecie w element na planszy
     * @param  {object} event - zdarzenie klikniecia
     * @return {undefined}
     */
  clicked(event) {
    const playersFields = ['blue', 'red', 'green', 'yellow'];

    const target = event.target.dataset.start;

    if (playersFields.indexOf(target) === -1) {
      return false;
    }

    if (this.props.game.started) {
      return false;
    }

    return true;
  }

  renderFields() {
    return Object.keys(this.props.boardFields).map((field) => {
      const fieldObj = this.props.boardFields[field];

      switch (fieldObj.fieldType) {
        case 'journey':
          return (<JourneyField fieldObj={fieldObj} />);
        case 'start':
          return (<StartField fieldObj={fieldObj} />);
        case 'home':
          return (<HomeField fieldObj={fieldObj} />);
        default:
          return (<TrashField />);
      }
    });
  }

  render() {
    return (
      <div className="fieldsArea">
        {this.renderFields()}
      </div>
    );
  }
}

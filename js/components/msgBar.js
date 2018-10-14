import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

export default
@connect(store => ({
  message: store.message.message,
}))
class MsgBar extends React.Component {
  static propTypes = {
    message: PropTypes.shape({
      show: PropTypes.bool,
      color: PropTypes.string,
      text: PropTypes.string,
    }),
    classNames: PropTypes.string,
  };

  static defaultProps = {
    message: {},
    classNames: 'infoMsg',
  };

  /**
  * wyswietla komunikat bledu jesli zmieni sie stan obiektu message w store
  * @return {object} style wyswietlajace komunikat bledu w odpowiednim kolorze
  */
  displayOrNot() {
    if (this.props.message.show) {
      return {
        maxHeight: '100px',
        backgroundColor: this.props.message.color,
      };
    }

    return { maxHeight: '0px', };
  }

  render() {
    return (
      <div className={this.props.classNames} style={this.displayOrNot()}>
        {this.props.message.text}
      </div>
    );
  }
}

import React from 'react';
import { connect } from 'react-redux';

import Figure from '../figure';

function FieldType(SpecyficFieldType) {
  class HOC extends React.Component {
    render() {
      return (
        <SpecyficFieldType
          {...this.props}
        >
          <Figure {...this.props} />
        </SpecyficFieldType>
      );
    }
  }

  const mapStateToProps = state => ({});

  return connect(mapStateToProps)(HOC);
}

export default FieldType;

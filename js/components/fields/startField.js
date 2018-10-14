import React from 'react';
import FieldType from './withField';

function LOC(props) {
  const { fieldNumber, startField, } = props.fieldObj;

  return (
    <div
      className="field"
      field-number={fieldNumber}
      data-start={startField}
    >
      {props.children}
    </div>
  );
}

const SpecyficFieldType = FieldType(LOC);

export default SpecyficFieldType;

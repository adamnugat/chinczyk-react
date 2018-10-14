import React from 'react';
import FieldType from './withField';

function LOC(props) {
  const { fieldNumber, } = props.fieldObj;

  return (
    <div
      className="field"
      field-number={fieldNumber}
    >
      {props.children}
    </div>
  );
}

const SpecyficFieldType = FieldType(LOC);

export default SpecyficFieldType;

import React from 'react';
import FieldType from './withField';

function LOC(props) {
  const { homeColor, homeNumber, } = props.fieldObj;

  return (
    <div
      className="field"
      home={homeColor}
      home-number={homeNumber}
    >
      {props.children}
    </div>
  );
}

const SpecyficFieldType = FieldType(LOC);

export default SpecyficFieldType;

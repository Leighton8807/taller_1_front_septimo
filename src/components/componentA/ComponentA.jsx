import React from 'react';
imp

const ComponentA = ({ inputValue, onInputChange }) => {
  return (
    <div>
      <label>Jorge Leighton:</label><br />
      <input type="text" value={inputValue} onChange={onInputChange} />
    </div>
  );
};

export default ComponentA;

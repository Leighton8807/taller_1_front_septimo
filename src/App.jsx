import React, { useState } from 'react';
import ComponentA from './components/componentA/ComponentA';
import ComponentB from './components/componentB/ComponentB';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  return (
    <div>
      <ComponentA inputValue={inputValue} onInputChange={handleInputChange} />
      <ComponentB inputValue={inputValue} />
    </div>
  );
};


export default App

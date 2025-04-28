import React, { useState } from 'react';
import './App.css';
import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const updateSelectedOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="parent">
      <h1>Selected Option: {selectedOption}</h1>
      
      {/* Render child components and pass down props */}
      <ChildComponent1 updateSelectedOption={updateSelectedOption} />
      <ChildComponent2 updateSelectedOption={updateSelectedOption} />
    </div>
  );
};

export default App;

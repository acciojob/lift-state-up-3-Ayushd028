import React from 'react';

const ChildComponent1 = ({ updateSelectedOption }) => {
  return (
    <div>
      <button onClick={() => updateSelectedOption('Option 1')}>Select Option 1</button>
    </div>
  );
};

export default ChildComponent1;

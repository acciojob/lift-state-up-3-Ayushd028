
import React from 'react';

const ChildComponent2 = ({ updateSelectedOption }) => {
  return (
    <div>
      <button onClick={() => updateSelectedOption('Option 2')}>Select Option 2</button>
    </div>
  );
};

export default ChildComponent2;

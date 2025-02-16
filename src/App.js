import React, { useState } from 'react';
import MultipleSelect from './components/MultipleSelect'

const options = ['Option1', 'Option2', 'Option3']
const App = () => {
  return (
    <div>
    <h1 style={{textAlign: 'center'}}>Multiple Values</h1>
    <MultipleSelect>
    </MultipleSelect>
    </div>
  );
};

export default App;

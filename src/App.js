import './App.css';
import reactLogo from './images/logo.svg';
import Buttons from './componets/buttons';
import Input from './componets/input';
import Clear from './componets/clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');
  const addInput = val => {
    setInput(input + val);
  }

  const calcResult = () => {
    setInput(evaluate(input));
  }

  return (
    <div className='App'>
      <div className='container-primary'>
        <div className='container-calculator'>
          <Input input={input} />
          <div className='row'>
            <Buttons managerClick={addInput}>1</Buttons>
            <Buttons managerClick={addInput}>2</Buttons>
            <Buttons managerClick={addInput}>3</Buttons>
            <Buttons managerClick={addInput}>+</Buttons>
          </div>
          <div className='row'>
            <Buttons managerClick={addInput}>4</Buttons>
            <Buttons managerClick={addInput}>5</Buttons>
            <Buttons managerClick={addInput}>6</Buttons>
            <Buttons managerClick={addInput}>-</Buttons>
          </div>
          <div className='row'>
            <Buttons managerClick={addInput}>7</Buttons>
            <Buttons managerClick={addInput}>8</Buttons>
            <Buttons managerClick={addInput}>9</Buttons>
            <Buttons managerClick={addInput}>*</Buttons>
          </div>
          <div className='row'>
            <Buttons managerClick={calcResult}>=</Buttons>
            <Buttons managerClick={addInput}>0</Buttons>
            <Buttons managerClick={addInput}>.</Buttons>
            <Buttons managerClick={addInput}>/</Buttons>
          </div>
          <div className='row'>
            <Clear managerClear={() => setInput('')}>
              cls
            </Clear>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

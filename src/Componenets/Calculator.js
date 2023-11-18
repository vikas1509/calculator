import React, { useState } from 'react';


const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateInputs = () => {
    // Check if inputs are not empty and are valid numbers
    if (num1.trim() === '' || num2.trim() === '') {
      setErrorMessage('Please enter both numbers.');
      return false;
    }
    if (isNaN(Number(num1)) || isNaN(Number(num2))) {
      setErrorMessage('Please enter valid numbers.');
      return false;
    }
    // Additional validation logic (positive/negative integers or floats) can be added here
    return true;
  };

  const performOperation = (operation) => {
    setErrorMessage(''); // Reset error message

    if (!validateInputs()) {
      return; // Validation failed, exit early
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    switch (operation) {
      case '+':
        setResult(number1 + number2);
        break;
      case '-':
        setResult(number1 - number2);
        break;
      case '*':
        setResult(number1 * number2);
        break;
      case '/':
        if (number2 === 0) {
          setErrorMessage('Division by zero is not allowed.');
          setResult('');
        } else {
          setResult(number1 / number2);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className='box'>
      <h2 className='heading'>React Calculator</h2>
      <div className='inputs'>
      <input  className="input1"type="text" value={num1} onChange={(e) => setNum1(e.target.value)} />
      <input className='input2' type="text" value={num2} onChange={(e) => setNum2(e.target.value)} />
      </div>
      <br />
      <div className='buttons'>
      <button onClick={() => performOperation('+')}>+</button>
      <button onClick={() => performOperation('-')}>-</button>
      <button onClick={() => performOperation('*')}>*</button>
      <button onClick={() => performOperation('/')}>/</button>
      </div>
      <br />
      {result && <div className='result' style={{ color: 'green' }}>Result: {result}</div>}
      {errorMessage && <div className='errors' style={{ color: 'red' }}>{errorMessage}</div>}
      
    </div>
  );
};

export default Calculator;

// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions/Actions';

const Counter = () => {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const containerStyle = {
    textAlign: 'center',
    margin: '50px auto',
    width: '200px',
    padding: '20px',
    border: '2px solid #333',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const buttonStyle = {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
  };

  const disabledButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#ccc',
    cursor: 'not-allowed',
  };

  return (
    <div style={containerStyle}>
      <h1>Counter: {count}</h1>
      <button style={buttonStyle} onClick={() => dispatch(increment())}>Increment</button>
      <button style={count === 0 ? disabledButtonStyle : buttonStyle} onClick={() => dispatch(decrement())} disabled={count === 0}>Decrement</button>
    </div>
  );
};

export default Counter;

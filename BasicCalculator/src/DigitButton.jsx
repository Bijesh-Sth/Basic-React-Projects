import React from 'react';
import { actions } from './App';

export default function DigitButton({ dispatch, digit, className }) {
  return (
    <button
      className={`digit-button ${className}`}
      onClick={() => dispatch({ type: actions.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}

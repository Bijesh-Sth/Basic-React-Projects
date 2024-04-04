import React, { useReducer } from 'react';
import './App.css';
import DigitButton from './DigitButton';
import OperationsButton from './OperationsButton';

export const actions = {
  ADD_DIGIT: 'ADD_DIGIT',
  ADD_OPERATOR: 'ADD_OPERATOR',
  CLEAR: 'CLEAR',
  DELETE_DIGIT: 'DELETE_DIGIT',
  CALCULATE: 'CALCULATE',
}

function reducer(state, { type, payload }) {
  switch (type) {
    case actions.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === '0' && state.currentOperand === '0') {
        return state;
      }
      if (payload.digit === '.' && state.currentOperand.includes('.')) {
        return state;
      }
      return {
        ...state,
        currentOperand: (state.currentOperand || '') + payload.digit,
      };
    case actions.ADD_OPERATOR:
      if (state.currentOperand === null && state.previousOperand === null) {
        return state;
      }
      if (state.currentOperand == null) {
        return {
          ...state,
          operator: payload.operation,
          
        }
      }
      if(state.previousOperand == null){
        return{
          ...state,
          operator:payload.operation,
          previousOperand:state.currentOperand,
          currentOperand:null,
        }
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };

      case actions.CLEAR:
      return {
        currentOperand: null,
        previousOperand: null,
        operator: null,
        overwrite: false,
      };
      case actions.DELETE_DIGIT:
        if (state.currentOperand === null) {
          return state;
        }
        if(state.currentOperand.length===1){
          return{
            ...state,
            currentOperand:null,
          }
        }
        return {
          ...state,
          currentOperand: state.currentOperand.slice(0, -1),
        };
      case actions.CALCULATE:
        if(state.operation == null || state.currentOperand == null || state.previousOperand == null){
          return state;
        }
        return{
          ...state,
          overwrite:true,
          previousOperand:null,
          operator:null,
          currentOperand:evaluate(state),
        }

      default:
      return state;
  }
}
function evaluate({ currentOperand, previousOperand, operator }) {
 const current = parseFloat(currentOperand);
  const previous = parseFloat(previousOperand);
  if(isNaN(current)||isNaN(previous)){
    return null;
  }
  let result='';
  switch(operator){
    case '+':
      result=previous+current;
      break;
    case '-':
      result=previous-current;
      break;
    case '*':
      result=previous*current;
      break;
    case '/':
      result=previous/current;
      break;
    default:
      return null;
  }
  return result.toString();
}

const INTEGER_FORMATTER = new Intl.NumberFormat('en-US', {maximumFractionDigits: 0});
const DECIMAL_FORMATTER = new Intl.NumberFormat('en-US', {maximumFractionDigits: 20});

function formatNumber(number) {
  if (number === null) return ''; // Return an empty string if number is null
  const [integer, decimal] = (number || '').split('.'); // Handle null or empty string case
  if (decimal === undefined) return INTEGER_FORMATTER.format(integer); // Check if decimal part exists
  return `${INTEGER_FORMATTER.format(integer)}.${DECIMAL_FORMATTER.format(decimal)}`;
}

function App() {
  const [{ currentOperand, previousOperand, operator }, dispatch] = useReducer(reducer, {
  });

  return (
    <>
      <div className='calculator-grid'>
        <div className='output'>
          <div className='previous-operand'>
          {formatNumber(previousOperand)} {operator}
          </div>
          <div className='current-operand'>{formatNumber(currentOperand)}</div>
        </div>
        {/* <button className='span-two'>AC</button> */}
        <button
        className="span-two"
        onClick={() => dispatch({ type: actions.CLEAR })}
      >
        AC
      </button>
        <button onClick={() => dispatch({ type: actions.DELETE_DIGIT })}>DEL</button>
        <OperationsButton dispatch={dispatch} operation='/' />
        <DigitButton dispatch={dispatch} digit={7} />
        <DigitButton dispatch={dispatch} digit={8} />
        <DigitButton dispatch={dispatch} digit={9} />
        <OperationsButton dispatch={dispatch} operation='*' />
        <DigitButton dispatch={dispatch} digit={4} />
        <DigitButton dispatch={dispatch} digit={5} />
        <DigitButton dispatch={dispatch} digit={6} />
        <OperationsButton dispatch={dispatch} operation='+' />
        <DigitButton dispatch={dispatch} digit={1} />
        <DigitButton dispatch={dispatch} digit={2} />
        <DigitButton dispatch={dispatch} digit={3} />
        <OperationsButton dispatch={dispatch} operation='-' />
        <DigitButton className='span-two' dispatch={dispatch} digit={0} />
        <DigitButton dispatch={dispatch} digit='.' />
        <button
        onClick={() => dispatch({ type: actions.CALCULATE })}
      >
        =
      </button>
      </div>
    </>
  );
}

export default App;

import { actions } from './App';

export default function OperationsButton({ dispatch, operation, className }) {
  return (
    <button
      className={className}
      onClick={() => dispatch({ type: actions.ADD_OPERATOR, payload: { operation } })}
    >
      {operation}
    </button>
  );
}

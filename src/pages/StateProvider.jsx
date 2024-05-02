import { createContext, useContext, useReducer, useRef } from 'react';

const StateContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'input changed':
      return {
        ...state,
        inputValue: { ...state.inputValue, ...action.payload },
      };

    case 'checked error':
      return {
        ...state,
        inputErrors: action.payload,
      };
    case 'error':
      return {
        ...state,
        inputErrors: { ...state.inputErrors, ...action.payload },
      };

    case 'submitForm':
      return {
        ...state,
        ...action.payload,
      };

    case 'reset':
      return { ...state, ...action.payload };

    default:
      throw new Error('Action not recognised');
  }
}

export default function StateProvider({ children, account, signup }) {
  const initialState = {
    inputValue: { ...account },
    inputErrors: {},
  };
  // const validationErrors = useRef({});
  const validationErrors = useRef({});
  const isValid = useRef(false);

  const passwordMatch = useRef({
    password: '',
    confirmed: '',
  });

  const [state, dispatch] = useReducer(reducer, initialState);

  function handleInputChange(e) {
    dispatch({
      type: 'input changed',
      payload: { [e.target.name]: e.target.value },
    });
    // validateInput(inputValue, signup, setinputErrors);
  }

  return (
    <StateContext.Provider
      value={{
        state,
        handleInputChange,
        dispatch,
        signup,
        isValid,
        passwordMatch,
        validationErrors,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export function useStateContext() {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error(' StateContext was used outside of StateProvider');
  }
  return context;
}

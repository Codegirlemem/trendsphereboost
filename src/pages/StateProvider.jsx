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

  // function validateInput(input) {
  //   const invalidValues = {};
  //   let isValid = true;

  //   const passwordTest = /^[0-9A-Za-z]{6,}$/.test(input.userPassword?.trim());

  //   const emailTest = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/.test(
  //     input.userEmail?.trim(),
  //   );
  //   if (input.userName) {
  //     if (input.userName.length > 0) {
  //       if (!input.userName?.trim()) {
  //         invalidValues.userName =
  //           'Name is required and cannot start with a space';
  //         isValid = false;
  //       } else if (input.userName?.trim().length < 6) {
  //         invalidValues.userName = 'Name must be atleast six characters long';
  //         isValid = false;
  //       }
  //     }
  //   }
  //   if (input.userEmail) {
  //     if (!input.userEmail?.trim()) {
  //       invalidValues.userEmail = 'Email is required';
  //       isValid = false;
  //     } else if (!emailTest) {
  //       invalidValues.userEmail = 'Email is not valid';
  //       isValid = false;
  //     }
  //   }
  //   if (input.userPassword) {
  //     if (!input.userPassword?.trim()) {
  //       invalidValues.userPassword =
  //         'Password is required and cannot start with a space';
  //       isValid = false;
  //     } else if (!passwordTest) {
  //       invalidValues.userPassword =
  //         'Password must be atleast six characters long with letters or numbers.';
  //       isValid = false;
  //     } else if (signup && input.userPassword) {
  //       if (input.confirmedPassword?.length === 0) {
  //         invalidValues.confirmedPassword = 'Confirm your password';
  //         isValid = false;
  //       } else if (input.userPassword !== input.confirmedPassword) {
  //         invalidValues.confirmedPassword = 'Password not matched';
  //         isValid = false;
  //       }
  //     }
  //   }
  //   if (signup) {
  //     if (!input.checkbox) {
  //       invalidValues.checkbox = 'Not checked';
  //       isValid = false;
  //     }
  //   }

  //   dispatch({ type: 'checked error', payload: { ...invalidValues } });
  //   return [isValid];
  // }

  // dispatch({ type: 'error', payload: validateInput });

  // function validate() {
  //   validateInput(state.inputValue, signup);
  // }

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

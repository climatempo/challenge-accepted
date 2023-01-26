import { useState } from 'react';

// This hook can be used to handle with the application states, like inputs, checkbox and etc
// for using this hook you need to pass a object as initial state, and the input name must be
// the same of the object key, example: 
// const INITIAL_STATE = {
//    anythingYouWant: '',
// }

// <input name={anythingYouWant} value={genericState.anythingYouWant} onChange={setGenericState} />

function useGenericState(initial_state) {
  const [genericState, setGenericState] = useState(initial_state);

  const setState = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    return setGenericState((prevState) => ({ ...prevState, [name]: value }));
  };

  return [genericState, setState];
}

export default useGenericState;

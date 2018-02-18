import constants from "./Keypad.constant";
import * as KeypadActions from "./Keypad.action";

const initalstate = {
    Keypadclicked:[]
};

export default function reducer(state=initalstate, action){
  switch (action.type) {
    
    case 'KEYPADCLICKED':
    console.log("state.keypadclicked", state.keypadclicked);
      return { 
        ...state,
        Keypadclicked: [...state.Keypadclicked, action.data]
    }

    default:
      return state
  }
}

export {initalstate};

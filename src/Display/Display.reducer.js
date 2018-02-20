import constants from "./Display.constant";
import * as DisplayActions from "./Display.action";

const initalstate = {
    displayclicked:[]
};

export default function reducer(state=initalstate, action){
  switch (action.type) {
    
    case 'SETDISPLAY':
    console.log("state.setdisplay", state.displayclicked);
      return { 
        ...state,
        displayclicked: [...state.displayclicked, action.data]
    }

    case 'GETDISPLAY':
    console.log("state.getdisplay", state.displayclicked);
      return { 
        ...state,
        displayclicked: [...state.displayclicked.filter(item=>item!==action.data)]
    }

    default:
      return state
  }
}

export {initalstate};

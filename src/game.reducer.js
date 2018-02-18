import constants from "./game.constant";
import * as GameActions from "./game.action";

const initalstate = {
  randomstar:{},
};

export default function reducer(state=initalstate, action){
  switch (action.type) {
    case 'RANDOMSTAR':
      return (Object.assign({}, state, {randomstar: action.data}))
       
    default:
      return state
  }
}

export {initalstate};

import constants from "./game.constant";
import * as GameActions from "./game.action";

const initalstate = {
  randomstar:{},
};

export default function reducer(state=initalstate, action){
  switch (action.type) {
    case 'RANDOMSTAR':
      return (Object.assign({}, state, {randomstar: parseInt(Math.floor(9*Math.random())+1)}))
       
    default:
      return state
  }
}

export {initalstate};

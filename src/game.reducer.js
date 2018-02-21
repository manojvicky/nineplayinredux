import constants from "./game.constant";
import * as GameActions from "./game.action";

const initalstate = {
  randomstar:{},
  maxscore: 0
};

export default function reducer(state=initalstate, action){
  switch (action.type) {
    case 'RANDOMSTAR':
      return (Object.assign({}, state, {randomstar: parseInt(Math.floor(9*Math.random())+1)}))

    case 'MAXSCORE':
    return (Object.assign({}, state, {maxscore: action.data}))
       
    default:
      return state
  }
}

export {initalstate};

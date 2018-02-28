import constants from "./game.constant";
import * as GameActions from "./game.action";

const initalstate = {
  randomstar:{},
  maxscore: 0,
  correct: false,
  buttonvalue:"white",
  modalmessage: "",
  modalstate: false,
  score:0,
  life: 5
};

export default function reducer(state=initalstate, action){
  switch (action.type) {
    case 'RANDOMSTAR':
      return (Object.assign({}, state, {randomstar: parseInt(Math.floor(9*Math.random())+1)}))

    case 'MAXSCORE':
    return (Object.assign({}, state, {maxscore: action.data}))

    case 'CORRECT':
    return (Object.assign({}, state, {correct: action.data}))

    case 'BUTTONVALUE':
    return (Object.assign({}, state, {buttonvalue: action.data}))

    case 'MODALMESSAGE':
    return (Object.assign({}, state, {modalmessage: action.data}))

    case 'MODALSTATE':
    return (Object.assign({}, state, {modalstate: action.data}))

    case 'SCORE':
    return (Object.assign({}, state, {score: action.data}))

    case 'LIFE':
    return (Object.assign({}, state, {life: action.data}))
       
    default:
      return state
  }
}

export {initalstate};

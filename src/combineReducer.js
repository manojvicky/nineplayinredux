import {combineReducers} from "redux";
import gameReducer from "./game.reducer";
import KeypadReducer from "./Keypad/Keypad.reducer";

const rootReducer = combineReducers({
    gameReducer,
    KeypadReducer                   
});

export default rootReducer;
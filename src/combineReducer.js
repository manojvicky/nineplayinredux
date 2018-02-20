import {combineReducers} from "redux";
import gameReducer from "./game.reducer";
import KeypadReducer from "./Keypad/Keypad.reducer";
import DisplayReducer from "./Display/Display.reducer";

const rootReducer = combineReducers({
    gameReducer,
    KeypadReducer,
    DisplayReducer                   
});

export default rootReducer;
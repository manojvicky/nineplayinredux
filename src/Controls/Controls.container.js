import { connect } from 'react-redux'; 
import Controls from './Controls';
import * as gameActions from '../game.action';
import * as KeypadActions from '../Keypad/keypad.action';
import * as DisplayActions from '../Display/Display.action';
import { bindActionCreators } from "redux";
console.log("gameActions", gameActions);
export default connect(
    (state)=>(
    {
        displayclicked: state.DisplayReducer.displayclicked,
        randomstar: state.gameReducer.randomstar,
        maxscore: state.gameReducer.maxscore,
        Keypadclicked: state.KeypadReducer.Keypadclicked
    }),
    (dispatch)=>({
         actions: bindActionCreators(gameActions, dispatch),
         actionsdisplay: bindActionCreators(DisplayActions, dispatch),
         actionskeypad: bindActionCreators(KeypadActions, dispatch),
    })
)(Controls);


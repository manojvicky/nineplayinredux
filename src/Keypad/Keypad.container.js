import { connect } from 'react-redux'; 
import Keypad from './Keypad';
import * as KeypadActions from '../Keypad/keypad.action';
import * as DisplayActions from '../Display/Display.action';
import KeypadReducer from './keypad.reducer';
import { bindActionCreators } from "redux";

export default connect(
    (state)=>(
    {
        Keypadclicked: state.KeypadReducer.Keypadclicked
    }),
    (dispatch)=>({
        actionskeypad: bindActionCreators(KeypadActions, dispatch),
        actionsdisplay: bindActionCreators(DisplayActions, dispatch)
    })
)(Keypad);


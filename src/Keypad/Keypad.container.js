import { connect } from 'react-redux'; 
import Keypad from './Keypad';
import * as KeypadActions from './keypad.action';
import KeypadReducer from './keypad.reducer';
import { bindActionCreators } from "redux";

export default connect(
    (state)=>(
    {
        Keypadclicked: state.KeypadReducer.Keypadclicked
    }),
    (dispatch)=>({
         actions: bindActionCreators(KeypadActions, dispatch)
    })
)(Keypad);


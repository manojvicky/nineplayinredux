import { connect } from 'react-redux'; 
import Display from './Display';
import * as KeypadActions from '../Keypad/Keypad.action';
import { bindActionCreators } from "redux";

export default connect(
    (state)=>(
    {
        Keypadclicked: state.KeypadReducer.Keypadclicked
    }),
    (dispatch)=>({
         actions: bindActionCreators(KeypadActions, dispatch)
    })
)(Display);


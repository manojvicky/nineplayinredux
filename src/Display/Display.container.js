import { connect } from 'react-redux'; 
import Display from './Display';
import * as KeypadActions from '../Keypad/Keypad.action';
import * as DisplayActions from '../Display/Display.action';
import DisplayReducer from './Display.reducer';
import { bindActionCreators } from "redux";

export default connect(
    (state)=>(
    {
        displayclicked: state.DisplayReducer.displayclicked
    }),
    (dispatch)=>({
         actionskeypad: bindActionCreators(KeypadActions, dispatch),
         actionsdisplay: bindActionCreators(DisplayActions, dispatch)
    })
)(Display);


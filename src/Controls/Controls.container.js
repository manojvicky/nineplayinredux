import { connect } from 'react-redux'; 
import Controls from './Controls';
import * as gameActions from '../game.action';
import { bindActionCreators } from "redux";
console.log("gameActions", gameActions);
export default connect(
    (state)=>(
    {
        Keypadclicked: state.KeypadReducer.Keypadclicked,
        randomstar: state.gameReducer.randomstar
    }),
    (dispatch)=>({
         actions: bindActionCreators(gameActions, dispatch)
    })
)(Controls);


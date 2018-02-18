import { connect } from 'react-redux'; 
import Star from './Star';
import * as gameActions from '../game.action';
import { bindActionCreators } from "redux";

console.log("gameActions", gameActions);
export default connect(
    (state)=>({
        randomstar: state.gameReducer.randomstar
   }),
    (dispatch)=>({
         actions: bindActionCreators(gameActions, dispatch)
    })
)(Star);


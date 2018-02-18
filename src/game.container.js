import { connect } from 'react-redux'; 
import Game from './game';
import * as gameActions from './game.action';
import gameReducer from './game.reducer';
import { bindActionCreators } from "redux";

export default connect(
    (state)=>(
    {
        randomstar: state.gameReducer.randomstar
    }),
    (dispatch)=>({
         actions: bindActionCreators(gameActions, dispatch)
    })
)(Game);


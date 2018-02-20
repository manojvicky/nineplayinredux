import React from 'react';
import Star from './Star/Star.container';
import Controls from './Controls/Controls.container';
import Display from './Display/Display.container';
import Keypad from './Keypad/Keypad.container';


class Game extends React.Component {
    constructor(){
        super();
    }

    componentWillMount(){
      this.props.actions.randomstar();
    }

   render() {
      return (
        <div>
          <div className="firstrow">
         <Star/>
         <Controls/>
         <Display/>
         </div>
         <Keypad/>
        </div>
      );
   }
}
export default Game;
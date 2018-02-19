import React from 'react';
import _ from 'lodash';

class Controls extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            correct:false
        }
        this.enterfxn = this.enterfxn.bind(this);
        this.lifefxn = this.lifefxn.bind(this);
    }

    lifefxn(){

    }

    enterfxn(){
        const {randomstar, Keypadclicked} = this.props;
        const {correct} = this.state;
        if(correct){
            console.log("stage 2 ");
            this.setState({
                correct: true
            })
        }else{
            let sum=_.sum(Keypadclicked);
            console.log("sum", sum);
            if(sum==randomstar){
                console.log("its true");
                this.setState({
                    correct: true
                })
            }else{
                console.log("its false");
            }
        }

    }
   render() {
       console.log("random", this.props.randomstar);
       console.log("keypad", this.props.Keypadclicked);
      return (
            <div className="controlclass">
                <input className="enterclass" type="button" onClick={this.enterfxn} value="Enter" />
                <input className="lifeclass" type="button" onClick={this.lifefxn} value="Life" />
            </div>
      );
   }
}
export default Controls;
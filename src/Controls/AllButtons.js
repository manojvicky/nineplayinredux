import React from 'react';
import { Button } from 'react-bootstrap';

class AllButtons extends React.Component {
    constructor(props){
        super(props);
        this.enterfxn = this.enterfxn.bind(this);
    }

enterfxn(){
    const {randomstar, displayclicked} = this.props;
        const {correct} = this.state;
        if(correct){
            console.log("stage 2 ");
            this.props.actionsdisplay.cleardisplay();
            this.props.actions.randomstar();
            this.setState({
                correct: false,
                render: 1
            })
        }else{
            let sum=0;
            displayclicked.map((value)=>{
                sum=sum+parseInt(value);
            })
            console.log("sum", sum);
            if(sum===randomstar){
                if(this.state.life>0 && this.props.Keypadclicked.length === 9){
                    
                    switch(this.state.life){

                        case 5:
                        if(this.props.maxscore<500){
                            this.props.actions.maximumscore(500);
                        } 
                        this.setState({
                            modalstate: true,
                            score:500,
                            modalmessage: "You WON ;-)"

                        });
                        return;

                        case 4: 
                        if(this.props.maxscore<400){
                            this.props.actions.maximumscore(400);
                        } 
                        this.setState({
                            modalstate: true,
                            score:400,
                            modalmessage: "You WON ;-)"

                        });
                        return;

                        case 3: 
                        if(this.props.maxscore<300){
                            this.props.actions.maximumscore(300);
                        } 
                        this.setState({
                            modalstate: true,
                            score:300,
                            modalmessage: "You WON ;-)"

                        });
                        return;

                        case 2: 
                        if(this.props.maxscore<200){
                            this.props.actions.maximumscore(200);
                        } 
                        this.setState({
                            modalstate: true,
                            score:200,
                            modalmessage: "You WON ;-)"

                        });
                        return;

                        case 1: 
                        if(this.props.maxscore<100){
                            this.props.actions.maximumscore(100);
                        } 
                        this.setState({
                            modalstate: true,
                            score:100,
                            modalmessage: "You WON ;-)"

                        });
                        return;
                    }
                    
                }
                console.log("its true");
                this.setState({
                    correct: true,
                    render: 3,
                })
            }else{
                console.log("its false");
                this.setState({
                    correct: false,
                    render: 2
                })
            }
        }
}

render(){
   return(
    <div>
        <input className="enterclass" type="button" onClick={this.enterfxn} 
        value={this.props.buttonvalue} style={{background: this.props.background}}/>
    </div>
   ); 
}
}

export default AllButtons; 
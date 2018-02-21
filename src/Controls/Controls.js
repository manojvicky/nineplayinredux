import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class Controls extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            correct:false,
            life: 5,
            render: 1,
            modalmessage: "",
            modalstate: false,
            score: 0
        }
        this.enterfxn = this.enterfxn.bind(this);
        this.lifefxn = this.lifefxn.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    lifefxn(){
        let {life} = this.state;
        life=life-1;
        if(life===0){
            console.log("u lose");
            this.setState({
                modalstate: true,
                life: life,
                score: 0,
                modalmessage: "You LOSE :-(",
            });
            
        }else{
            this.props.actionsdisplay.cleardisplay();
            this.props.actions.randomstar();
            this.setState({
                life: life,
                correct:false,
                render: 1
            });
        }
    }
    handleClose(){
        console.log("handleClose")
        this.setState({
            modalstate: false,
            life: 5,
            score: 0,
            render: 1,
            modalmessage: "You LOSE :-(",
            correct:false
        });
        this.props.actionsdisplay.cleardisplay();
        this.props.actions.randomstar();
        this.props.actionskeypad.clearkeypad();
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
                    // if(this.state.life ===5){
                    //     this.setState({
                    //         modalstate: true
                    //     });
                    //     return;
                    // }
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
   render() {
       console.log("random", this.props.randomstar);
       console.log("display in control", this.props.displayclicked);
       let maxscore = this.props.maxscore;
       let equalto = this.state.render === 1 ? <input className="enterclass" type="button" onClick={this.enterfxn} value="=" />: null;
       let wrong = this.state.render === 2 ? <input className="enterclass" type="button" style={{background: "red"}} onClick={this.enterfxn} value="X" />: null;
       let right = this.state.render === 3 ? <input className="enterclass" type="button" style={{background: "lightgreen"}} onClick={this.enterfxn} value="&#x2714;" />: null;
       let modalstate = this.state.modalstate ? <Modal show={this.state.modalstate} onHide={this.handleClose}>
       <Modal.Header closeButton>
           <Modal.Title>
            Nine Play
            <span className="score">Maximum Score {maxscore}</span>
            <span className="score">Score {this.state.score}</span>
           </Modal.Title>
       </Modal.Header>
       <Modal.Body>
           <h4 className="modalmessage">{this.state.modalmessage}</h4>
       </Modal.Body>
       <Modal.Footer>
       &#9400; Manoj
       </Modal.Footer>
   </Modal> : null;
      return (
            <div className="controlclass">
            {equalto}
            {wrong}
            {right}
            <input className="lifeclass" type="button" onClick={this.lifefxn} disabled={this.state.life===0} value={`Life: ${this.state.life}`} />
            {modalstate}
            </div>
      );
   }
}
export default Controls;
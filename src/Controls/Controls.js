import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ModalMessage from './ModalMessage';

class Controls extends React.Component {
    constructor(props){
        super(props);
        this.enterfxn = this.enterfxn.bind(this);
        this.lifefxn = this.lifefxn.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    lifefxn(){
        let {displayclicked, life, score, modalmessage, modalstate} = this.props;
        life=life-1;
        if(life===0){
            console.log("u lose");
            this.props.actions.modalmessage("U Lose :-(");
            this.props.actions.modalstate(true);
            this.props.actions.score(0);
        }else{
            if(displayclicked.length>0){
            displayclicked.map((item)=>{
            this.props.actionskeypad.displayclicked(item);
            })
            }
            this.props.actions.buttonvalue("white");
            this.props.actions.life(life);
            this.props.actions.correct(false);
            this.props.actionsdisplay.cleardisplay();
            this.props.actions.randomstar();
        }
    }
    handleClose(){
        console.log("handleClose");
        this.props.actions.modalmessage("");
        this.props.actions.modalstate(false);
        this.props.actions.score(0);
        this.props.actions.life(5);
        this.props.actionsdisplay.cleardisplay();
        this.props.actions.buttonvalue("white");
        this.props.actions.randomstar();
        this.props.actionskeypad.clearkeypad();
    }
    enterfxn(){
        const {randomstar, displayclicked} = this.props;
        const {correct} = this.props;
        if(correct){
            console.log("stage 2 ");
            this.props.actionsdisplay.cleardisplay();
            this.props.actions.randomstar();
            this.props.actions.correct(false);
            this.props.actions.buttonvalue("white");
        }else{
            let sum=0;
            displayclicked.map((value)=>{
                sum=sum+parseInt(value);
            })
            console.log("sum", sum);
            if(sum===randomstar){
                if(this.props.life>0 && this.props.Keypadclicked.length === 9){
                    
                    switch(this.props.life){

                        case 5:
                        if(this.props.maxscore<500){
                            this.props.actions.maximumscore(500);
                        }
                        this.props.actions.modalmessage("U WON :-)");
                        this.props.actions.modalstate(true);
                        this.props.actions.score(500); 
                        return;

                        case 4: 
                        if(this.props.maxscore<400){
                            this.props.actions.maximumscore(400);
                        }
                        this.props.actions.modalmessage("U WON :-)");
                        this.props.actions.modalstate(true);
                        this.props.actions.score(400); 
                        return;

                        case 3: 
                        if(this.props.maxscore<300){
                            this.props.actions.maximumscore(300);
                        }
                        this.props.actions.modalmessage("U WON :-)");
                        this.props.actions.modalstate(true);
                        this.props.actions.score(300);  
                        return;

                        case 2: 
                        if(this.props.maxscore<200){
                            this.props.actions.maximumscore(200);
                        }
                        this.props.actions.modalmessage("U WON :-)");
                        this.props.actions.modalstate(true);
                        this.props.actions.score(200);  
                        return;

                        case 1: 
                        if(this.props.maxscore<100){
                            this.props.actions.maximumscore(100);
                        }
                        this.props.actions.modalmessage("U WON :-)");
                        this.props.actions.modalstate(true);
                        this.props.actions.score(100);  
                        return;
                    }
                    
                }
                console.log("its true");
                this.props.actions.correct(true);
                this.props.actions.buttonvalue("green");
                
            }else{
                console.log("its false");
                this.props.actions.correct(false);
                this.props.actions.buttonvalue("red");
            }
        }

    }
   render() {
       console.log("random", this.props.randomstar);
       console.log("display in control", this.props.displayclicked);
       let maxscore = this.props.maxscore;
      return (
            <div className="controlclass">
            <input className="enterclass" type="button" onClick={this.enterfxn} value={this.props.buttonvalue} style={{background: this.props.buttonvalue}} />
            <input className="lifeclass" type="button" onClick={this.lifefxn} disabled={this.props.life===0} value={`Life: ${this.props.life}`} />
            <ModalMessage modalstate={this.props.modalstate}
            handleClose={this.handleClose} maxscore={this.props.maxscore} score={this.props.score}
            modalmessage={this.props.modalmessage}/>
            </div>
      );
   }
}
export default Controls;
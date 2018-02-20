import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class Controls extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            correct:false,
            life: 5,
            equalto: true,
            wrong: false,
            right: false,
            modalmessage: false
        }
        this.enterfxn = this.enterfxn.bind(this);
        this.lifefxn = this.lifefxn.bind(this);
    }

    lifefxn(){
        let {life} = this.state;
        life=life-1;
        if(life===0){
            console.log("u lose");
            this.setState({
                modalmessage: true,
                life: life,
                correct:false,
                equalto: true,
                wrong: false,
                right: false
            });
        }else{
            this.props.actionsdisplay.cleardisplay();
            this.props.actions.randomstar();
            this.setState({
                life: life,
                correct:false,
                equalto: true,
                wrong: false,
                right: false
            });
        }
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
                equalto: true,
                wrong: false,
                right: false
            })
        }else{
            let sum=0;
            displayclicked.map((value)=>{
                sum=sum+parseInt(value);
            })
            console.log("sum", sum);
            if(sum===randomstar){
                if(this.state.life>0 && this.props.Keypadclicked.length === 9){
                    this.setState({
                        modalmessage: true
                    });
                    return;
                }
                console.log("its true");
                this.setState({
                    correct: true,
                    equalto: false,
                    wrong: false,
                    right: true
                })
            }else{
                console.log("its false");
                this.setState({
                    equalto: false,
                    wrong: true,
                    correct: false,
                    right: false
                })
            }
        }

    }
   render() {
       console.log("random", this.props.randomstar);
       console.log("display in control", this.props.displayclicked);
       let equalto = this.state.equalto ? <input className="enterclass" type="button" onClick={this.enterfxn} value="&#x1F64F;" />: null;
       let wrong = this.state.wrong ? <input className="enterclass" type="button" onClick={this.enterfxn} value="&#x1F62D;" />: null;
       let right = this.state.right ? <input className="enterclass" type="button" onClick={this.enterfxn} value="&#x270C;" />: null;
       let modalmessage = this.state.modalmessage ? <Modal show={this.state.modalmessage} onHide={this.handleClose}>
       <Modal.Header closeButton>
           <Modal.Title>Modal heading</Modal.Title>
       </Modal.Header>
       <Modal.Body>
           <h4>Text in a modal</h4>
       </Modal.Body>
       <Modal.Footer>
           <Button onClick={this.handleClose}>Close</Button>
       </Modal.Footer>
   </Modal> : null;
      return (
            <div className="controlclass">
            {equalto}
            {wrong}
            {right}
            <input className="lifeclass" type="button" onClick={this.lifefxn} disabled={this.state.life===0} value={this.state.life} />
            {modalmessage}
            </div>
      );
   }
}
export default Controls;
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalMessage = (props)=>{
    console.log("props", props);
   return(
    <Modal show={props.modalstate} onHide={props.handleClose}>
    <Modal.Header closeButton>
        <Modal.Title>
         Nine Play
         <span className="score">Maximum Score {props.maxscore}</span>
         <span className="score">Score {props.score}</span>
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <h4 className="modalmessage">{props.modalmessage}</h4>
    </Modal.Body>
    <Modal.Footer>
    &#9400; Manoj
    </Modal.Footer>
    </Modal>
   ); 
}

export default ModalMessage;
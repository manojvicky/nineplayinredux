import constants from "./Display.constant";

  export function setdisplay(data){
    return {
      type: 'SETDISPLAY',
      data
    }
  }

  export function getdispaly(data){
    return {
      type: 'GETDISPLAY',
      data
    }
  }

  export function cleardisplay(){
    return {
      type: 'CLEARDISPLAY',
    }
  }
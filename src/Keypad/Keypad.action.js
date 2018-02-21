import constants from "./Keypad.constant";

export function keypadclicked(data){
  return {
    type: 'KEYPADCLICKED',
    data
  }
}

export function displayclicked(data){
    return {
      type: 'DISPLAYCLICKED',
      data
    }
  }
  
export function clearkeypad(){
    return {
      type: 'KEYPADINITAL',
    }
  }
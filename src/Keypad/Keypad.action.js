import constants from "./Keypad.constant";

export function keypadclicked(data){
  return {
    type: 'KEYPADCLICKED',
    data
  }
}
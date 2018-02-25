import constants from "./game.constant";

export function randomstar(){
  return {
    type: 'RANDOMSTAR',
  }
}

export function maximumscore(data){
  return {
    type: 'MAXSCORE',
    data
  }
}

export function correct(data){
  return {
    type: 'CORRECT',
    data
  }
}

export function buttonvalue(data){
  return {
    type: 'BUTTONVALUE',
    data
  }
}

export function modalstate(data){
  return {
    type: 'MODALSTATE',
    data
  }
}

export function modalmessage(data){
  return {
    type: 'MODALMESSAGE',
    data
  }
}

export function score(data){
  return {
    type: 'SCORE',
    data
  }
}

export function life(data){
  return {
    type: 'LIFE',
    data
  }
}

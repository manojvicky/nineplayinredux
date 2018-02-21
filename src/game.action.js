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

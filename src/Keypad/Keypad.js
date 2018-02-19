import React from 'react';

class Keypad extends React.Component {
    constructor(props){
        super(props);
        this.state={
            disableclick: props.Keypadclicked
        }
        this.handleClicked = this.handleClicked.bind(this);
    }

componentWillReceiveProps(nextprop){
console.log("nextprop in keypad", nextprop);
this.setState({
    disableclick: nextprop.Keypadclicked,
});
}    

handleClicked(event){
    const value = event.target.value;
    this.props.actions.keypadclicked(value);
    }

   render() {
       let keypadvalues = [1,2,3,4,5,6,7,8,9];
       const keypad = keypadvalues.map((value, index)=>{
        return(
       <input type="button" className="keypadbuttonclass" key={value} onClick={(e)=>this.handleClicked(e)} 
       value={value} disabled={(this.state.disableclick[0] == value)
        ||(this.state.disableclick[1] == value) ||(this.state.disableclick[2] == value) ||(this.state.disableclick[3] == value)
        ||(this.state.disableclick[4] == value) ||(this.state.disableclick[5] == value) ||(this.state.disableclick[6] == value)
        ||(this.state.disableclick[7] == value) ||(this.state.disableclick[8] == value) ?true:false}/>
        );
       });
       return <div className="keypadclass">{keypad}</div>;
      return (
        <div>
         {Keypad}
        </div>
      );
   }
}
export default Keypad;
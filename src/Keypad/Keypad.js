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
    valueclicked: null
});
}    


disablefxn(){
    const {disableclick} = this.state;
    let i = 0;
    disableclick.map((item)=>{
        if(item===this.state.valueclicked){
    console.log("disablefxn", value);
            i++;
        }
    });

    if(i>0){
        return true;
    }else{
        return false;
    }

}
handleClicked(event){
    // const {keypadclicked} = this.props;

    const value = event.target.value;
    
    console.log("clicked", value);
    this.setState({
        valueclicked: value
    });
    this.props.actions.keypadclicked(value);
    
    }

   render() {
       console.log("disableclick", this.state.disableclick);
       let keypadvalues = [1,2,3,4,5,6,7,8,9];
       const keypad = keypadvalues.map((value, index)=>{
        return(
       <input type="button" className="keypadbuttonclass" key={value} onClick={(e)=>this.handleClicked(e)} 
       value={value} disabled={ this.state.disableclick.length >0 ? this.disablefxn() : false } />
        );
       });
       return <div className="keypadclass">{keypad}</div>;
       console.log("buttons", keypad);
      return (
        <div>
         {Keypad}
        </div>
      );
   }
}
export default Keypad;
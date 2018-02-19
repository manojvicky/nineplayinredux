import React from 'react';

class Display extends React.Component {
    constructor(){
        super();
        this.handleClicked = this.handleClicked.bind(this);
    }
    componentWillReceiveProps(nextprops){
        console.log("display componentWillReceiveProps()", nextprops);
    }
    
    handleClicked(event){
        const value= event.target.value;
        this.props.actions.displayclicked(value);
    }
   render() {
       console.log("display", this.props.Keypadclicked);
       const {Keypadclicked} = this.props;
       let values = Keypadclicked.length>0 ? Keypadclicked.map((value, index)=>{
        return(
            <input type="button" className="keypadbuttonclass" key={index} onClick={(e)=>this.handleClicked(e)} value={value} />
             );
   }): null;

       return <div className="displayclass">{values}</div>;
    
      return (
        <div>
        {values}
        </div>
      );
   }
}
export default Display;
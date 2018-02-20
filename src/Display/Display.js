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
        this.props.actionskeypad.displayclicked(value);
        this.props.actionsdisplay.getdispaly(value);
    }
   render() {
       console.log("display", this.props.displayclicked);
       const {displayclicked} = this.props;
       console.log("displayclicked", displayclicked);
       let values = displayclicked.length>0 ? displayclicked.map((value, index)=>{
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
import React from 'react';

class Star extends React.Component {
    constructor(){
        super();
    }
    componentWillReceiveProps(nextprops){
        console.log("star componentWillReceiveProps()", nextprops);
    }
   render() {
       const {randomstar} = this.props;
       let number= [];
       for(let i=1;i<=randomstar;i++){
        number.push(1)
       } 
       const stars = number.map((item, index)=>{
        return(
        <li className="starliclass" key={index}>&#9733;</li>
        )
       })
      return (
        <div className="starclass">
        <ul className="starulclass">
        {stars}
        </ul>
        </div>
      );
   }
}
export default Star;
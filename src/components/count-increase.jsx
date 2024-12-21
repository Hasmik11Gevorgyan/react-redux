import { Component } from "react";
import "./count-increas.css"


export default class Count extends Component{
    constructor(props) {
        super(props);
        this.state = { 
          count: 0,
        };
      }
     increaseCount = () => {
        if(this.state.count >= 0){

        this.setState((prevState) => ({ count: prevState.count + 1 }));
      };}


      decreaseCount = () => {
        if(this.state.count >= 1 )this.setState((prevState) => ({ count: prevState.count - 1 }));
      };
    render(){
        return (
            <div className="count-increase">
               
               <span> Count : {this.state.count}  </span>
               <div className="btn-1">
               <button onClick={this.increaseCount}>+</button>
               <button onClick={this.decreaseCount}>-</button>
               </div>
            </div>
        )
    }
}
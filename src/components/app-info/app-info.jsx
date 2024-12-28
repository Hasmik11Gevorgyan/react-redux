import "./app-info.css"
import { Component } from "react"


export default  class AppInfo extends Component{
   render(){
    const { employees, increased } = this.props;
    return(
        <div className="appInfo">
            <h2>Data agency LTD</h2>
            <h3>Employee Count : {employees}</h3>
            <h3> People who will recieved a reward : {increased}</h3>
        </div>
    )
   }
}
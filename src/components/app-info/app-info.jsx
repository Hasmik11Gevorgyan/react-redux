import "./app-info.css"
import { Component } from "react"


export default  class AppInfo extends Component{
   render(){
    return(
        <div className="appInfo">
            <h2>Data agency LTD</h2>
            <h3>Employee Count : 0</h3>
            <h3> People who will recieved a reward : 0</h3>
        </div>
    )
   }
}
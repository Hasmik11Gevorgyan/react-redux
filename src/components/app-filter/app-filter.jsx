import "./app-filter.css"
import {Component} from "react"

export default class AppFilter extends Component{
    render(){
        return(
            <div className="app-filter ">
             <button>Employee</button>
             <button>Salary more than 1000$</button>
             <button>Promotion</button>
    
            </div>
        ) 
    }
}
import { Component } from "react"
import "./app-add-employee.css"

export default class AddEmployee extends Component{
    render(){
      return(
        <div className="add-employee">
  <input
  type="text"
  placeholder="Add new Employee"
  />
  <button> Add</button>
  <button className="btn">
    X
  </button>
        </div>
    )
    }
}
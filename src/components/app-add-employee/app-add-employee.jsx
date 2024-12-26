import { Component } from "react"
import "./app-add-employee.css"

export default class AddEmployee extends Component{
  
  constructor(props){
    super(props);
    const {data} = this.state.data
    this.state={
      name: "",
      salary:0 
    }
  }
 
  onInputValueChange =(e)=>{
    
    this.setState({
      [e.target.name]: e.target.value
    })
  }
 onSubmit = this.onSubmit.bind(this);

  onSubmit =(e)=>{
    this.setState([
      ({...data})
    ],
    {
      id:Math.random(),
      name:"",
      salary:"",
      increase:false
    }
      
      
    )
  }
  
    render(){
      return(
        <form
        onSubmit={this.onSubmit}
        className="add-employee">
        <h3>  Add new Employee</h3>
  <input
  type="text"
  value={this.state.name}
  placeholder="Employee name"
  name="name"
  onChange={this.onInputValueChange}
  />
  <input
  type="number"
  placeholder="Employee Salary"
  value={this.state.salary}
  name="salary"
  onChange={this.onInputValueChange}
  />
  <button 
  
  type="submit">
     Add
     </button>
  
        </form>
    )
    }
}
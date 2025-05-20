import { Component } from "react"
import "./app-add-employee.css"

export default class AddEmployee extends Component{
  
  constructor(props){
    super(props);
    this.state={
      name: "",
      salary:0 
    }
  }
 
  onInputValueChange =(e)=> { 
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onAddHandler = (e) => {
    e.preventDefault();
    if(this.state.name.length < 3 || !this.state.salary) return ;

    this.props.onAdd(this.state.name, this.state.salary);
    this.setState({
      name :"",
      salary :""
    })
  }
    render(){
      const {name,salary} = this.state
      return(
        <form
        onSubmit={this.onAddHandler}
        className="add-employee">
        <h3>  Add new Employee</h3>
  <input
  type="text"
  value={name}
  placeholder="Employee name"
  name="name"
  onChange={this.onInputValueChange}
  />
  <input
  type="number"
  placeholder="Employee Salary"
  value={salary}
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
import "./app.css"
import AppInfo from "../app-info/app-info";
import AppSearch from "../app-search/app-search";
import AppFilter from "../app-filter/app-filter";
import AddEmployee from "../app-add-employee/app-add-employee";
import AppEmployeeList from "../app-employee/app-employee-list/app-employee-list";
import  {Component} from "react"
import Count from "../count-increase";


 export default class App extends Component {
  render(){
  const data = [
    {
      id:1,
      name:"John Smith",
      salary:1000,
      increase: false
    },
    {
      id:2,
      name:"Alex Shepard",
      salary:900,
      increase: true
    },
    {
      id:3,
      name:"Adam Miller",
      salary:800,
      increase: false
    },
    {
      id:4,
      name:"Tomas Jekson",
      salary:680,
      increase: false
    },
    {
      id:5,
      name:"Mike Robson",
      salary:1700,
      increase: false
    }
  ]
  return (
    <div className="app">
      <Count/>
      <AppInfo/>
      
      <div  className="search-and-filter">
        <h2>Search and Filter</h2>
      <AppSearch/>
      <AppFilter/>
      </div>
      <AppEmployeeList data ={data}/>
      <AddEmployee/>
      
    </div>
  );
    }
  }
  
  
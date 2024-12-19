import "./app.css"
import AppInfo from "../app-info/app-info";
import AppSearch from "../app-search/app-search";
import AppFilter from "../app-filter/app-filter";
import AddEmployee from "../app-add-employee/app-add-employee";
import AppEmployeeList from "../app-employee/app-employee-list/app-employee-list";




export default  function App() {
  const data = [
    {
      id:1,
      name:"John Smith",
      salary:1000
    },
    {
      id:2,
      name:"Alex Shepard",
      salary:900
    },
    {
      id:3,
      name:"Adam Miller",
      salary:800
    },
    {
      id:4,
      name:"Tomas Jekson",
      salary:680,
    },
    {
      id:5,
      name:"Mike Robson",
      salary:1700,
    }
  ]
    return (
      <div className="app">
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
  
  
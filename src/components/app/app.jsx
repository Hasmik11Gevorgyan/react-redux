import "./app.css"
import AppInfo from "../app-info/app-info";
import AppSearch from "../app-search/app-search";
import AppFilter from "../app-filter/app-filter";
import AddEmployee from "../app-add-employee/app-add-employee";




export default  function App() {
    return (
      <div className="app">
        <AppInfo/>
        <div  className="search-and-filter">
          <h2>Search and Filter</h2>
           <AppSearch/>
        <AppFilter/>
        </div>
        <AddEmployee/>
      
      </div>
    );
  }
  
  
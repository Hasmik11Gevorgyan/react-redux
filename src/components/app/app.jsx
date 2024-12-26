import "./app.css"
import AppInfo from "../app-info/app-info";
import AppSearch from "../app-search/app-search";
import AppFilter from "../app-filter/app-filter";
import AddEmployee from "../app-add-employee/app-add-employee";
import AppEmployeeList from "../app-employee/app-employee-list/app-employee-list";
import  {Component} from "react"
// import Count from "../count-increase";


 
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "John Smith",
          salary: 850,
          increase: false
        },
        {
          id: 2,
          name: "Alis Hohlan",
          salary: 920,
          increase: false
        },
        {
          id: 3,
          name: "Tom Jackson",
          salary: 645,
          increase: false
        },
        {
          id: 4,
          name: "Adam Stom",
          salary: 1245,
          increase: false
        },
        {
          id: 5,
          name: "Ariana Shevchuk",
          salary: 877,
          increase: false
        },
      ]
    }
  }

   deleteEmployee = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    });
  }

  render() {
    return (
      <div className="app">
        <AppInfo />
        <div className="search-and-filter ">
          <h3>Search or Filter</h3>
          <AppSearch />
          <AppFilter />
        </div>
        <AppEmployeeList
          data={this.state.data}
          onDelete={this.deleteEmployee}
        />
        <AddEmployee onSubmit={this.onSubmit}/>
      </div>
    );
  }
}
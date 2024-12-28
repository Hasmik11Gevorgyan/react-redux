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
          increase: false,
          rise: false,
        },
        {
          id: 5,
          name: "Ariana Shevchuk",
          salary: 877,
          increase: false,
          rise: false,
        },
      ],
       term: "",
      filter: "all"
    };
    this.employeeId =3
  }

   onDeleteEmployee = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    });
  }

  onAddNewEmployee = (name, salary) => {
    this.setState(({ data }) => {
      return {
        data: [
          ...data,
          {
            id: this.employeeId++,
            name,
            salary,
            increase: false,
            rise: false
          }
        ]
      }
    });
  }
    // onToggleIncrease = (id) => {
    //   this.setState(({ data }) => ({
    //     data: data.map(item => {
    //       if (item.id === id) return { ...item, increase: !item.increase }
    //       return item;
    //     })
    //   }));
    // }
    // onToggleRise = (id) =>{
    //   this.setState(({ data }) => ({
    //     data: data.map(item => {
    //       if (item.id === id) return { ...item, rise: !item.rise }
    //       return item;
    //     })
    //   }));
    // }
      
    onToggleProperty = (id, property) => {
      this.setState(({ data }) => ({
        data: data.map(item => 
          item.id === id ? { ...item, [property]: !item[property] } : item
        ),
      }));
    };
    // this.onToggleProperty(id, 'increase');
    // this.onToggleProperty(id, 'rise');
      onEmployeeSearch = (items, term) => {
        if (term.length === 0) return items;
    
        return items.filter(item => {
          return item.name.indexOf(term) > -1;
        });
      }
    
      onUpdateSearch = (term) => {
        this.setState({ term });
      }
    
      onEmployeeFilter = (items, filter) => {
        switch (filter) {
          case "rise":
            return items.filter(item => item.rise);
          case "salary":
            return items.filter(item => item.salary > 1000);
          default:
            return items;
        }
      }
    
      onFilterSelect = (filter) => {
        this.setState(({ filter }));
      }
    
  
  render() {
    const { data, term, filter } = this.state;
    const {
      onUpdateSearch,
      onFilterSelect,
      onEmployeeFilter,
      onEmployeeSearch,
      onDeleteEmployee,
      // onToggleIncrease,
      // onToggleRise,
      onToggleProperty,
      onAddNewEmployee
    } = this;
    const employees = data.length;
    const increased = data.filter(e => e.increase).length;
    const visibleData = onEmployeeFilter(onEmployeeSearch(data, term), filter);
    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased}/>
        <div className="search-and-filter ">
          <h3>Search or Filter</h3>
          <AppSearch onUpdateSearch={onUpdateSearch}/>
          <AppFilter filter={filter} onFilterSelect={onFilterSelect}/>
        </div>
        <AppEmployeeList
          data={visibleData}
          onDelete={onDeleteEmployee}
          onToggleProperty = {onToggleProperty}
          // onToggleIncrease={onToggleIncrease}
          // onToggleRise={onToggleRise}
        />
        <AddEmployee onAdd={onAddNewEmployee} />
      </div>
    );
  }
}
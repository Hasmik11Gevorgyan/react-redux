import "./app-filter.css"
import {Component} from "react"

export default class AppFilter extends Component{
    render(){
        const { filter, onFilterSelect } = this.props;
        const btnsData = [
          { name: "all", label: "All Employees" },
          { name: "rise", label: "Rise" },
          { name: "salary", label: "Salary > 1000$" },
        ];
    
        const btns = btnsData.map(({ name, label }) => {
          const active = filter === name;
          return (
            <button
              type="button"
              key={name}
              className={active ? "active_btn" : null}
              onClick={() => onFilterSelect(name)}
            >
              {label}
            </button>
          )
        });
    
        return (
          <div className="app-filter">
            {btns}
          </div>
        );
      }
}
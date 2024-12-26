import AppEmployeeItem from "../app-employee-item/app-employee-item"
import "./app-employee-list.css"
import { Component } from "react";


export default class AppEmployeeList extends Component{
    render(){
        const { data, onDelete } = this.props;
        const employees = data.map(item => {
          return <AppEmployeeItem
            key={item.id}
            {...item}
            onDelete={() => onDelete(item.id)}
          />;
        });
        
        return (
            <>
              {
              data.length ? 
                <div className="app-employee-list">
                  {employees}
                </div>
                :
                null
              }
            </>
          );
        }
    }

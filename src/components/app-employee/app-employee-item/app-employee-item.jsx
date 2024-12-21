import "./app-employee-item.css";
import { MdDelete } from 'react-icons/md';
import { FaCoins } from 'react-icons/fa'
import { Component } from "react";



export default class AppEmployeeItem extends Component{
   render(){
    const {name,salary,increase} = this.props;
    
    return(
        <div className="app-employ-item ">
        <h3 className="employee-name">{name} </h3>
        <h3 className="employee-salary">
            {salary}
            </h3>
        <div className="employee-btns">
        <button>
        <FaCoins size={24} color="goldenrod" />
        </button>
        <button>
        <MdDelete size={24} color="red" />
        </button>
        </div>
        </div>
    )
   }
}
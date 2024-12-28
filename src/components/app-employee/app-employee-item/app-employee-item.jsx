import "./app-employee-item.css";
import { MdDelete } from 'react-icons/md';
import { FaCoins } from 'react-icons/fa'
import { Component } from "react";



export default class AppEmployeeItem extends Component{
   render(){
    const {
      name,
      salary,
      onDelete,
      // onToggleIncrease,
      // onToggleRise,
      onToggleProperty,
      increase,
      rise 
      } = this.props;
    let classes = "app-employ-item " ;
    if(increase) classes += "increased"
    
    return(
        <div className={classes}>
        <h3 onClick={onToggleProperty} className="employee-name">{name} </h3>
        <h3 className="employee-salary">
            {salary}
            </h3>
        <div className="employee-btns">
        <button onClick={onToggleProperty}>
        <FaCoins size={24} color="goldenrod" />
        </button>
        <button onClick={onDelete}>
        <MdDelete size={24} color="red" />
        </button>
        <button
            className="fav"
            style={rise ? { display: "unset" } : {display: "none"}}
          >
            <svg fill="gold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M4.982,24,3.66,23l2.394-7.261L0,11.731V10H7.946l2.162-7h1.784l2.162,7H22v1.724l-6.056,4.119,2.438,7.175-1.391.961L11,19.348ZM17.827,7.926l-.481-.362.869-2.717L16,3.615V3h2.9l.785-3h.647l.784,3H24v.611L21.8,4.884l.884,2.686-.5.349L20.01,6.238Z" />
            </svg>
          </button>
        </div>
        </div>
    )
   }
}
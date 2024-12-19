import "./app-employee-item.css";
import { MdDelete } from 'react-icons/md';
import { FaCoins } from 'react-icons/fa'



export default function AppEmployeeItem({name,salary}){
    return(
        <div className="app-employ-item">
        <h3 className="employee-name">{name} </h3>
        <h3 className="empoyee-salary">
            {salary}
            </h3>
        <div className="empoyee-btns">
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
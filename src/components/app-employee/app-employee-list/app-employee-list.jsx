import AppEmployeeItem from "../app-employee-item/app-employee-item"
import "./app-employee-list.css"

export default function AppEmployeeList({data}){
    return(
        <div className="app-employee-list">
            {
                data.map(item => {
                    return <AppEmployeeItem key={item.id} {...item}/>}
                )
            }
        
        
        </div>
    )
}
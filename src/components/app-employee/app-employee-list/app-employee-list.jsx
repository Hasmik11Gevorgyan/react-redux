import AppEmployeeItem from "../app-employee-item/app-employee-item"
import "./app-employee-list.css"
import { Component } from "react";


export default class AppEmployeeList extends Component{
    render(){
        const {data} = this.props
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
}
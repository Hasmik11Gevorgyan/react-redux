import "./app-search.css"
import { Component } from "react"



export default  class AppSearch extends Component{
   render(){
    return(
        <div className="appSearch">
  <input
  type="search"
  placeholder="Type here..."
  />
  <button> Search  </button>
        </div>
    )
   }
}
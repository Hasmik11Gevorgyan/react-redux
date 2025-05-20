import "./app-search.css"
import { Component } from "react"



export default  class AppSearch extends Component{
    constructor(props) {
        super(props);
        this.state = {
          term: ""
        }
      }
      onSearch = (e) => {
        this.setState({ term: e.target.value });
        this.props.onUpdateSearch(e.target.value);
      }
    render(){
    return(
        <div className="appSearch">
  <input
  type="search"
  placeholder="Type here..."
  value ={this.state.term}
  onChange = {this.onSearch}
  />
  
        </div>
    )
   }
}
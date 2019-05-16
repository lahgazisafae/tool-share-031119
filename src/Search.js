import React from 'react';

class Search extends React.Component{

    constructor(){
      super()
      console.log("Search component constructed!")

    }
    componentDidMount(){

      console.log("Search Component Mounted! ")

    }

    render(){
        return(
            <div className="ui icon input">
            <i className="search icon"></i>
            <input type="text" placeholder="Search..." onChange={this.props.handleSearch}/>
          </div>
        )
    }
        

    
}
export default Search;

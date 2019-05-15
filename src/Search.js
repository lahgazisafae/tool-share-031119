import React from 'react';

function Search(props){

   
        return(
            <div className="ui icon input">
            <i className="search icon"></i>
            <input type="text" placeholder="Search..." onChange={props.handleSearch}/>
          </div>
        )
        

    
}
export default Search;

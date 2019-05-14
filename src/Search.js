import React from 'react';

class Search extends React.Component{


    render() {
        return(
            <div className="ui disabled icon input">
            <i className="search icon"></i>
            <input type="text" placeholder="Search..."/>
          </div>
        )
        

    }
}
export default Search;

import React from 'react';
import SavedToolsContainer from './SavedToolsContainer'

class Sidebar extends React.Component{


    render() {
        return(
            <div className="ui right sidebar inverted vertical menu">
                <SavedToolsContainer /> 
        
            </div>

        )
    
    }


}
export default Sidebar;

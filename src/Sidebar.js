import React from 'react';
import SavedToolsContainer from './SavedToolsContainer'

class Sidebar extends React.Component{


    render() {
        return(
            <div className="ui right sidebar visible">
                <SavedToolsContainer /> 
        
            </div>

        )
    
    }


}
export default Sidebar;

import React from 'react';
import SavedToolsContainer from './SavedToolsContainer'

function Sidebar (props){

        return(
            <div className="ui right sidebar visible ">
                <SavedToolsContainer savedTools={props.savedTools} handleSave={props.handleSave}/> 
            </div>

        )
    
}

export default Sidebar;

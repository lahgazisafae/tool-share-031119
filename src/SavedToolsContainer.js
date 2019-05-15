import React from 'react';
import ToolCard from './ToolCard'

function SavedToolsContainer (props){
    
        return props.savedTools.map(tool=> <ToolCard toolCard={tool} handleSave={props.handleSave}/>)

}
export default SavedToolsContainer;

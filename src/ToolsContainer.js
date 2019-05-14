import React from 'react';
import ToolCard from './ToolCard'

function ToolsContainer(props){
   
    return(
        props.tools.map(tool=> <ToolCard toolCard={tool} handleSave={props.handleSave} />)

    );


}

export default ToolsContainer;

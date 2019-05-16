import React from 'react';
import ToolCard from './ToolCard'

class ToolsContainer extends React.Component{
   

    componentDidUpdate(){

        console.log("Tool Container updated? ")
    }

    render(){
    return(
        this.props.tools.map(tool=> <ToolCard toolCard={tool} handleSave={this.props.handleSave} />)

    );
    }


}

export default ToolsContainer;

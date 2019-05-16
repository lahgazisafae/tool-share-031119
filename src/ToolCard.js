import React from 'react';

class ToolCard extends React.Component{


    componentDidUpdate(){

        console.log("Tool Card updated!")
    }

    componentWillUnmount(){
        console.log("Tool Unounted!")
    }
    
    render(){

       return (
            <div className="ui card">
            <div className="image">
                <img src={this.props.toolCard.image}/>
            </div>
            <div className="content">
                <a className="header">{this.props.toolCard.tool}</a>
                <div className="meta">
            </div>
                <div className="description">
                {this.props.toolCard.description}
                </div>
            </div>
            <div className="extra content">
               <button onClick={()=>this.props.handleSave(this.props.toolCard.id)}>{this.props.toolCard.saved ?  "Unsave": "Save" } </button>
            </div>
        </div>
        )
       }
    }



export default ToolCard;

import React from 'react';

function ToolCard(props){
    console.log("props from tool cards", props.toolCard.image)
       return (
            <div className="ui card">
            <div className="image">
                <img src={props.toolCard.image}/>
            </div>
            <div className="content">
                <a className="header">{props.toolCard.tool}</a>
                <div className="meta">
            </div>
                <div className="description">
                {props.toolCard.description}
                </div>
            </div>
            <div className="extra content">
               <button onClick={()=>props.handleSave(props.toolCard.id)}>{props.toolCard.saved ?  "Unsave": "Save" } </button>
            </div>
        </div>
        )
    }



export default ToolCard;

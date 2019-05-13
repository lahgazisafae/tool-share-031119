import React from 'react';


class ToolCard extends React.Component{

    constructor(){
        super()
        this.state={
            toolImg: "data:image/webp;base64,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",
            toolName: "Bike Pump", 
        }
    }

    render() {

        return (
            <div className="ui card">
            <div className="image">
                <img src={this.state.toolImg}/>
            </div>
            <div className="content">
                <a className="header">{this.state.toolName}</a>
                <div className="meta">
            </div>
                <div className="description">
                Kristy is an art director living in New York.
                </div>
            </div>
            <div className="extra content">
                <a>
                <i className="user icon"></i>
                22 Friends
                </a>
            </div>
        </div>
        )

    }


}
export default ToolCard;

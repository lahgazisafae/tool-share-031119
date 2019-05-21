import React from 'react';


class NewToolCard extends React.Component{

    render(){
        return(
    <div class="ui card">
        <form class="ui form" onSubmit ={this.props.handleNewTool}>
        <div class="field">
            <label>Tool Name</label>
            <input type="text" name="tool" />
        </div>
        
        <div class="field">
            <label>Lender Name</label>
            <input type="text" name="lenderName" />
        </div>
        <div class="field">
            <label>Contact Email</label>
            <input type="text" name="contactEmail" />
        </div>
        <div class="field">
            <label>Image</label>
            <input type="text" name="image" />
        </div>
        <div class="field">
            <label>Instructions</label>
            <textarea rows="2"></textarea>
        </div>
        <button class="ui button" type="submit">Submit</button>
        </form>
    </div>
        )

    }

}

export default NewToolCard;
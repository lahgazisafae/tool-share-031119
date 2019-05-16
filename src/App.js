import React from 'react';
import ToolsContainer from './ToolsContainer'
import Search from './Search';
import Sidebar from './Sidebar';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

class App extends React.Component{

  constructor(){
    console.log("App constructed !")
    super()
    this.state = {
      tools: [],
      searchTerm: ""
    }
  }

  componentDidMount(){
    console.log("App component Mounted!")
    fetch('http://localhost:3000/tools')
    .then(res=> res.json())
    .then(toolsData => this.setState({tools:toolsData}))
  }

  

  getSearchTools(){

    return this.state.tools.filter(tool=> {

     if( tool.tool.toLowerCase().includes(this.state.searchTerm.toLowerCase()) && !tool.saved)
      return true
    })

  }

  getSavedTools(){
    return this.state.tools.filter(tool=> (tool.saved))

  }

  handleSearch= (e)=>{

    this.setState({
      searchTerm: e.target.value
    }, ()=>console.log("was state changed?",this.state.searchTerm))
    
  }

  handleSave =(id)=>{

    console.log("Save Button Pressed!")

    //find individual tool card
    //change save boolean
    //pass in new state to setState()
    
    let newToolsArray = this.state.tools.map(tool=>{
      if(tool.id === id){
        tool.saved = !tool.saved
        return tool
      }
      else{
        return tool
      }
    })

    this.setState({
        tools: newToolsArray
      })
    //example of pessimistic rendering
    // persistSaved()
    // .then(this.setState({
    //   tools: newToolsArray
    // }))
  
  }

//   persistSaved(){
    //      MAKING POST REQUEST

//   }
  render(){
  return (
    <div >
      <Search handleSearch={this.handleSearch}/> 
      <ToolsContainer tools={this.getSearchTools()} handleSave={this.handleSave}/> 
      <Sidebar savedTools={this.getSavedTools()} handleSave={this.handleSave}/> 

    </div>
  );
  }
}

export default App;

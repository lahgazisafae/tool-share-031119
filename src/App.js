import React from 'react';
import ToolsContainer from './ToolsContainer'
import Search from './Search';
import Sidebar from './Sidebar';
import AboutUs from './AboutUs';
import Navbar from './Navbar';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import NewToolCard from './NewToolCard';

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      tools: [ {
        id:"1",
        "tool": "Bike Pump", 
        "lender_name": "Susu",
        "instructions": "Attach nozzle to bike wheel and clamp closed, lift handle to pump air",
        "image": "https://images-na.ssl-images-amazon.com/images/I/51mZWP90q3L._SY741_.jpg",
        "contact": "susu@gmail.com",
            saved: false
        },
        {
          id:"2",
            "tool": "Oil Change Tools", 
            "lender_name": "Fifi",
            "instructions": "Change Oil",
            "image": "https://images-na.ssl-images-amazon.com/images/I/71Ch1qq4mZL._SL1500_.jpg",
            "contact": "fifi@gmail.com"
            ,
            saved: false
            },
            {
              id:"3",
            "tool": "Dewalt Cordless Drill", 
            "lender_name": "Naga",
            "instructions": "Add different tips and drill away",
            "image": "https://images-na.ssl-images-amazon.com/images/I/71KNU4RipCL._SL1200_.jpg",
            "contact": "fifi@gmail.com"
            ,
            saved: false
            },
    
            {
            id:"4",
            "tool": "Dewalt Tool Set", 
            "lender_name": "Naga",
            "instructions": "Full tool set, different uses",
            "image": "https://images-na.ssl-images-amazon.com/images/I/91RRLv1XF9L._SX679_.jpg",
            "contact": "fifi@gmail.com",
            saved: false
        },
      ],
      color:'red'
    }
  }


  handleNewTool(e){

    //create new tool
    //add to state!


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
    

  }

  render(){
  return (
    <div >

      <Navbar />
      <Route exact path="/about_us" component={AboutUs}/>

      <Route exact path="/" render={()=>{
        return (
          <div>
            <Search /> 
            <ToolsContainer tools={this.state.tools} handleSave={this.handleSave}/> 
            <Sidebar /> 
          </div>
        ) 
      }}/>
      <Route exact path="home" component={ToolsContainer}/>
      <Route exact path="/new_tool" render={()=><NewToolCard handleNewTool={this.handleNewTool}/>}/>
      

    </div>
  );
  }
}

export default App;

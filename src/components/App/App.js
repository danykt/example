import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Bio from '../Bio/Bio';
import Projects from '../Projects/Projects.js'
import Contact from '../Contact/Contact.js';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {currentTab: 'bio'};
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(tab){
    this.setState({currentTab: tab});
  }
  

  render(){
    let current = this.state.currentTab;
    return (
      <div className="App">
        <Navbar changeTab={this.changeTab}/>
        {current === 'bio'?  <Bio/>
        : current === 'projects'? <Projects/> 
        : <Contact/>}
      </div>

    );
  }

}

export default App;

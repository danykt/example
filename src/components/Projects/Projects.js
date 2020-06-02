import React from 'react';
import ProjectsControl from './ProjectControl/ProjectsControl.js'
import Projectview from './Projectview/Projectview';
import {isMobile} from 'react-device-detect';
import {ProjectsArray} from '../../util/ProjectInfo.js';
import {animateScroll as scroll} from 'react-scroll';



class Projects extends React.Component{
	constructor(props){
		super(props);
		this.state = {selectedProject: ProjectsArray[0], visible: true}
		this.chooseProject = this.chooseProject.bind(this);
	}

      handleVisibility = () =>{
        this.setState((prevState) => ({ visible: !prevState.visible}));
      }

	chooseProject(projectKey){
        
        scroll.scrollToTop();
        
        setTimeout(() => this.handleVisibility(),100);
		this.setState({selectedProject: ProjectsArray[projectKey]});
        setTimeout(() => this.handleVisibility(),200);

	}

	render(){
   // if(!isMobile){
    return (
          <div>
            <Projectview selectedProject={this.state.selectedProject} visible={this.state.visible}/>
            <ProjectsControl projects={ProjectsArray} chooseProject={this.chooseProject}/>
          </div>
        );
  //  }
        // return(
        //    <div>
        //     <ProjectsControl projects={ProjectsArray} chooseProject={this.chooseProject}/>
        //     <Projectview selectedProject={this.state.selectedProject} visible={this.state.visible}/>
        //   </div>
        // )
    
  }


}

export default Projects;
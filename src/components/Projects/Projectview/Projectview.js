import React, {createRef} from 'react';
import { Form, Popup, Sticky, Grid, Image, Transition, Segment, Button, List, Flag, Header, Icon} from 'semantic-ui-react'
import './Projectview.css';
import {isMobile} from 'react-device-detect';
import {Transitions} from '../../../util/Transitions.js'


class ProjectView extends React.Component{
 state = { animation: Transitions[12], duration: 200, visible: this.props.visible }


  handleChange = (e, { name, value }) => this.setState({ [name]: value })


  procesTechnologyIcons(){
    return this.props.selectedProject.technologyIcons.map(technology => {
      return (
        <Popup 
        content={technology.iconName}
        trigger={
          <List.Item>
            <Icon circular={true} name={technology.iconName} inverted color={technology.iconColor}/>
          </List.Item>
        }/>
        )
    });
  }

  renderTechnologies(){
    return(
          <List horizontal={true} verticalAlign='middle'>
             {this.procesTechnologyIcons()} 
          </List>
          )     
  }

  renderProjectInfo(){
    let projectInfo = this.props.selectedProject;
  	return (
            <div> 

              <Header id="project-title">{projectInfo.heading}</Header>
              <Header id="project-date">{projectInfo.date}</Header>
              <p id="project-description">{projectInfo.description}</p>
              <Button centered id="link-button" inverted color="black" as="a" href={projectInfo.link} target="_blank"> Learn More </Button>
            </div>
          	);
  }
  

  renderProject(){
    return (
          <Segment piled id="project">
          {this.renderProjectInfo()}
          </Segment>
    )
  }

  renderTransition(){
    const { animation, duration, visible } = this.state
    return(
      <div>
          <Transition.Group animation={animation} duration={duration}>
            {this.props.visible && (
              <Segment raised textAlign="center">
              <Header> Technologies used </Header>
               {this.renderTechnologies()}
               </Segment>
            )}
          </Transition.Group>
      </div>
    )
  }


  render() {


    
       return (
      <Grid centered={!isMobile} columns={2} stackable>
        <Grid.Row>
        <Grid.Column width={8}>
         
         {isMobile? this.renderTransition(): this.renderProject()}
        </Grid.Column>

        <Grid.Column width={3}>
          { isMobile? this.renderProject(): this.renderTransition()}
        </Grid.Column>
        </Grid.Row>
      </Grid>
      )
   

  }

}

export default ProjectView;
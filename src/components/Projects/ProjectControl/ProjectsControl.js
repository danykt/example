import React from 'react';
import { Image, List, Segment, Grid, Icon, Dropdown, Header, Item } from 'semantic-ui-react';
import {isMobile} from 'react-device-detect';
import './ProjectControl.css';
import {Optionsdropdown} from '../../../util/Optionsdropdown.js'



class ProjectsControl extends React.Component{

	constructor(props){
		super(props);
		this.state = {selectedPlayer: "1"};
		this.handleClick = this.handleClick.bind(this);
	}
	handleChangeDropdown(e, data){
		this.props.chooseProject(data.value);
	}


	handleClick(key)
	{
		this.props.chooseProject(key);
	}

	renderProjects(arr){
		return arr.map(project =>{
			let projectKey = project.key;
			let iconInfo = project.technologyIcons[0];
		    		return(
		    			<List.Item  onClick={this.handleClick.bind(this,projectKey)}>
					      <Icon name={iconInfo.iconName} color={iconInfo.iconColor}/>
					      <List.Content>
					        <List.Header>{project.heading}</List.Header>
					      </List.Content>
					    </List.Item>
		    		)
		 });

	}
	renderDropdownMenu(){
		return this.props.projects.map(project => {
			return(
				<Dropdown.Item icon={project.technologyIcons[0].iconName} text={project.heading} />

			)
		})
	}
	render(){
			let firstArr = this.props.projects.filter(project => project.key <5);
			let secondArr = this.props.projects.filter(project => project.key >=5);
			if(!isMobile){
			return (
			     <Segment>
			      <Grid columns={2} relaxed="very" stackable>
			        <Grid.Column>
			       		<List animated size="massive" verticalAlign="middle">
			        	{this.renderProjects(firstArr)}
			         	</List>

			        </Grid.Column>

			        <Grid.Column>
			            <List animated size="massive" verticalAlign="middle">
			          	{this.renderProjects(secondArr)}
			        	</List>
			        </Grid.Column>
			      </Grid>
			      </Segment>
			      );
			}else{
				return (
					<div id="dropdown">
					  <Dropdown 
					  selection 
					  options={Optionsdropdown} 
					  placeholder="Choose Project"
					  onChange={this.handleChangeDropdown.bind(this)}

					  />
					  </div>

				)
			}

	}

}

export default ProjectsControl;
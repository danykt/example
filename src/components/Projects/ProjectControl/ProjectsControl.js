import React from 'react';
import { Image, List, Segment, Grid, Icon, Dropdown, Header, Item, Card } from 'semantic-ui-react';
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

	// renderProjects(arr){
	// 	return arr.map(project =>{
	// 		let projectKey = project.key;
	// 		let iconInfo = project.technologyIcons[0];
	// 	    		return(
	// 	    			<List.Item  onClick={this.handleClick.bind(this,projectKey)}>
	// 				      <Icon name={iconInfo.iconName} color={iconInfo.iconColor}/>
	// 				      <List.Content>
	// 				        <List.Header>{project.heading}</List.Header>
	// 				      </List.Content>
	// 				    </List.Item>
	// 	    		)
	// 	 });

	// }
	// renderDropdownMenu(){
	// 	return this.props.projects.map(project => {
	// 		return(
	// 			<Dropdown.Item icon={project.technologyIcons[0].iconName} text={project.heading} />

	// 		)
	// 	})
	// }

	renderCards(){
		return this.props.projects.map(project => {
			let iconInfo = project.technologyIcons[0];
			let firstParagraph = project.description.split('.')[0];
			return(
				<Card color={iconInfo.iconColor} onClick={this.handleClick.bind(this,project.key)} raised inverted>
					<Image  src={project.imageSrc} wrapped ui={true}/>
					<Card.Content>
					<Card.Header>
					{project.heading}
					</Card.Header>
					<Card.Meta> 
						{project.date}
					 </Card.Meta>
					<Card.Description>
						{firstParagraph}
					</Card.Description>
					</Card.Content>
				</Card>

				)
		})
	}
	render(){
			let firstArr = this.props.projects.filter(project => project.key <5);
			let secondArr = this.props.projects.filter(project => project.key >=5);
			if(!isMobile){
			return (
			     // <Segment>
			     //  <Grid columns={2} relaxed="very" stackable>
			     //    <Grid.Column>
			     //   		<List animated size="massive" verticalAlign="middle">
			     //    	{this.renderProjects(firstArr)}
			     //     	</List>

			     //    </Grid.Column>

			     //    <Grid.Column>
			     //        <List animated size="massive" verticalAlign="middle">
			     //      	{this.renderProjects(secondArr)}
			     //    	</List>
			     //    </Grid.Column>
			     //  </Grid>
			     //  </Segment>
			     <Card.Group centered>{this.renderCards()}</Card.Group>
			       );
			}else{
				return (
					<div id="dropdown">
					  <Dropdown 
					  fluid
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
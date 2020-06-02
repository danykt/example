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



	renderCards(){
		return this.props.projects.map(project => {
			let iconInfo = project.technologyIcons[0];
			let firstParagraph = project.description.split('.')[0];
			return(
				<Card onClick={this.handleClick.bind(this,project.key)} raised>
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

			//if(!isMobile){
			return (

			     <Card.Group centered>{this.renderCards()}</Card.Group>
			       );
			// }else{
			// 	return (
			// 		<div id="dropdown">
			// 		  <Dropdown 
			// 		  fluid
			// 		  selection 
			// 		  options={Optionsdropdown} 
			// 		  placeholder="Choose Project"
			// 		  onChange={this.handleChangeDropdown.bind(this)}

			// 		  />
			// 		  </div>

			// 	)
			// }

	}

}

export default ProjectsControl;
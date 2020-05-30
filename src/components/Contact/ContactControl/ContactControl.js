import React from 'react';
import './ContactControl.css';
import {Grid, Segment, Header, Icon, Menu, Button} from 'semantic-ui-react';
import {isMobile} from 'react-device-detect';



class ContactControl extends React.Component{
	constructor(props){
		super(props);
		this.state = {selectedContactItem: "1"};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(key)
	{
		this.props.chooseContactItem(key);
	}

	renderContactButtons(){
		return this.props.contactItems.map(contact => {
			return (
				<Button size="big" 
				onClick={this.handleClick.bind(this, contact.key)}
				circular id="button-icon" color={contact.color} 
				icon={contact.iconName}/>);

		})
	}



	renderContactItems(){
		if(!isMobile){
		return this.props.contactItems.map(contact =>{
			return (
				<Grid.Row columns={2} onClick={this.handleClick.bind(this,contact.key)}>
					<Grid.Column width={4}>
						<Icon name={contact.iconName} color={contact.color} size="huge"/>
					</Grid.Column>
					<Grid.Column width={8}>
						<Header textAlign="left">{contact.description}</Header>
					</Grid.Column>
				</Grid.Row>

				)
		})
		}else{
			return (
					<div className="buttons-segment">{this.renderContactButtons()}</div>
				)
		}
	}

	renderInfoList(){
		return(
			<Segment>
				<Header as="h1"> 
					Contact me 
					<Header.Subheader> 
						Hablas espanol? Yo tambien contactame.
					</Header.Subheader>
				</Header>
				<Grid>{this.renderContactItems()}</Grid>
			</Segment>

			)
	}

	render(){
		return(
				<Grid.Column>
					{this.renderInfoList()}
				</Grid.Column>

			)
	}
}

export default ContactControl;
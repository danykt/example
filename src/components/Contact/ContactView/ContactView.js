import React from 'react';
import {Grid, Segment, Transition, Header, Card, Image, Icon} from 'semantic-ui-react';
import {Transitions} from '../../../util/Transitions.js'



class ContactView extends React.Component{
	 state = { animation: this.props.contactViewAnimation, duration: 200, visible: this.props.visible }

	 renderContactCard(){	 	
	 	let contactInfo = this.props.selectedContactItem;
	 	return(

			  <Card centered={true}>
			    <Image as="a" 
			    size="medium" 
			    src={contactInfo.image}
			    href={contactInfo.value}
			    target={'_blank'}
			    wrapped ui={false} />
			    <Card.Content>
			      <Card.Header>{contactInfo.trimLink}</Card.Header>
			    </Card.Content>
			  </Card>

	 		)

	 }

	 renderContactInfo(){
	 	let { duration, visible } = this.state;
  		let randAnimation = Transitions[Math.floor((Math.random()*24))];
	 	return(
	 		<Grid>
	 			<Grid.Row>
	 			<Grid.Column height={5}>
	 	        <Transition.Group animation={randAnimation} duration={duration}>
	            {this.props.visible && (
	 				    <div>{this.renderContactCard()}</div>

	 		            )}
	          	</Transition.Group>
	          	</Grid.Column>
	 			</Grid.Row>
	 		</Grid>

	 		)
	 }


  	render(){
  		return(
  			<Grid.Column>
	              <Segment raised>
	              <Header> How can I help you today? </Header>
	               	{this.renderContactInfo()}
	               </Segment>
			</Grid.Column>

  			)
  	}
}

export default ContactView;
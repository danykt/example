import React from 'react';
import './Contact.css';
import {Grid, Segment, Header, Icon} from 'semantic-ui-react';
import ContactControl from './ContactControl/ContactControl.js';
import ContactView from './ContactView/ContactView.js';
import {Transitions} from '../../util/Transitions.js'


const contactItems = [
	{iconName: "mail", color:"blue", description: "Send me an email", image:"https://i.pcmag.com/imagery/lineups/06VF4ZcETlFMvRHqRu6dDX0-1.fit_lim.v_1569492704.jpg", key:0, trimLink: "labastidac@spu.edu", value: "mailto:labastidac@spu.edu", },
	{iconName: "facebook messenger", color:"green", description: "Send me a text message", image:"https://i.pcmag.com/imagery/lineups/058wej0cJo7iahFFFWTCRAg-1.fit_lim.v_1569492755.jpg", key:1, trimLink: "2064841458", value: "tel:2064841458"},
	{iconName: "linkedin", color:"blue", description: "Find me in linkedin", image:"https://cdn.lynda.com/course/5019795/5019795-637237727042920275-16x9.jpg", key:2, trimLink: "cesar-labastida-725079151", value: "https://www.linkedin.com/in/cesar-labastida-725079151"},
	{iconName: "github", color:"red", description: "Find on github", image:"https://github.blog/wp-content/uploads/2019/05/facebook-1200x630.png?fit=1203%2C633", key:3, trimLink: "danykt", value: "https://github.com/danykt"}
]

class Contact extends React.Component{
	constructor(props){
		super(props);
		this.state = {selectedContactItem: contactItems[0], visible: true}
		this.chooseContactItem = this.chooseContactItem.bind(this);
	}

      handleVisibility = () =>{
        this.setState((prevState) => ({ visible: !prevState.visible}));
      }


	chooseContactItem(contactKey){
		this.handleVisibility()
		this.setState({selectedContactItem: contactItems[contactKey]});
		 setTimeout(() => this.handleVisibility(),300);
	}



	render(){
		return (
			<Grid divided='vertically' stackable id="contact-grid">
				<Grid.Row columns={2}>
					<ContactControl contactItems={contactItems} chooseContactItem={this.chooseContactItem}/>
					<ContactView 
					selectedContactItem={this.state.selectedContactItem} 
					visible={this.state.visible}
					contactViewAnimation = {this.state.contactViewAnimation}
					/>
				</Grid.Row>
			</Grid>

			)
	}
}

export default Contact;
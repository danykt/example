import React from 'react';
import './Bio.css';
import { Grid, Transition, Header, Icon, Image, Card , Segment} from 'semantic-ui-react'
import Biocard from '../Biocard/Biocard';

class Bio extends React.Component{

 state = { animationHeader: 'fly right', durationHeader: 2000, visibleHeader: false,
 		   bioCardsArray : [
 		   	{animation: 'horizontal flip', 
 		   	duration: 2000,
 		   	title: "Place of Origin",
 		   	visible: false,
 		   	icon: "home",
 		   	header: "Background", 
 		   	description: 'Hello!, my name is Cesar Labastida and I am originally from a little town called fortin de las flores in the state of Veracruz Mexico. ',
 		   	imgSrc: 'https://66.media.tumblr.com/7f6b7dfc0176271f854c9279c58d6291/tumblr_oweg08iw9Y1s0zjivo1_1280.jpg'},
 		   	{animation: 'vertical flip', 
 		   	duration: 2000,
 		   	title: "Seattle Pacific Univesity",
 		   	visible: false,
 		   	icon: "book",
 		   	header: "Education", 
        	description: "I graduated from Seattle Pacific Univesity on December 2019. I recieved a bachelor's of Science degree with a major in Computer Science",
 		   	 imgSrc: "https://jobzology.com/wp-content/uploads/2019/05/SPU_2.png" },
 		   	{animation: 'drop', 
 		   	duration: 2000,
 		   	title: "Soccer",
 		   	visible: false,
 		   	icon: "soccer",
 		   	header: "Passion", 
       		description: "Besides programming, I also like to play and watch Soccer. Otherwise know as The Beautiful Game",
 		    imgSrc: "https://images.daznservices.com/di/library/GOAL/72/9d/lionel-messi-real-madrid-barcelona-el-clasico-laliga-23122017_98xpm09qvvmz199qibo7muusf.jpg?t=-2041061648&quality=60&w=1200&h=800"},
 		   	{animation: 'fly left', 
 		   	duration: 2000,
 		   	title: "Coffe and Reading",
 		   	visible: false,
 		   	icon: "coffee",
 		   	header: "Hobbies", 
        	description: " During my spare time I like to read philosophy books and drink coffee when it's rainy or ride my bike when sunny",
 		    imgSrc: "https://www.timeshighereducation.com/sites/default/files/person-reading-and-drinking-coffee.jpg"}
 		   ],
}


  handleHeaderVisibility = () =>
    this.setState((prevState) => ({ visibleHeader: !prevState.visibleHeader }))

    handleBioVisibility = (index) =>{
    	this.setState(prevState => {
    		const newArr = [...prevState.bioCardsArray];
    		newArr[index].visible = !newArr[index.visible]
    		return {bioCardsArray: newArr}
    	});
    }

    startPageAnimation(){
    	 this.handleHeaderVisibility();
    	setTimeout(() => this.handleBioVisibility(0),400);
    	setTimeout(() => this.handleBioVisibility(1),800);
    	setTimeout(() => this.handleBioVisibility(2),1200);
    	setTimeout(() => this.handleBioVisibility(3),1600);
    }

    componentDidMount(){
    	this.startPageAnimation();
    }

	animationHeader(){
		return(
		          <Transition.Group animation={this.state.animationHeader} duration={this.state.durationHeader}>
		            {this.state.visibleHeader && (
					    <Header as='h2' id="welcome">
			    			<Image circular 
                            src='https://media-exp1.licdn.com/dms/image/C4D03AQHZy-sKOlWOjQ/profile-displayphoto-shrink_200_200/0?e=1596067200&v=beta&t=ZKPxDMWF33Xx_JwQn_jm97MScHi0HSMIfi2UaWvnLfo' 
                            /> 
                            Welcome!
			  			</Header>)
		        	}
		          </Transition.Group>
			)
	}



	bioCard(bio){
		return <Biocard bio={bio}/>
	}

	cards(){
		return this.state.bioCardsArray.map(bio => {
			return  this.bioCard(bio)
			
		})
	}

	render(){
         return(
         <Segment.Group id="container" raised>
         	
         	<Segment id="welcome-segment">{this.animationHeader()}</Segment>
         	<Segment id="container">
				<Card.Group stackable centered >
					{this.cards()}
				</Card.Group>
         	</Segment>
            <Segment attached="bottom" id="bio-footer">@Cesar Labastida</Segment>
         </Segment.Group>
         )
		}
}

export default Bio;
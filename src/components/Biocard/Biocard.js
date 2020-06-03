import React from 'react';
import './Biocard.css';
import { Grid, Transition, Header, Icon, Image, Card , Reveal, Button, Modal} from 'semantic-ui-react'

const Biocard = (props) => (
			 <Transition.Group animation={props.bio.animation} duration={props.bio.duration}>
		            {props.bio.visible && (
					    <Card>
					      <Card.Header id="card-header">{props.bio.header}</Card.Header>
						  <Image src={props.bio.imgSrc} size="large"/>
						  
						    <Modal trigger={<Button attached="bottom" id="button-modal" inverted icon={props.bio.icon} content={props.bio.title}/>}>
							    <Modal.Header>{props.bio.header}</Modal.Header>
							    <Modal.Content image>
							      <Image wrapped size='massive' src={props.bio.imgSrc} />
							      <Modal.Description>
							        <Header as="h3" icon textAlign='center' className="card-header">
							        	<Icon name={props.bio.icon} circular/>
							        	<h2>{props.bio.title}</h2>
							        </Header>
							        <p className="modal-paragraph">
							          {props.bio.description}
							        </p>
							      </Modal.Description>
							    </Modal.Content>
							  </Modal>
						</Card>

					)
		        	}

		          </Transition.Group>

);

export default Biocard
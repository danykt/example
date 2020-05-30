import React, { Component } from 'react'
import { Menu, Segment, Icon} from 'semantic-ui-react'

export default class Navbar extends Component {
  state = {activeItem: 'bio'}

  handleItemClick = (e, {name}) => {
    this.props.changeTab(name);
    this.setState({activeItem: name}
    )};

  render() {
    const { activeItem } = this.state

    return (
        <Menu icon='labeled'>
        <Menu.Item
          name='bio'
          active={activeItem === 'bio'}
          onClick={this.handleItemClick}
        >
          <Icon name='user' />
          Bio
        </Menu.Item>

        <Menu.Item
          name='projects'
          active={activeItem === 'projects'}
          onClick={this.handleItemClick}
        >
          <Icon name='folder' />
          Projects
        </Menu.Item>

        <Menu.Item
          name='contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
        >
          <Icon name='phone' />
           Contact
        </Menu.Item>
      </Menu>
    )
  }
}
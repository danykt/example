import React, { Component } from 'react'
import { Menu, Segment, Icon} from 'semantic-ui-react'
import './Navbar.css';

export default class Navbar extends Component {
  state = {activeItem: 'bio'}

  handleItemClick = (e, {name}) => {
    let backgroundStyle = name === 'bio'? '#31708E' :( name === 'projects'? '#111c30': '#EEE2DC')
    document.body.style.backgroundColor = backgroundStyle;
    this.props.changeTab(name);
    this.setState({activeItem: name})
  };

  render() {
    const { activeItem } = this.state
    let menuStyle  = activeItem==='bio'? "navbar-bio" : (activeItem==='projects'? 'navbar-project' : 'navbar-contact')
    return (
        <Menu icon='labeled' id={menuStyle}>
        <Menu.Item
          id={activeItem === 'bio'? "menu-item-active": "menu-item"}
          name='bio'
          active={activeItem === 'bio'}
          onClick={this.handleItemClick}
        >
          <Icon id={activeItem === 'bio'? "navbar-icon-active": "navbar-icon"} name='user'  />
          Bio
        </Menu.Item>

        <Menu.Item
          id={activeItem === 'projects'? "menu-item-active": "menu-item"}
          name='projects'
          active={activeItem === 'projects'}
          onClick={this.handleItemClick}
        >
          <Icon id={activeItem === 'projects'? "navbar-icon-active": "navbar-icon"} name='folder' />
          Projects
        </Menu.Item>

        <Menu.Item
          id={activeItem === 'contact'? "menu-item-active": "menu-item"}
          name='contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
        >
          <Icon id={activeItem === 'contact'? "navbar-icon-active": "navbar-icon"} name='phone' />
           Contact
        </Menu.Item>
      </Menu>
    )
  }
}
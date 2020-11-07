import React from "react";
import { Button, Menu, Header, Icon} from 'semantic-ui-react'

const NavBar = () => {
  return (
    <Menu inverted size='small'>
    <Menu.Menu position='right'>
      <Header as='h2' color='grey' icon textAlign='center'>
        <Icon color='green' name='chart line'/>
        <Header.Content >INVESTING</Header.Content>
      </Header>          
    </Menu.Menu>

    <Menu.Menu position='right'>
      <Menu.Item>
        <Button inverted secondary primary>Sign Out</Button>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
  );
};

export default NavBar;

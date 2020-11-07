import { navigate } from "@reach/router";
import React from "react";
import firebase from "../../../firebase"
import { Button, Menu, Header, Icon} from 'semantic-ui-react'

const NavBar = () => {
  const handleSignOut = () => {
    firebase.auth().signOut().then(function() {
      navigate('login-page')
    }).catch(function(error) {
      alert("Unfortunaly we were unable to sign you out please try again")
    });
  }
  
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
        <Button onClick={handleSignOut} secondary inverted>Sign Out</Button>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
  );
};

export default NavBar;

import React, {useEffect} from "react";
import FormLogin from "./FormLogin"
import firebase from "../../firebase"
import { navigate } from '@reach/router'
import { Grid, Segment } from 'semantic-ui-react'

const LoginPage = () => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigate('/home-page');
      }
    })
  }, [])

  return (
    <Grid centered columns={2} divided>
      <Grid.Column>
        <Segment textAlign='center'><h2>Login</h2></Segment>
        <Segment>
          <FormLogin />
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default LoginPage;

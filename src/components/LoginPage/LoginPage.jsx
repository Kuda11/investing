import React, {useEffect} from "react";
import FormLogin from "./FormLogin"
import firebase from "../../firebase"
import { navigate } from '@reach/router'
import { Grid, Segment,Container } from 'semantic-ui-react'

const LoginPage = () => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigate('/home-page');
      }
    })
  }, [])

  return (
    <Container>
      <Grid centered divided>
        <Grid.Column>
          <Segment textAlign='center'><h2>Login</h2></Segment>
          <Segment>
            <FormLogin />
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default LoginPage;

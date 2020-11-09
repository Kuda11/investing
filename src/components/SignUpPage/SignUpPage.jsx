import React, { useEffect } from "react";
import FormSignUp from "./FormSignUp"
import { Grid, Segment } from "semantic-ui-react"
import { navigate } from '@reach/router'
import firebase from "../../firebase"

const SignUpPage = () => {
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
        <Segment textAlign='center'><h2>Sign Up</h2></Segment>
        <Segment>
          <FormSignUp />
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default SignUpPage;
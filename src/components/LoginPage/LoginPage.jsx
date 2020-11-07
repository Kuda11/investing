import React from "react";
import styles from "./LoginPage.module.scss";
import FormLogin from "./FormLogin"
import { Grid, Segment} from 'semantic-ui-react'

const LoginPage = () => {
  return (
      <Grid centered columns={2} divided>
        <Grid.Column>
          <Segment textAlign='center'><h2>Login</h2></Segment>
          <Segment>
            <FormLogin/>
          </Segment>
        </Grid.Column>
      </Grid>
  );
};

export default LoginPage;

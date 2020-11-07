import React from "react";
import FormSignUp from "./FormSignUp"
import { Grid, Segment} from 'semantic-ui-react'

const SignUpPage = () => {
  return (
    <>
      <Grid centered columns={2} divided>
        <Grid.Column>
          <Segment textAlign='center'><h2>Sign Up</h2></Segment>
          <Segment>
            <FormSignUp/>
          </Segment>
        </Grid.Column>
      </Grid>

    </>
  );
};

export default SignUpPage;
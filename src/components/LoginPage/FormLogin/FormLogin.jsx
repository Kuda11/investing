import React, { useCallback, useState } from "react";
import { Form, Input, Button } from 'semantic-ui-react'
import SocialFollow from './SocialFollow'
import { navigate } from '@reach/router'
import firebase from "../../../firebase"

const FormLogin = () => {
  let [password, setPass] = useState('')
  let [email, setEm] = useState('')

  const handleSignUp = useCallback(async event => {
    event.preventDefault();

    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
      navigate("home-page")
    }
    catch (error) {
      alert(error)
    }
  }, [email, password])

  return (
    <>
      <Form onSubmit={handleSignUp}>
        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-email'
            control={Input}
            label='Email'
            placeholder='testuser@google.com'
            onInput={e => setEm(email += e.target.value)}
          />
          <Form.Input
            label='Password'
            type='password'
            placeholder='user123'
            onInput={e => setPass(e.target.value)}
          />
        </Form.Group>
        <Form.Field
          id='form-button-control-public'
          control={Button}
          content='Login'
        />
      </Form>
      <p><a href="/">Create an account if you do not have an account</a> </p>
      <p>or sign in with Google</p>
      <SocialFollow />
    </>
  );
};

export default FormLogin;

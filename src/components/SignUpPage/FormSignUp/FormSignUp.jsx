import React, { useCallback, useState } from "react";
import { Form, Input, Button } from 'semantic-ui-react'
import SocialFollow from './SocialFollow'
import { navigate } from '@reach/router'
import firebase from "../../../firebase"

const FormSignUp = () => {
  let [password, setPass] = useState()
  let [email, setEm] = useState()

  const handleLogin = useCallback(async event => {
    event.preventDefault();
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
      navigate("home-page")
    }
    catch (error) {
      alert(error)
    }
  }, [email, password])

  return (
    <>
      <Form onSubmit={handleLogin}>
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
            placeholder='minimum 6 characters'
            onInput={e => setPass(e.target.value)}
          />
        </Form.Group>
        <Form.Field
          id='form-button-control-public'
          control={Button}
          content='Sign-up'
        />
      </Form>
      <p><a href="login-page">Login if you already have an account</a> </p>
      <p>or sign up with Google</p>
      <SocialFollow />
    </>
  );
};

export default FormSignUp;

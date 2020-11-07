import React, { useCallback, useState } from "react";
import { Form, Input, Button } from 'semantic-ui-react'
import SocialFollow from './SocialFollow'
import { Link, navigate } from '@reach/router'
import firebase from "../../../firebase"

const FormSignUp = () => {
  let [password, setPass] = useState("")
  let [email, setEm] = useState("")
 
   const handleSignUp = useCallback(async event => { 
     event.preventDefault();
     
     try { 
       await firebase
       .auth()
       .createUserWithEmailAndPassword(email, password)
       navigate("/")    
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
        placeholder='fortutors@school.com'
        onInput={e => setEm(email += e.target.value)}
        />
        <Form.Input 
        label='Password' 
        type='password' 
        onInput={e => setPass(e.target.value)}
        />
      </Form.Group>
      <Form.Field
        id='form-button-control-public'
        control={Button}
        content='Confirm'
      />
    </Form>
    <p><a href="#">Sign in if you have an account</a> </p>

    <p>or sign in with Google</p>
    <SocialFollow/>
    </>
  );
};

export default FormSignUp;

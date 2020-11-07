import React, { Component } from 'react'
import styles from './App.module.scss'
import Routes from './containers/Routes/Routes'
import SignUpPage from "./components/SignUpPage"

import { Button } from 'semantic-ui-react'

function App() {
  return (
    <>
      <Routes />
    </>
  );
}

export default App;

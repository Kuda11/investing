import React from "react"
import { Router } from "@reach/router"
import SignUpPage from "../../components/SignUpPage"
import HomePage from "../../components/HomePage"
import LoginPage from "../../components/LoginPage"
import PrivateRoutes from "./PrivateRoutes"

const Routes = () => {
  return (
    <>
    <Router>
    <SignUpPage path="/"/> 
    <LoginPage path="login-page" />         
        <PrivateRoutes path="/">
            <HomePage path="home-page"/>
        </PrivateRoutes>
    </Router>
    </>
  );
};

export default Routes;
import { useGoogleLogin } from '@react-oauth/google';
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';




function Login() {

  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
    scope:"openid profile"
  });
  const loginSucces = (tokenResponse) =>{
    console.log(tokenResponse)
    /*
    tokenResponse icinde "access_token" var
    merak edersen console a bak.

    Bu satirda, google a access_token gondererek display name veemail adresi soracagiz.
    Gelen cevabi ilk etapta sadece arayuzde guncelle
    */
  }

  const loginFail = (errorResponse) =>{
    console.log(errorResponse)
  }

  const handleClick = (event) =>{
    login();

  }

  return (
    <div className="d-grid gap-2">

    <Button variant="outline-primary" size="lg" onClick={handleClick}>Sign in with Google</Button>
    </div>
  );
}
export default Login;

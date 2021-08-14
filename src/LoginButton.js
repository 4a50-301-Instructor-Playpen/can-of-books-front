import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
//Used with Auth0 Docs
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;
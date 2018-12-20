import React from "react";

const Login = props => (
  <nav>
    <h2>Login</h2>
    <button onClick={() => props.authenticate("Google")}>
      Login With Google
    </button>
    <button onClick={() => props.authenticate("Facebook")}>
      Login With Facebook
    </button>
    <button onClick={() => props.authenticate("Github")}>
      Login With Github
    </button>
  </nav>
);

export default Login;

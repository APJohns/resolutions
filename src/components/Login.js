import React from "react";

const Login = props => (
  <nav>
    <h2>Login</h2>
    <button onClick={() => props.authenticate("Facebook")}>
      Login With Facebook
    </button>
  </nav>
);

export default Login;

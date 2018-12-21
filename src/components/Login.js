import React from "react";

const Login = props => (
  <div className="loginBtns">
    <button className="google" onClick={() => props.authenticate("Google")}>
      Login With Google
    </button>
    <button className="facebook" onClick={() => props.authenticate("Facebook")}>
      Login With Facebook
    </button>
    <button className="github" onClick={() => props.authenticate("Github")}>
      Login With Github
    </button>
  </div>
);

export default Login;

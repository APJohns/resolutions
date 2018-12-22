import React from "react";

class Login extends React.Component {
  state = {
    toggle: false
  };

  render() {
    return (
      <div className="loginSection">
        <button
          className="loginBtn"
          onClick={() => this.setState({ toggle: !this.state.toggle })}
        >
          Login
        </button>
        <div className={`loginBtns ${this.state.toggle && "showLogin"}`}>
          <button
            className="google"
            onClick={() => this.props.authenticate("Google")}
          >
            Google
          </button>
          <button
            className="facebook"
            onClick={() => this.props.authenticate("Facebook")}
          >
            Facebook
          </button>
          <button
            className="github"
            onClick={() => this.props.authenticate("Github")}
          >
            Github
          </button>
        </div>
      </div>
    );
  }
}

export default Login;

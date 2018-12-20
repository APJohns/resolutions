import React, { Component } from "react";
import firebase from "firebase";
import Resolution from "./Resolution";
import AddResolution from "./AddResolution";
import Login from "./Login";
import base, { firebaseApp } from "../base";

class App extends Component {
  state = {
    resolutions: {}
  };

  componentDidMount() {
    const { params } = this.props.match;
    this.ref = base.syncState(`${params.resId}/resolutions`, {
      context: this,
      state: "resolutions"
    });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  authHandler = async authData => {
    const { params } = this.props.match;
    const resolution = await base.fetch(params.resId, { context: this });

    if (!resolution.owner) {
      await base.post(`${params.resId}/owner`, {
        data: authData.user.uid
      });
    }

    this.setState({
      uid: authData.user.uid,
      owner: resolution.owner || authData.user.uid
    });
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ uid: null });
  };

  addResolution = resolution => {
    const resolutions = { ...this.state.resolutions };
    resolutions[`res${Date.now()}`] = resolution;
    this.setState({ resolutions });
  };

  deleteRes = key => {
    const resolutions = { ...this.state.resolutions };
    resolutions[key] = null;
    this.setState({ resolutions });
  };

  render() {
    const { params } = this.props.match;
    const logout = <button onClick={this.logout}>Logout</button>;

    if (!this.state.uid) return <Login authenticate={this.authenticate} />;

    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry, you are not the owner!</p>
          {logout}
        </div>
      );
    }

    return (
      <main>
        {logout}
        <h1 className="title">{params.resId}</h1>
        {Object.keys(this.state.resolutions).length > 0 ? (
          Object.keys(this.state.resolutions).map((item, i) => {
            if (this.state.resolutions[item])
              return (
                <Resolution
                  key={i}
                  index={item}
                  resolution={this.state.resolutions[item]}
                  deleteRes={this.deleteRes}
                />
              );
          })
        ) : (
          <p>Looks like you haven't made any resolutions yet!</p>
        )}
        <AddResolution addResolution={this.addResolution} />
      </main>
    );
  }
}

export default App;

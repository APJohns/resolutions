import React, { Component } from "react";
import firebase from "firebase";
import AddResolution from "./AddResolution";
import Countdown from "./Countdown";
import Header from "./Header";
import ResolutionList from "./ResolutionList";
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

    return (
      <main className="main">
        <Header
          authenticate={this.authenticate}
          logout={this.logout}
          loggedOut={!this.state.uid}
        />

        <section className="list">
          <h1 className="title">{params.resId}</h1>
          <ResolutionList
            resolutions={this.state.resolutions}
            deleteRes={this.deleteRes}
            isOwner={this.state.uid && this.state.uid === this.state.owner}
          />
          {this.state.uid !== this.state.owner && (
            <p className="message">Sorry, you aren't the owner of this list!</p>
          )}
          {this.state.uid && this.state.uid === this.state.owner && (
            <AddResolution addResolution={this.addResolution} />
          )}
        </section>

        <Countdown />
      </main>
    );
  }
}

export default App;

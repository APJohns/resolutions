import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const Header = props => (
  <nav>
    <Link to="/" className="logo">
      Resolutions
    </Link>
    {props.loggedOut ? (
      <Login authenticate={props.authenticate} />
    ) : (
      <button className="logout" onClick={props.logout}>
        Log Out
      </button>
    )}
  </nav>
);

export default Header;

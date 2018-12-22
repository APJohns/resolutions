import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const Header = props => (
  <nav>
    <Link to="/" className="logo">
      Resolutions
    </Link>
    <a
      href={`https://www.facebook.com/sharer/sharer.php?u=sickresolutions.com/resolutions/${
        props.index
      }`}
    >
      Facebook
    </a>
    <a
      href={`https://twitter.com/home?status=Check%20out%20my%20resolutions%20this%20year!%20sickresolutions.com/resolutions/${
        props.index
      }`}
    >
      Twitter
    </a>
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

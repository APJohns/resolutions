import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import facebook from "../images/Facebook.svg";
import twitter from "../images/Twitter.svg";

const Header = props => (
  <nav>
    <Link to="/" className="logo">
      Resolutions
    </Link>
    <div className="rightNav">
      <a
        className="share"
        href={`https://www.facebook.com/sharer/sharer.php?u=sickresolutions.com/resolutions/${
          props.index
        }`}
      >
        <img src={facebook} alt="Share on Facebook" className="shareImg" />
      </a>
      <a
        className="share"
        href={`https://twitter.com/home?status=Check%20out%20my%20resolutions%20this%20year!%20sickresolutions.com/resolutions/${
          props.index
        }`}
      >
        <img src={twitter} alt="Share on Twitter" className="shareImg" />
      </a>
      {props.loggedOut ? (
        <Login authenticate={props.authenticate} />
      ) : (
        <button className="logout" onClick={props.logout}>
          Log Out
        </button>
      )}
    </div>
  </nav>
);

export default Header;

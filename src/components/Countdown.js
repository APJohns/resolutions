import React from "react";
import { countdown } from "../helpers";

class Countdown extends React.Component {
  state = {
    intervalId: null,
    time: ""
  };

  componentDidMount() {
    const newYear = new Date(
      `Jan 1, ${new Date().getFullYear() + 1}`
    ).getTime();
    const intervalId = setInterval(() => {
      let now = new Date().getTime();
      let distance = newYear - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(intervalId);
        this.setState({ time: "Happy New Year!!" });
      }

      this.setState({ time: `${days}d ${hours}h ${minutes}m ${seconds}s` });
    }, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return <div>{this.state.time}</div>;
  }
}

export default Countdown;

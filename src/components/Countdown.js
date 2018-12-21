import React from "react";

class Countdown extends React.Component {
  state = {
    intervalId: null,
    isDone: false,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
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
        this.setState({ isDone: true });
      }

      this.setState({
        days,
        hours,
        minutes,
        seconds
      });
    }, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
      <p className="countdown">
        <span className="days time">{this.state.days}</span>
        <span className="hours time">{this.state.hours}</span>
        <span className="minutes time">{this.state.minutes}</span>
        <span className="seconds time">{this.state.seconds}</span>
      </p>
    );
  }
}

export default Countdown;

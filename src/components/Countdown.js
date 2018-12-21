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

  pad = input => input.toString().padStart(2, "0");

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
      <div className="countdown">
        <h2>Time Remaining</h2>
        <section className="clock">
          <div className="time">{this.pad(this.state.days)}</div>
          <div className="time">{this.pad(this.state.hours)}</div>
          <div className="time">{this.pad(this.state.minutes)}</div>
          <div className="time">{this.pad(this.state.seconds)}</div>
          <div className="timeMeasure">Days</div>
          <div className="timeMeasure">Hours</div>
          <div className="timeMeasure">Minutes</div>
          <div className="timeMeasure">Seconds</div>
        </section>
      </div>
    );
  }
}

export default Countdown;

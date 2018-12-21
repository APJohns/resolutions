import React from "react";

class Picker extends React.Component {
  resInputRef = React.createRef();
  goToRes = e => {
    e.preventDefault();
    this.props.history.push(`/resolutions/${this.resInputRef.current.value}`);
  };

  render() {
    return (
      <form className="list picker" onSubmit={this.goToRes}>
        <label>
          <h1>Pick a list name</h1>
          <input type="text" ref={this.resInputRef} autoFocus required />
        </label>
        <button type="submit">Go To List ➡</button>
      </form>
    );
  }
}

export default Picker;

import React from "react";

class Picker extends React.Component {
  resInputRef = React.createRef();
  goToRes = e => {
    e.preventDefault();
    this.props.history.push(`/resolutions/${this.resInputRef.current.value}`);
  };

  render() {
    return (
      <form onSubmit={this.goToRes}>
        <label for="res">Pick a list name</label>
        <input type="text" name="res" ref={this.resInputRef} />
      </form>
    );
  }
}

export default Picker;

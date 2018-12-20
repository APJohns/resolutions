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
        <label>
          Pick a list name
          <input type="text" ref={this.resInputRef} required />
        </label>
      </form>
    );
  }
}

export default Picker;

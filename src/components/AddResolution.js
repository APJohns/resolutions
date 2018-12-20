import React from "react";

class AddResolution extends React.Component {
  inputRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.addResolution(this.inputRef.current.value);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className="addResolution" onSubmit={this.handleSubmit}>
        <input type="text" ref={this.inputRef} />
        <button type="submit">New Resolution</button>
      </form>
    );
  }
}

export default AddResolution;

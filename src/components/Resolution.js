import React from "react";

class ResItem extends React.Component {
  state = {
    toggle: false
  };

  handleDelete = () => {
    if (this.props.isOwner) {
      this.props.deleteRes(this.props.index);
    }
  };

  render() {
    return (
      <li
        className={this.state.toggle && "activeLi"}
        onClick={() => this.setState({ toggle: !this.state.toggle })}
      >
        <p>{this.props.resolution}</p>
        {this.props.isOwner && (
          <button
            className={`${this.state.toggle && "activeDel"} delete`}
            onClick={this.handleDelete}
          >
            &times;
          </button>
        )}
      </li>
    );
  }
}

export default ResItem;

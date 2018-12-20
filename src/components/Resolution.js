import React from "react";

class ResItem extends React.Component {
  handleDelete = () => {
    this.props.deleteRes(this.props.index);
  };

  render() {
    return (
      <li>
        <p>{this.props.resolution}</p>
        <button onClick={this.handleDelete}>&times;</button>
      </li>
    );
  }
}

export default ResItem;

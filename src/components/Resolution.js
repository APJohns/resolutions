import React from "react";

class ResItem extends React.Component {
  handleDelete = () => {
    this.props.deleteRes(this.props.index);
  };

  render() {
    return (
      <li>
        <p>{this.props.resolution}</p>
        <button className="delete" onClick={this.handleDelete}>
          &times;
        </button>
      </li>
    );
  }
}

export default ResItem;

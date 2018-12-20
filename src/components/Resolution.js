import React from "react";

class ResItem extends React.Component {
  handleDelete = () => {
    if (this.props.isOwner) {
      this.props.deleteRes(this.props.index);
    }
  };

  render() {
    return (
      <li>
        <p>{this.props.resolution}</p>
        {this.props.isOwner && (
          <button className="delete" onClick={this.handleDelete}>
            &times;
          </button>
        )}
      </li>
    );
  }
}

export default ResItem;

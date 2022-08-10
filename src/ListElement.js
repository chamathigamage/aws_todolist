import React from "react";
export default class ListElement extends React.Component {
  render() {
    return (
      <label style={{ textDecoration: this.props.completed && "line-through" }}>
        <input
          type="checkbox"
          checked={this.props.completed}
          onChange={this.props.onComplete}
        />
        {this.props.value}
        <br />
      </label>
    );
  }
}

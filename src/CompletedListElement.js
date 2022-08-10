import React from "react";
export default class CompletedListElement extends React.Component {
  render() {
    if (this.props.completed) {
      return (
        <label style={{ textDecoration: "line-through" }}>
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
}

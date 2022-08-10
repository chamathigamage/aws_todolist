import React from "react";
export default class UncompletedListElement extends React.Component {
  render() {
    if (!this.props.completed) {
      return (
        <label>
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

import React from "react";
export default class Input extends React.Component {
  render() {
    return (
      <label>
        Input:
        <input type="text" onKeyDown={this.props.onclick} />
      </label>
    );
  }
}

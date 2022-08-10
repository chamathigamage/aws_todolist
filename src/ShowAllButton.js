import React from "react";
export default class ShowAllButton extends React.Component {
  render() {
    if (this.props.current) {
      return <button onClick={this.props.showAll}>Show Completed</button>;
    } else {
      return <button onClick={this.props.showAll}>Show All</button>;
    }
  }
}

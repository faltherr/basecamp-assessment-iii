import React from "react";

class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.name}!</div>
  }
}

export default Hello //Specifies that the hello class can be used by other components

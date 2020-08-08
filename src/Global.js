import React, { Component } from "react";

class Global extends React.Component {
  render() {
    return (
      <div>
        <h1>Contador Global {this.props.globalCounter} </h1>
      </div>
    );
  }
}

export default Global;

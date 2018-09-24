import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-2 text-center text-primary">
          Add Your Todo Task
        </h1>
        <hr className="my-4" />
        <p className="font-italic text-monospace font-weight-bold lead text-success">
          You can add your multiple Todos here, you can delete them or aslo edit
          them.
        </p>
      </div>
    );
  }
}

export default Header;

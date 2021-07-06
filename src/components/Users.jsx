import React, { Component } from "react";

class Users extends Component {
  render(props) {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h1>{this.props.email}</h1>
        <h1>{this.props.gen}</h1>
        <hr></hr>
      </div>
    );
  }
}

export default Users;

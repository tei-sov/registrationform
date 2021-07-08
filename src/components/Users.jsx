import React, { Component } from "react";

class Users extends Component {
  render(props) {
    return (
      <div className="user">
        <h3 className="sight">{this.props.name}</h3>
        <h3>{this.props.email}</h3>
        <h3>{this.props.gen}</h3>
        <br />
      </div>
    );
  }
}

export default Users;

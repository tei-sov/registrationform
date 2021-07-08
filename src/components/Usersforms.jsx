import React, { Component } from "react";

class Usersforms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      value: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (Event) => {
    Event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="first">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Full Name</label>
          <input
            type="text"
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
          ></input>
          <br />

          <label htmlFor="">Email</label>
          <input
            type="text"
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
          ></input>
          <br />

          <label htmlFor="">Number</label>
          <input
            type="number"
            value={this.state.number}
            name="number"
            onChange={this.handleChange}
          />

          <br />

          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Usersforms;

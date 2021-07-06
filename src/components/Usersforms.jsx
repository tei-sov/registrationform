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

  handleChange = (Event) => {
    this.setState({
      [Event.target.name]: Event.target.value,
    });
  };

  handleSubmit = (Event) => {
    Event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Full Name</label>
          <input
            type="text"
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
          ></input>
          <br></br>

          <label htmlFor="">Email</label>
          <input
            type="text"
            value={this.state.email}
            email="email"
            onChange={this.handleChange}
          ></input>
          <br></br>

          <label htmlFor="">Number</label>
          <input
            type="number"
            value={this.state.number}
            number="number"
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Usersforms;

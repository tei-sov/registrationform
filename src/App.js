import React, { Component } from "react";
import Users from "./components/Users";
import Usersforms from "./components/Usersforms";
import "./components/Swag.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        { name: "Kofi", email: "kof@gmail.com", gen: 3 },
        { name: "Sun", email: "sun@gmail.com", gen: 4 },
        { name: "Moon", email: "moon@gmail.com", gen: 5 },
      ],
    };
  }

  render() {
    return (
      <div>
        <br />

        <Usersforms />
        <hr />
        <br className="down" />

        {this.state.users.map((items, index) => {
          return (
            <div>
              <Users
                name={items.name}
                email={items.email}
                gen={items.gen}
              ></Users>
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;

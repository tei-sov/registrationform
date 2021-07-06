import React, { Component } from "react";
import Users from "./components/Users";
import Usersforms from "./components/Usersforms";
///import Swag from './components'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        { name: "kofi", email: "kof@gmail.com", gen: "3" },
        { name: "sun", email: "sun@gmail.com", gen: "4" },
        { name: "moon", email: "moon@gmail.com", gen: "5" },
      ],
    };
  }

  render() {
    return (
      <div>
        <Usersforms />

        {this.state.users.map((items, index) => {
          return (
            <div>
              <Users
                name={items.name}
                email={items.email}
                gen={items.gen}
              ></Users>
              <hr></hr>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;

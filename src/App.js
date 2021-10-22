import "./App.css";
import { React, Component } from "react";
import CardList from "./components/card-list/card-list.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      userList: [
        {
          id: 1,
          name: "user 1",
          username: "Ashwin",
          password: "pass",
        },
        {
          id: 2,
          name: "user 2",
          username: "Ashok",
          password: "password",
        },
        {
          id: 3,
          name: "user 3",
          username: "Panama",
          password: "Mansjk",
        },
        {
          id: 4,
          name: "user 4",
          username: "Ahikija",
          password: "pas25@@sword",
        },
        {
          id: 5,
          name: "user 5",
          username: "Ahikija",
          password: "pas25@@sword",
        }
      ]
    };
  }
  render() {
    const users= this.state.userList;
    return (
      <div className="App">
        <CardList userList={users} />
      </div>
    );
  }
}

export default App;

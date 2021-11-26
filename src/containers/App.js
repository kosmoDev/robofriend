import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       users: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => this.setState({ users: users }));
//   }

//   onSearchChange = (event) => {
//     this.setState({ searchField: event.target.value });
//   };

//   render() {
//     const { users, searchField } = this.state;
//     const filteredUsers = users.filter((user) => {
//       return user.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
//     });
//     return !users.length ? (
//       <h1 className="tc">Loading</h1>
//     ) : (
//       <div className="tc">
//         <h1 className="f1">RoboFriends</h1>
//         <SearchBox searchChange={this.onSearchChange} />
//         <Scroll>
//           <ErrorBoundry>
//             <CardList users={filteredUsers} />
//           </ErrorBoundry>
//         </Scroll>
//       </div>
//     );
//   }
// }

function App() {
  const [users, setUsers] = useState([]);
  const [searchField, setSearchField] = useState("");
  // const [count, setCount] = useState(0)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
    // console.log(count)
  }, [])
  // }, [count]);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredUsers = users.filter((user) => {
    return user.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
  });

  return !users.length ? (
    <h1 className="tc">Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      {/* <button onClick={() => setCount(count + 1)}>Click Me</button> */}
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList users={filteredUsers} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default App;

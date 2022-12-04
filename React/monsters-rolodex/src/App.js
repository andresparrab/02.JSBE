import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    console.log("constructor");
  }
  //this is a comment
  componentDidMount() {
    console.log("componentDidMount");
    fetch("https:jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      // if the variable above searchField has the same name as the state variable below
      // then it will use it as a key to alter the state
      return { searchField };
    });
  };

  render() {
    // destructuring
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    console.log("render");
    const filteredMonters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        />
        {filteredMonters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1> {monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;

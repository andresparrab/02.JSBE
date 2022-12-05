import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list-component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  //this is a comment
  componentDidMount() {
    fetch("https:jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      // if the variable above searchField has the same name as the state variable below
      // then it will use it as a key to alter the state.
      return { searchField };
    });
  };

  render() {
    // destructuring
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
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
        <CardList monsters={filteredMonters} />
      </div>
    );
  }
}
export default App;

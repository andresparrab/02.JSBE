import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: []
    }
    console.log("constructor")
  }

  componentDidMount() {
    console.log("componentDidMount")
    fetch('https:jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users }
          },
          () => {
            console.log(this.state)
          }))
  }
  render() {
    console.log("render")
    return (
      <div className='App'>
        <input className="search-box" type="search" placeholder="search monsters" onChange={
          (event) => {
            const filteredMonters = this.state.monsters.filter((monster) => {
              return monster.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase());
            })
            this.setState(() => {
              return { monsters: filteredMonters }

            });
            console.log("this is the monter", filteredMonters.map((monter) => monter.name))
            console.log(event.target.value)
          }} />
        {
          this.state.monsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1> {monster.name}</h1>
              </div>
            )
          })}
      </div>
    );
  }
}
export default App;

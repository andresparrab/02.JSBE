import { Component } from "react";

class SearcBox extends Component {
  render() {
    return (
      <input
        type="search"
        className="SearcBox"
        placeholder="search monsters"
        onChange={onSearchChange}
      />
    );
  }
}

export default SearcBox;

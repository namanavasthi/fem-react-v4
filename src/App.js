import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Pet Adoption</h1>
        <Pet name="Luna" animal="Dog" breed="Havanese" />
        <Pet name="Pepper" animal="Bird" breed="Cockateil" />
        <Pet name="Doink" animal="Cat" breed="Mixed" />
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));

/* global React ReactDOM */

const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};

class App extends React.Component {
  handleTitleClick() {
    alert("You clicked the title!");
  }

  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "Pet Adoption"
      ),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havanese"
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "Bird",
        breed: "Cockateil"
      }),
      React.createElement(Pet, {
        name: "Doink",
        animal: "Cat",
        breed: "Mixed"
      })
    ]);
  }
}

// const App = () => {
//   // Stateful functional component
// };

ReactDOM.render(
  React.createElement(App, {}, null),
  document.getElementById("root")
);

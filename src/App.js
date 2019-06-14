const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h1", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Charley",
      animal: "Dog",
      breed: "terrier"
    }),
    React.createElement(Pet, {
      name: "Rocky",
      animal: "Dog",
      breed: "terrier"
    }),
    React.createElement(Pet, {
      name: "Brutus",
      animal: "Dog",
      breed: "terrier"
    })
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));

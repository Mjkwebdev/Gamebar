import "./App.css";
import ListGroup from "./Listgroup";

function App() {
  const list = ["red", "green", "blue"];
  const handleSelectedItem = (list: string) => {
    console.log("clicked");
  };
  return (
    <div>
      <ListGroup
        onSelectItem={handleSelectedItem}
        items={list}
        heading="Color"
      ></ListGroup>
    </div>
  );
}

export default App;

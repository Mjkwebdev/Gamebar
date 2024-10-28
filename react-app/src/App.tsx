
import "./App.css";
import Like from "./Like";
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
      <Like onClick={() => console.log("Clicked")} />
    </div>
  );
}

export default App;

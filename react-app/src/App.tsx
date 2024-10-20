import "./App.css";
import ListGroup from "./Listgroup";
import { MdCalculate } from "react-icons/md";

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
      <MdCalculate color="red" size={40} />
    </div>
  );
}

export default App;

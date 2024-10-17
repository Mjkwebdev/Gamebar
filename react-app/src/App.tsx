import ListGroup from "./ListGroup";
import Message from "./Message";
function App() {
  const list = ["red", "green", "blue"];
  return (
    <div>
      <ListGroup items={list} heading="Color"></ListGroup>
    </div>
  );
}

export default App;

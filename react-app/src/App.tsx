import Alert from "./Alert";
import Button from "./Button";
function App() {
  return (
    <div>
      <Alert>
        {" "}
        <h2> Its an Alert</h2>
      </Alert>
      <Button color="success" onClick={() => console.log("clicked")}>
        Blue Button
      </Button>
    </div>
  );
}

export default App;

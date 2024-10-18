import { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";
function App() {
  const [alertVisible, setVisible] = useState(false);
  const [redAlert, redalertVisible] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert color="success" onClose={() => setVisible(false)}>
          Blue button is clicked
        </Alert>
      )}
      <Button color="success" onClick={() => setVisible(true)}>
        Blue Button
      </Button>
      {redAlert && (
        <Alert onClose={() => redalertVisible(false)} color="danger">
          Red alert is pressed
        </Alert>
      )}
      <Button color="danger" onClick={() => redalertVisible(true)}>
        red Button
      </Button>
    </div>
  );
}

export default App;

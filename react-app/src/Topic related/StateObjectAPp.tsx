import { useState } from "react";

function App() {
  const [drink, setDrink] = useState({
    title: "american",
    price: 6,
  });
  const handleClick = () => {
    setDrink({ ...drink, price: 9 });
  };
  return (
    <div>
      {" "}
      {drink.price}
      <button onClick={handleClick}>Clickme</button>
    </div>
  );
}
export default App;

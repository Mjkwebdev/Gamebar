import { useState } from "react";

function App() {
  const [pizza, setPizza]=useState({
    name: "Spicy Peppironi",
    toppings:['Mushroom']
  })

  const handleClick = () => {
  setPizza({...pizza, toppings: [...pizza.toppings, "Cheese"]})
  };
  return <div></div>;
}

export default App;

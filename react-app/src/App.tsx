import { useState } from "react";
import NavBar from "./NavBar";
import produce from "immer";
import Cart from "./Cart";
function App() {
  const [cartItems, SetCartItems] = useState(["Product1", "Product2", "Product3", "Product4"]);
  return <div>
    <NavBar cartItemsCount={cartItems.length}></NavBar>
    <Cart cartItems={cartItems} onClear={()=> SetCartItems([])}></Cart>
  </div>;
}
export default App;

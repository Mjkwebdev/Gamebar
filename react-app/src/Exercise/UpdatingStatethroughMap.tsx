import { useState } from "react";

function App(){
  const [cart, setCart] = useState({
    discount: .1,
    items: [
      {id: 1, title: "Product2", quantity:1},
      {id: 2, title: "Product4", quantity:1}
    ]
  })

  const handleClick =()=>{
     setCart({...cart, items: cart.items.map(items => items.id===1? {...items, quantity: items.quantity +1} : items)})
  }
  return;
}

export default App;
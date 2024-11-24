import { useEffect, useRef, useState } from "react";
import ProductList from "./RefHook/ProductList";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.focus();
  });
  useEffect(() => {
    document.title = "My app";
  });

  const [category, setCategory] = useState("");
  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">HouseHold</option>
      </select>

      <ProductList category={category} />
    </div>
  );
}

export default App;

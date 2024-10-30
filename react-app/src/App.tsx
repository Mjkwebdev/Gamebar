import { useState } from "react";

function App() {
     const [tags, setTags]= useState(["happy","cheerful"])
     const handleClick = ()=>{
      //add new items to array
      setTags([...tags,"Exciting"]); 
      // Remove items from array
      setTags(tags.filter(tag=> tag !== "happy") )
      // Update an object
      setTags(tags.map(tag=> tag === "happy" ? "happiness": tag))

     }
  return (
    <div>
       
    </div>
  );
}
export default App;
// prefer not to use nested object
// the deeper the nested structure the complex the syntax is

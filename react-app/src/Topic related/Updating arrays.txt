import { useState } from "react";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "bug 2", fixed: true },
  ]);
  const handleClick = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };
  return <div></div>;
}
export default App;
// prefer not to use nested object
// the deeper the nested structure the complex the syntax is

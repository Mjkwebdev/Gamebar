import { useState } from "react";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "john",
    },
  });

  const handleClick = () => {

    setGame({ ...game, player: { ...game.player, name: "bob" } });
  };
  return <div></div>;
}

export default App;

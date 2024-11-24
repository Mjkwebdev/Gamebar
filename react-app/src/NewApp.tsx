import axios from "axios";
import { useEffect, useState } from "react";

interface Users {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<Users[]>([]);
  const [error, seterr] = useState("");
  useEffect(() => {
    axios
      .get<Users[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => seterr(err.message));
    // It returns a promise object
  }, []);
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((users) => (
          <li key={users.id}>{users.name}</li>
        ))}
      </ul>
    </>
  );
}
export default App;

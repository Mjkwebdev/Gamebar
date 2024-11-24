import axios from "axios";
import { useEffect, useState } from "react";

interface Users {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<Users[]>([]);
  useEffect(() => {
    axios
      .get<Users[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
    // It returns a promise object
  }, []);
  return (
    <ul>
      {users.map((users) => (
        <li key={users.id}>{users.name}</li>
      ))}
    </ul>
  );
}
export default App;

import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface Users {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<Users[]>([]);
  const [error, seterr] = useState("");
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get<Users[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
      } catch (err) {
        seterr((err as AxiosError).message);
      }
    };
    fetchUsers();

    // get returns a promise object
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

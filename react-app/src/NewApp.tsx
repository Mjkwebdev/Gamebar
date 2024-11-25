import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Users {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<Users[]>([]);
  const [error, seterr] = useState("");
  const [loading, isloading]=useState(false);
  useEffect(() => {
    const controller = new AbortController();
    const fetchUsers = async () => {
      isloading(true);
      try {
        const res = await axios.get<Users[]>(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );
        setUsers(res.data);
        isloading(false);
      } catch (err) {
        {
          if (err instanceof CanceledError) return;
          seterr((err as AxiosError).message);
          isloading(false);
        }
      }
      return () => controller.abort();
    };
    fetchUsers();

    // get returns a promise object
  }, []);
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {loading&& <div className="spinner-border"></div>}
      <ul>
        {users.map((users) => (
          <li key={users.id}>{users.name}</li>
        ))}
      </ul>
    </>
  );
}
export default App;

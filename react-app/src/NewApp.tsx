import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Users {
  id: number;
  name: string;
}
function App() {
  const [users, setUsers] = useState<Users[]>([]);
  const [error, seterr] = useState("");
  const [loading, isloading] = useState(false);
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
  const deleteUser = (user: Users) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        seterr(err.message);
        setUsers(originalUsers);
      });
  };
  const addUser = () => {
    const originalUsers = [...users];
    const NewUser = { id: 0, name: "Mosh" };
    setUsers([NewUser, ...users]);

    axios
      .post("https://jsonplaceholder.typicode.com/users", NewUser)
      .then(({ data: savedData }) => setUsers([savedData, ...users]))
      .catch((err) => {
        seterr(err.message);
        setUsers(originalUsers);
      });
  };
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {loading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        {" "}
        Add
      </button>
      <ul className="list-group">
        {users.map((users) => (
          <li
            key={users.id}
            className="list-group-item d-flex justify-content-between"
          >
            {users.name}
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(users)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;

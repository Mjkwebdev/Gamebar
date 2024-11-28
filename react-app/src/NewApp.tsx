import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { CanceledError } from "./service/api-client";
import userService, { Users } from "./service/userService";
function App() {
  const [users, setUsers] = useState<Users[]>([]);
  const [error, seterr] = useState("");
  const [loading, isloading] = useState(false);
  useEffect(() => {
    isloading(true);

    const { request, cancel } = userService.getAll<Users>();
    request
      .then((res) => {
        setUsers(res.data);
        isloading(false);
      })
      .catch((err) => {
        {
          if (err instanceof CanceledError) return;
          seterr((err as AxiosError).message);
          isloading(false);
        }
      });
    return cancel();
  }, []);

  // get returns a promise object
  const deleteUser = (user: Users) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    userService.delete(user.id).catch((err) => {
      seterr(err.message);
      setUsers(originalUsers);
    });
  };
  const addUser = () => {
    const originalUsers = [...users];
    const NewUser = { id: 0, name: "Mosh" };
    setUsers([NewUser, ...users]);

    userService
      .create(NewUser)
      .then(({ data: savedData }) => setUsers([savedData, ...users]))
      .catch((err) => {
        seterr(err.message);
        setUsers(originalUsers);
      });
  };
  const updateUser = (user: Users) => {
    const updatedUser = { ...user, name: user.name + "!" };
    const originalUsers = [...users];
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    userService.update(updatedUser).catch((err) => {
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
            <div>
              <button
                className="btn btn-outline-secondary"
                onClick={() => updateUser(users)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(users)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;

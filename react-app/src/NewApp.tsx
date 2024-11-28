import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { CanceledError } from "./service/api-client";
import userService, { Users } from "./service/userService";
import useUsers from "./Hooks/useUsers";
function App() {
  const { users, error, loading, setUsers, seterr } = useUsers();
  // get returns a promise object
  const deleteUser = (user: Users) => {
    const originalUsers = [...users];
    setUsers(users.filter((u: { id: number; }) => u.id !== user.id));
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

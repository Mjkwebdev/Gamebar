import { useEffect, useState } from "react";
import userService, { Users } from "../service/userService";
import { CanceledError } from "../service/api-client";

const useUsers = ()=> {

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
            seterr(err .message);
            isloading(false);
          }
        });
      return cancel();
    }, []);
  return {users, error, loading, setUsers, seterr}
}
export default useUsers;
import { useState, useEffect } from "react";
import { Promise } from "bluebird";

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "AT" });
    }, 1000);
  });
}

function UserCom1() {
  const [id, setId] = useState("Loading.....");
  const [name, setName] = useState("Loading.....");
  useEffect(() => {
    const promise = fetchUser().then((user) => {
      setId(user.id);
      setName(user.name);
    });
    return () => {
      promise.cancel();
    };
  }, []);
  return (
    <div>
      <h1>{id}</h1>
      <h1>{name}</h1>
    </div>
  );
}

export default UserCom1;

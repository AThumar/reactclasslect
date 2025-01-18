import * as React from "react";

function fetchuserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "AT", id: 2 });
    }, 1000);
  });
}
function Apisimulator() {
  const [name, setname] = React.useState("wait...");

  const [id, setid] = React.useState("wait...");
  React.useEffect(() => {
    fetchuserData().then((data) => {
      setname(data.name);
      setid(data.id);
    });
  }, []);

  return (
    <div>
      <h1>API Simulator</h1>
      <h2>Name: {name}</h2>
      <h2>ID: {id}</h2>
    </div>
  );
}
export default Apisimulator;

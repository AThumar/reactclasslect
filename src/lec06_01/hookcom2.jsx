import { useState } from "react";

function SetExample3() {
  const [name, setName] = useState("AT");
  return (
    <div>
      <h1>{name}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
    </div>
  );
}

export default SetExample3;

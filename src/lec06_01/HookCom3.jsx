import { useState } from "react";

function SetExample3() {
  const [color, setColor] = useState("Purple");
  return (
    <div>
      <input
        type="radio"
        name="color"
        onChange={() => setColor("pink")}
      ></input>

      <input
        type="radio"
        name="color"
        onChange={() => setColor("orange")}
      ></input>

      <input
        type="radio"
        name="color"
        onChange={() => setColor("Green")}
      ></input>
      <input type="checkbox"></input>
      <p style={{ color: color }}>Example</p>
    </div>
  );
}

export default SetExample3;

//UseState
//UseEffect
//UseReducer  []
//UseContext
//UseMemo
//UseReference
//UseCallback

import { useState } from "react";

function StateExample() {
  const [Name] = useState("AT");
  return <div>{Name}</div>;
}

export default StateExample;

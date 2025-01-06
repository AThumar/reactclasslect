import * as React from "react";

function FunCom1() {
  const [name] = React.useState("Hello");
  return <h1>{name}</h1>;
}

export default FunCom1;

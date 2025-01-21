import { useState } from "react";

import UserCom1 from "./cleanup";

const ShowUserHide = ({ xyz }) => (xyz ? <UserCom1 /> : null);
function Conditional() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      <ShowUserHide xyz={show} />
    </div>
  );
}
export default Conditional;

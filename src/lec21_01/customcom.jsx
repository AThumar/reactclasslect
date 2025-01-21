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
// create a registration form , when user enter details it should be visible under the registration form : 1.name(min 10 character), 2.gender, 3.email(format validation), 4.types of match(checkbox : ODI , TEST , T20 , DOMESTIC),5.state(dropdown), 6. submit button

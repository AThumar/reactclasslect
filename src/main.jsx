import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
// import App from './App.jsx'
// import AppFirst from "./1.jsx";
// import FunCom1 from "./Hookcomponent1.jsx";
// import StateExample from "./StateExample.jsx";
// import SetExample3 from "./SetExample3.jsx";
// import Apisimulator from "./lec18_01/hookUseeffect.jsx";
// import App from "./ex.jsx";
// import ImageChanger from "./lec20_01/imagechanger.jsx";
import Conditional from "./lec21_01/customcom.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <AppFirst /> */}
    {/* <FunCom1 /> */}
    {/* <StateExample /> */}
    {/* <SetExample3 /> */}
    {/* <Apisimulator /> */}
    {/* <App /> */}
    {/* <Apisimulator /> */}
    {/* <App /> */}
    {/* <ImageChanger /> */}
    <Conditional />
  </StrictMode>
);

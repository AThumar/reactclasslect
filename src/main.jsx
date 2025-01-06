import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
// import App from './App.jsx'
// import AppFirst from "./1.jsx";
// import FunCom1 from "./Hookcomponent1.jsx";
// import StateExample from "./StateExample.jsx";
import SetExample3 from "./hookcom2.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <AppFirst /> */}
    {/* <FunCom1 /> */}
    {/* <StateExample /> */}
    <SetExample3 />
  </StrictMode>
);

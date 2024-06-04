import { useState } from "react";
import Shapka from "./components/Shapka";
import style1 from "./style/Style1.css"
import monesy from "./foto/osnova2/monesy.png"
function App() {
  return (
    <>
    <Shapka/>
    <div className="block3">
    <img className="bike3"src={monesy}></img>
    </div>
  <div className="text2">
    <p className="biketext3">Service, maintenance and insurance</p>
    <p className="biketext4">The lease includes an all-in service package. Throughout the entire 36 months, you are fully insured against damage, theft and maintenance. In addition, you always have access to roadside assistance. </p>
  </div>
    </>
  );
}

export default App;

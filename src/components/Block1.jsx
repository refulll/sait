import React from 'react'
import bike_img from "../images/982259a96f988a19c294dad5d4ce1148.png"
import "./css/Block1.css"
function Block1() {
  return (
    <div>
        <div class='bike1'>
            <img class="img_bike1" src={bike_img}></img>
            <p class="text_1">VELORETTI BUSINESS</p>
            <b class="text_2">Bike lease plan for employees.</b>
        </div>
    </div>
  );
}

export default Block1
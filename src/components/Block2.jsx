import React from 'react'
import "../components/css/Block2.css"
import man_on_bike from "../images/e4be4b810154d2d5146a366a9f02d120.jpg"
function Block2() {
  return (
    <div class="lok">
        <img class='bike2' src={man_on_bike}></img>
        <div class="text">
            <p class="ip">Bike plans for<br />
                employees.</p>
            <p class="ip1">Veloretti Electrics benefit both the environment and the health of<br />
                your employees. Oh, and they look good too. Cost-free for the<br />
                employer and outside of the WKR.</p>
                <button class="button3">Discover More</button>
            <p></p>
        </div>
        
    </div>
  )
}

export default Block2
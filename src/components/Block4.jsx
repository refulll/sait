import React from 'react'
import image_of_bike from "../images/025d9fe07e01ce680521620d22b09326.jpg"
import "../components/css/Block4.css"

function Block4() {
  return (
    <div>
        <div class='div_pop'>
            <img class="pop_img" src={image_of_bike}></img>
            <div class="text_pop">
            <p class="pop1">Free of charge for<br/>
                employers</p>
            <p class="pop2">The bike plan is totally independent of the WKR and is free for you as<br/>
                an employer. The employee pays the lease costs and you, as the<br/>
                employer, decide whether you want to contribute to the costs.</p>
            <p class="but_pop">Cost example</p>
            </div>
        </div>
    </div>
  )
}

export default Block4
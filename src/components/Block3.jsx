import React from 'react'
import "../components/css/Block3.css"
import img_back from "../images/aff8de14165da69c035537a9bbc2088a.png"

function Block3() {
  return (
    <div class="dive_wbike">
        <img src={img_back} class="img_bike2"></img>
        <b class="text_3">Service,<br/>
            maintenance and<br/>
            insurance</b>
        <p class="text_4">The lease includes an all-in service package.<br/>
            Throughout the entire 36 months, you are<br/>
            fully insured against damage, theft and<br/>
            maintenance. In addition, you always have<br/>
            access to roadside assistance. </p>

    </div>
  )
}

export default Block3
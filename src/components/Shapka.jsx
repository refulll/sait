import React from 'react'
import "../style/Style1.css"
import flag from '../foto/shapka/flag.png'
import chel from '../foto/shapka/chel.png'
import beg from '../foto/shapka/beg.png'
import bike from "../foto/osnova/bike.png"
import image from "../foto/osnova2/image.png"
const Shapka = () => {
  return (
    <>
  <div className="ownheader">
    <div className="header">
      <p className="veloretti">V E L O R E T T I</p>
  
        <select className="electric1">
        <option>ELECTRIC</option>
        </select>
        <select className="city1">
        <option>CITY</option>
        </select>
        <select className="KIDS1">
        <option>KIDS</option>
        </select>
        <p className="ACCESSORIES">ACCESSORIES</p>
        <p className="STORES">STORES</p>
        <select className="Leasing">
        <option>LEASING</option>
        </select>
    </div>
    <div className="lightHeader1">
      <p className="EN1">EN</p>
      <img src={flag} className="flag1"></img>
      <img src={chel} className="chel1"></img>
      <img src={beg} className="beg1"></img>
    
    </div>
    
    
    
    
    </div>
    <div className="block2">
    <img className="bike1"src={bike}></img>
    </div>
  <div className="text">
    <p className="biketext1">VELORETTI BUSINESS</p>
    <p className="biketext2">Bike lease plan for employees.</p>
  </div>
  <div className="chelovel">
    <img src={image} className="velochel"></img>
    </div>
    <div className="chelovel2">
    <p className="textik">Bike plans for employees.</p>
    <p className="textik1">Veloretti Electrics benefit both the environment and the health of
your employees. Oh, and they look good too. Cost-free for the
employer and outside of the WKR.</p>
    <p className="textik2">Discover more</p>
    </div>

 </>
        
  );
}
export default Shapka
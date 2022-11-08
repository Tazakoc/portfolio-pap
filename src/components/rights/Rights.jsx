import React from 'react'
import './rights.css'
import img from "../../img/rights.png";
const Rights = () => {
  return (
    <div id="rights" className="rights"> 
      <a href="https://jacekjeznach.com/" target="_blank"  rel="noreferrer">
        <img src={img} className='rights-img' alt=''></img>
      </a>
    </div>
  )
}

export default Rights
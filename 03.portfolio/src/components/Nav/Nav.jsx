import React from 'react';
import './nav.css';
import Headroom from "react-headroom"
function Nav() {
  return (
    <Headroom>
      <header>
        
    <div className='Nav-container' >
      <span className='code'>&lt;</span>   
      <span className='logo-name'>{'Andres'}</span>   
      <span className='code'>/&gt;</span>   

        </div>
      </header>
    </Headroom>
  )
}

export default Nav

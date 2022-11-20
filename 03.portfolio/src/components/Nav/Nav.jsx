import React from 'react';
import './nav.css';
import Menu from './Menu/Menu';


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
        <div className='Menu'>
          <Menu />

        </div>
      </header>
    </Headroom>
  )
}

export default Nav

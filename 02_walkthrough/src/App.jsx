import React from "react";
import Homepage from './components/Homepage/homepage'
import Navbar from './components/Navbar/navbar'

function App() {
  return (
    <div>
      
      <Navbar/> 
      <div className="container">
      <Homepage/>
      <Homepage/>
      <Homepage/>
      <Homepage/>
      <Homepage/>
      <Homepage/>
      </div>
    </div>
  );
}
export default App;

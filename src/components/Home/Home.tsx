import React from "react";
import logo from "../../images/Archeo-Mexico-Logo.png";


const Home = () => {

  return (
    <div>
      <header>
        <img src={logo} alt="Archeo Mexico Logo"  />
      </header>
      <h1>Welcome to Archeo Mexico</h1>
      <h2>Explore the rich cultural heritage of Mexico through its incredible archaeological sites</h2>
    </div>
  )
}

export default Home
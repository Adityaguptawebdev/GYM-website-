import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";

const Hero = () => {
  const [isAuth, setIsAuth] = useState(true)
  const navigate = useNavigate();
  const handleClick = () =>{
    isAuth ? navigate('/login') : "";
  }
const handleGuide = () =>{
  navigate('/guide')
}
  return (
    <section className="hero">
      <div className="content">
        <div className="title">
          <h1>LET'S</h1>
          <h1>GET</h1>
          <h1>MOVING</h1>
        </div>


        <div className="sub-title">
          <p>Your Journey to Fitness Starts Here</p>
          <p>Unleash Your Potential</p>
        </div>
        <div className="buttons">
          <button onClick={handleGuide} >Start</button>
         
          <button  id="pricing" onClick={handleClick}>Plan with Signup</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="text-overlay">
          <h1 className="hero-title">THE TORTURED TODO DEPARTMENT</h1>
          <p>- A To Do App -</p>
        </div>
        <img src="/typo.jpg" alt="Hero Image" className="typo-image" />
      </div>
    </section>
  );
};

export default Hero;

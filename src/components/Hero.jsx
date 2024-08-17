import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
           With our intuitive MERN (MongoDB, Express, React, Node.js) app, you can effortlessly book, reschedule, or cancel appointments, receive timely reminders, and access a comprehensive view of your medical history—all from the comfort of your home. Our goal is to make healthcare more accessible, personalized, and stress-free
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;

import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>About us</p>
          <p>
          Welcome to HealthConnect: Your Gateway to Seamless Healthcare
          At HealthConnect, we understand that your time is valuable and 
          your health is paramount. Our state-of-the-art platform simplifies
          the process of managing your medical appointments with ease and 
          efficiency. Whether you're scheduling a routine check-up, managing
          a chronic condition, or seeking specialist care, HealthConnect 
          puts you in control of your healthcare journey.
          </p>
          <p>We are all in 2024!</p>
          <p>
            With our intuitive MERN (MongoDB, Express, React, Node.js) app, you can effortlessly book, reschedule, or cancel appointments, receive timely reminders, and access a comprehensive view of your medical history—all from the comfort of your home. Our goal is to make healthcare more accessible, personalized, and stress-free
          </p>
          <p>Experience the future of healthcare management today with HealthConnect. Your health, our priority.</p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;

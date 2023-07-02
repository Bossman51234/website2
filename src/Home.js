import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import footballImage from './images/football-image.jpg';


const Home = () => {
  return (
    <div className="container">
    <div>
      <div className="header">
        <div className="nav">
          <div className="nav-buttons-left">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
          </div>
          <h1 className="title">Your Page Title</h1>
          <div className="nav-buttons-right">
            <Link to="/booking" className="book-now-button">Book Now</Link> {/* Add this line for the "Book Now" button */}
            <Link to="/fields">Fields</Link>
            <Link to="/coaches">Coaches</Link>
          </div>
        </div>
      </div>
      </div>
      <div className="content">
        <h2>Welcome to Football Sensations!</h2>
        <p>
          This is all about having fun. Football Sensations' goal is to give a chance to regulars/unexperienced/veterans
        </p>
        <p>of the sport who have been wanting to play Football but have not been able to find a league allowing them</p>
        <p>to do so. We offer a variety of services which include different types of training sessions as well as three</p>
        <p>different leagues: flag football, touch football, and tackle football.</p>
        <div className="buttons-container">
        <div className="box">
          <Link to="/Booking" className="button">Book Training</Link>
        </div>
        <div className="box">
          <Link to="/Booking" className="button">Book League</Link>
        </div>
      </div>
      <div class="home-container">
        <div class="image-container">
        <img src={footballImage} alt="Field 6" className="footballimage" />
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Location</h3>
            <p>11 D-Block Way</p>
            <p>Ottawa, ON K15 T6E</p>
          </div>
          <div className="footer-section">
            <h3>Phone</h3>
            <p>613-233-2323</p>
          </div>
          <div className="footer-section">
            <h3>Hours</h3>
            <p>Mon-Sun 10AM-10PM</p>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
}

export default Home;


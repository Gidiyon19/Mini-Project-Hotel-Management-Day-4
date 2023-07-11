import React from 'react';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './Main.css';
import "./Style.css";
import { Link } from 'react-router-dom';
const Main = () => {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  return (
      <div className='logo'>
    <>
    <header>
    
			<img src="C:\Users\hp\Downloads\logo hotel.png"></img>
			<nav ref={navRef}>
				<a href="/#">Flights</a>
				<a href="/#">Hotels</a>
				<a href="/#">Offers</a>
				<a href="/#">Apartments</a>
        <a href="/#">Activities</a>
        <a href="/#">Contacts</a>
        <div className='Boys'>
        <Link to="Login"><a href="/#">Sign In</a></Link>
        <Link to="Register"><a href="/#">Create Account</a></Link>
        </div>
				{/* <button
					className="nav1"
					onClick={showNavbar}>
					<FaTimes />
				</button> */}
			</nav>
			<button
				className="nav2"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
     <div className='main'>
        <div className='h1'>
          <center>
        <h1>Find Hotels in India</h1>
        <h3>One Step close to Paradise</h3>
        </center>
        </div>
    <div className="search">
      <input type="text" placeholder="Location" className="search-field" />
      
      <input type="date" placeholder="Check-In" className="search-field"  />
      {/* <select className="search-field">
        <option value="monday">Monday</option>
        <option value="tuesday">Tuesday</option>
        <option value="wednesday">Wednesday</option>
        <option value="thursday">Thursday</option>
        <option value="friday">Friday</option>
        <option value="friday">Saturday</option>
      </select> */}
      <input type="date" className="search-field" />
      <input type="number" placeholder="Room" className="search-field" />
      <button className="search-button">Search</button>
    </div>
    </div>
    </>
    </div>
  );
};

export default Main;
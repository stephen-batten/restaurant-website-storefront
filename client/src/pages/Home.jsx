import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/home.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className='header-container'>
            <h1>Restaurant Name</h1>
            <p>Restaurant Slogan</p>
            <Link to='/menu'>
                <button> ORDER HERE </button>
            </Link>
        </div>
    </div>
  )
}

export default Home
import React from 'react';
import './Home.css';
import Product from './Product';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='header'>
      <div className='header1'>
        <nav className='n1'>
           <h1> Producte Page </h1>
              <ul >
                <h4>
                  <Link to="./About" className='About'> <li> About Us /</li></Link>
                   <Link to="/" className='Home'><li> Home /</li></Link>
                   <li> Product /</li>
                   <li> Contact</li>
                </h4>
              </ul>
        </nav>
      </div>

      <div className='Search'>
        <input placeholder='.....search.....'></input>
      </div>
       <Product/>
    </div>
    
  )
}

export default Home;
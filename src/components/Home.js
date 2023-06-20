
import React, {useState} from'react';
import instagram from '../assets/icon/instagram.svg';
import telegram from '../assets/icon/telegram.svg';
import whatsapp from '../assets/icon/whatsapp.svg';
import { NavLink } from 'react-router-dom';
const Home = (props) => {
 
    const [menu,setMenu]=useState(false)


      
    const clickHandler = (e) => {
        if(e.target.className==='mobile-nav-toggle'
         ||
          e.target.parentElement.parentElement.parentElement.className==='navbar-mobile'
          || 
          e.target.parentElement.className==='mobile-nav-toggle'
          )
          {
            setMenu(!menu)
        }
    }

    return (
        <header className={ props.path !== "/" ? "header-top": ""}>
        <div className="container">
              <h1>Farimah Hasan</h1>
              <h2>I'm a <span>Front-End developer</span> from Iran</h2>
              <nav id="navbar" className={menu ? 'navbar-mobile' : 'navbar'} >
                  <ul>
                      <li><NavLink className={(navData) => navData.isActive ? "active" : "" } onClick={clickHandler} to="/">Home</NavLink></li>
                      <li><NavLink className={(navData) => navData.isActive ? "active" : "" } onClick={clickHandler} to="/about" >About</NavLink></li>
                      <li><NavLink className={(navData) => navData.isActive ? "active" : "" } onClick={clickHandler} to="/portfolio">Portfolio</NavLink></li>
                      <li><NavLink className={(navData) => navData.isActive ? "active" : "" } onClick={clickHandler} to="/contact">Contact</NavLink></li>
                  </ul>
                  <div className='mobile-nav-toggle' onClick={clickHandler} >
                      <div onClick={clickHandler}  style={{transform:menu ? "rotate(45deg)":"rotate(0)"}}></div>
                      <div onClick={clickHandler} style={{opacity:menu ? "0":"1"}}></div>
                      <div onClick={clickHandler} style={{transform:menu ? "rotate(-45deg)":"rotate(0)"}}></div>
                  </div>
              </nav>
              <div className="social-links">
                <a href="https://www.instagram.com/farimahhasan" >
                     <img src={instagram} alt="icon instagram"/>
                </a>
                <a href="https://t.me/Farimahhasan79" >
                    <img src={telegram} alt="icon telegram"/>
                </a>
				<a href="https://api.whatsapp.com/send?phone=989022213791">
                   <img src={whatsapp} alt="icon whatsapp"/>
				</a>
            </div>
          </div>
        </header>
    );
};

export default Home;
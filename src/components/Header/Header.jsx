import React, { useState } from "react";
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800)
    {
      return {right: !menuOpened && "-100%"}
    }
  }
  return (
      <section class="h-wrapper">
        <div class="flexCenter innerWidth paddings h-container">
          <img src="./logo.png" alt="logo" width="100" />

          <OutsideClickHandler onOutsideClick={()=> {setMenuOpened(false)}}>
            <div class="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
              <a href="#residencies">Residencies</a>
              <a href="#value">Our Value</a>
              <a href="#contact-us">Contact Us</a>
              <a href="#get-started">Get Started</a>
              <button class="button">
                <a href="mailto:ahad@gmail.com">Contact</a>
              </button>
            </div>
          </OutsideClickHandler>

          <div class="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
            <BiMenuAltRight size={30}/>
          </div>
        </div>
      </section>
  );
};

export default Header;

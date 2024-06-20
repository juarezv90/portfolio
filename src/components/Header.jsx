import React, { useEffect, useState } from "react";
import "../scss/header.scss";

function Header() {
  const [showMenu, setShowMenu] = useState("0")
  const [page, setPage] = useState(0)

  let handleMenuClick = () => {
    if (showMenu === "0") {
      setShowMenu("20rem")
      return
    }
    setShowMenu("0")
  }

  useEffect(() => {
    let list = document.getElementsByTagName("li")
    for (let i = 4; i < 8; i++) {
      list[i].addEventListener(onclick, handleMenuClick)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setPage(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [page])

  return (
    <header style={page > 96 ? {position:"fixed", zIndex:1000, width:"100%", height:"3rem"}: {position:"relative"}}>
      <div className="headerContainer" >
        <div className="header_text">
          <h1>Juarez Development</h1>
          <p style={page >96 ? {display:'none'}:{display:"unset"}}>Elevate Every Pixel: Full-Stack Solutions for Stunning Websites</p>
        </div>
        <nav className="mdlg">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <nav className="nav_mobile" id="nav_mobile" onClick={() => handleMenuClick()}>
          <img src="./icons/burger_icon.svg" alt="Display menu button" />
          <ul className="mobile_nav_list" style={{ height: `${showMenu}` }}>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Project</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

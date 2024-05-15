/* eslint-disable react/prop-types */
import "./Navbar.css";
import { getImageUrl } from "../../utils";
import { useState } from "react";
import { Link } from "react-router-dom";
import IPL from '../../assets/Navbar/IPL.png'



export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


 
  
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className=" nav-container">
          <div className="brand">
            <img src={IPL} alt="ipl" />
            <h2>
              <a href="https://www.iplt20.com/" target="_blank">
                IPL
              </a>
            </h2>
          </div>

          <img
            src={
              isOpen
                ? getImageUrl("Navbar/closeIcon.png")
                : getImageUrl("Navbar/menuIcon.svg")
            }
            alt="menu-button"
            onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
            className="menu-btn"
          />

          <ul
            className={`listItems ${isOpen && "isOpen"}`}
            onClick={() => {
              setIsOpen((prevIsOpen) => !prevIsOpen);
            }}
          >
           <li>
              <Link to={"/"}>Home</Link>
            </li>
            
            <li>
              <Link to={"/teams"}>Teams</Link>
            </li>
   
               <li>
                  <Link to={"/players"}>Players</Link>
                </li>
                <li>
                  <Link to={"/grounds"}>Grounds</Link>
                </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/table"}>Points Table</Link>
            </li>

          </ul>
        </nav>
      </div>
    </div>
  );
};

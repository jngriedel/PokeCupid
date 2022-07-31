import React from "react";
// import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
// import logo from "../images/pokecupidtextwhite.png";

import './Footer.css'

const Footer = () => {


  // const userImagesArr = Object.values(userImages);
  // const thumbnail = userImagesArr[0].imgUrl;

  return (

        <div className="footer-main">
                <div className="creatorDetails">
                    <span className="footerMessage">Josef Niels Griedel</span>
                    <a rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/josef-niels-g-bbb2b38b/'><i className="fa-brands fa-linkedin"></i></a>
                    <a rel="noreferrer" target="_blank" href='https://github.com/jngriedel'><i className="fa-brands fa-github"></i></a>
                </div>
                <div className="creatorDetails">
                    <span className="footerMessage">Connor Burns</span>
                    <a rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/connor-burns-647766194/'><i className="fa-brands fa-linkedin"></i></a>
                    <a rel="noreferrer" target="_blank" href='https://github.com/ConnorBurns1993'><i className="fa-brands fa-github"></i></a>
                </div>
                <div className="creatorDetails">
                    <span className="footerMessage">Matilda Zhang</span>
                    <a rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/matilda-zhang-328ba8186/'><i className="fa-brands fa-linkedin"></i></a>
                    <a rel="noreferrer" target="_blank" href='https://github.com/matilda-142857'><i className="fa-brands fa-github"></i></a>
                </div>
                <div className="creatorDetails">
                    <span className="footerMessage">Moe Hussein</span>
                    <a rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/mohamadamirhussein/'><i className="fa-brands fa-linkedin"></i></a>
                    <a rel="noreferrer" target="_blank" href='https://github.com/okaymoe'><i className="fa-brands fa-github"></i></a>
                </div>

        </div>

  );
};

export default Footer;

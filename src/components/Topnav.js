import React from 'react'
import './topnav.css';
import { Link } from 'react-router-dom';
import {NavLink } from "react-router-dom";
const Topnav = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <div className="inner-contents">
            <ul className="list-inline">
              <li className="list-inline-item">
                <NavLink exact activeClassName="active" to="/">
                  Dashboard
                </NavLink>
              </li>
              <li className="list-inline-item">
                <NavLink  exact activeClassName="active" to="/transfer" >
                  Disruptive Transfer
                </NavLink>
              </li>
              <li className="list-inline-item">
                <NavLink  exact activeClassName="active" to="/farms">
                  Farms
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 text-center">
          <div className="inner-content1">
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link >
                  <img src="assets/img/yfeth-assets/telegram-icon.svg" alt="" className="img-fluid" />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link >
                  <img src="assets/img/yfeth-assets/medium-icon.svg" alt="" className="img-fluid" />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link >
                  <img src="assets/img/yfeth-assets/facebook-icon.svg" alt="" className="img-fluid" />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link >
                  <img src="assets/img/yfeth-assets/linkedin-icon.svg" alt="" className="img-fluid" />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link >
                  <img src="assets/img/yfeth-assets/reddit-icon.svg" alt="" className="img-fluid" />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link >
                  <img src="assets/img/yfeth-assets/github-icon.svg" alt="" className="img-fluid" />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link >
                  <img src="assets/img/yfeth-assets/instagram-icon.svg" alt="" className="img-fluid" />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link >
                  <img src="assets/img/yfeth-assets/twitter-icon.svg" alt="" className="img-fluid" />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link >
                  <img src="assets/img/yfeth-assets/discord-icon.svg" alt="" className="img-fluid" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Topnav;

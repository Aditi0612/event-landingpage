import React from 'react'
import "./Styleheader.css"
export default function () {
  return (
    <div className="Headermain">
      <nav className="navbar navbar-expand-lg navbar-light bg-light one">
        <a className="navbar-brand" href="#">EventOMania</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link link1" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link1" href="#">About Us </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link1" href="#">Contact us </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link1" href="#">Events</a>
            </li>
            <li className="nav-item login">
              <a className="nav-link link2" href="#">Login</a>
            </li>
            <li className="nav-item SignUp">
              <a className="nav-link link2" href="#">Sign-Up</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

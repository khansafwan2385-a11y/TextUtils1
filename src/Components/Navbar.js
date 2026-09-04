
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar({Title,changeMode}) {  
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-lg  `}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{Title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        
        
      </ul>
      <div className="form-check form-switch box3 ">
  <input className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" onChange={changeMode}  />
  
</div>
      
     
    </div>
  </div>
</nav>
   

    </div>
  )
}
Navbar.propTypes = {
    Title:PropTypes.string,

}

Navbar.defaultProps = {
  Title: "TextUtils",
  about: "About Us"
}

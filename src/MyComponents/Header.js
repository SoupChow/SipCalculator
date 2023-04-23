import React from 'react'
import {Link} from 'react-router-dom'
export default function Header() {
  return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"rgb(20,150,0)"}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Return Calculator</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/lumpsum">Lump-Sum</Link>
              </li>
              <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">SIP</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" to="/">About</Link>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

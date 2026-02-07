import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{backgroundColor:"#FFF"}}
    >
      <div class="container p2">
        <Link class="navbar-brand" to='/'>
          <img
            src="/media/images/logo.svg"
            style={{ width: "25%" }}
            alt="logo"
          />
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active"  to='/'>
                Home
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link active"  to='/about'>
                About
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link active" to='/signup' style={{marginLeft:"30px"}}>
                Signup
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to='/product' style={{marginLeft:"30px"}}>
                Product
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to='/pricing' style={{marginLeft:"30px"}}>
                Pricing
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to='/support' style={{marginLeft:"30px"}}>
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

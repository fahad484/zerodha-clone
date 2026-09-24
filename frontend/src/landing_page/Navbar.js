import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      
        <nav class="navbar navbar-expand-lg position-fixed top-0  navbar-light bg-white border-bottom "style={{width:"100%"}}>
          <div class="container p-2">
            <Link class="navbar-brand" to={"/"}>
              <img src="media/images/logo.svg" alt="logo" style={{width:"25%"}}/>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              
              
               <ul class="navbar-nav  mb-2 ">
                <li class="nav-item">
                  <Link class="nav-link active mx-3" aria-current="page" to={"/signup"}>
                    Signup
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active mx-3" to={"/about"}>
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active mx-3" to={"/product"}>
                    Product
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active mx-3" to={"/pricing"}>
                    Pricing
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active mx-3" to={"/support"}>
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
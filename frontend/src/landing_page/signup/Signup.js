import React from 'react'
import SignupForward from '../SignupForward';
import "./Signup.css";

function Signup() {
    return (
      <div className="container  mb-5" style={{ marginTop: "5rem" }}>
        <div
          className="row text-center  text-muted"
          style={{ marginTop: "10rem" }}
        >
          <h1 className="fs-3">Open a free demat and trading account online</h1>
          <p className="fs-5">
            Start investing brokerage free and join a community of 1.6+ crore
            investors and traders
          </p>
        </div>
        <div className="row mb-5 align-items-center">
          <div className="col-6 mt-4">
            <img src="media/images/account_open.svg" />
          </div>
          <div className="col-6 mt-5">
            <h1 className="fs-4 mb-3">Signup now</h1>
            <p>Or track your existing application</p>
            <div>
              <div className="mb-4">
                <form>
                  <span className="border border-2 p-3 ">
                    <img src="media/images/india-flag.svg" className="me-2" />
                    +91
                  </span>
                  <input
                    placeholder="Enter your mobile number"
                    className="p-3 px-5 required "
                    style={{ width: "60%", fontSize: "1.1rem" }}
                  />
                  <br />
                 
                  <a className='signup-btn btn btn-primary my-3 ms-1' href="#signup" style={{color:"white",textDecoration:"none"}}>Get OTP</a>
                    
                  
                </form>
                <p>
                  By proceeding, you agree to the Zerodha{" "}
                  <a href="" style={{ textDecoration: "none" }}>
                    terms & privacy policy
                  </a>
                </p>
                <hr />
                <p>
                  Looking to open NRI account?{" "}
                  <a href="#signup" style={{ textDecoration: "none" }}>
                    Click here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-muted align-items-center  mt-5 ">
          <h1 className="fs-3 text-center">Already have a demat account?</h1>
          <p className="mb-5 text-center">
            Move your holdings to Zerodha and we'll cover your transfer costs,
            up to ₹500, learn more.
          </p>
          <div className="col-6 ">
            <img
              src="media/images/acop-benefits.svg"
              style={{ width: "65%" }}
            />
            <p className="fs-4 mt-4">
              Benefits of opening a Zerodha demat account
            </p>
          </div>
          <div className="col-6 ps-5 mt-5">
            <h1 className="fs-5">Unbeatable pricing </h1>
            <p className="fs-5 mt-4 mb-5 pe-3 text-muted">
              Zero charges for equity & mutual fund investments. Flat ₹20 fees
              for intraday and F&O trades.
            </p>
            <h1 className="fs-5">Best investing experience </h1>
            <p className="fs-5 mt-4 mb-5 pe-3 text-muted">
              Simple and intuitive trading platform with an easy-to-understand
              user interface.
            </p>
            <h1 className="fs-5">No spam or gimmicks </h1>
            <p className="fs-5 mt-4 mb-5 pe-3 text-muted">
              Committed to transparency — no gimmicks, spam, "gamification", or
              intrusive push notifications.
            </p>
            <h1 className="fs-5">The Zerodha universe </h1>
            <p className="fs-5 mt-4 mb-5 pe-3 text-muted">
              More than just an app — gain free access to the entire ecosystem
              of our partner products.
            </p>
          </div>
        </div>
        <div className="row text-center mb-5 mt-5 text-muted" id="signup">
          <h1 className="mt-5 mb-4 fs-2">Open a Zerodha account</h1>
          <p className='fs-5'>
           Simple and intuitive apps · ₹0 for investments · ₹20 for intraday and F&O trades.
          </p>
          <button className=" Herobtn mt-2 fs-5 btn btn-primary"  onClick={SignupForward}>
            Signup for free
          </button>
        </div>
      </div>
    );
}

export default Signup;
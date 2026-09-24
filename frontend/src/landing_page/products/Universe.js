import React from 'react'
import SignupForward from '../SignupForward';
function Universe() {
    return (
      <div className="container mt-5">
        <div className="row text-center">
          <h1>The Zerodha Universe</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
        <div className="row  mt-5 align-items-top">
          <div className="col-4 align-items-center ">
            <img src="media/images/zerodhaFundhouse.png" style={{width:"60%",marginLeft:"20%"}}  />
            <p className='ps-5 mt-5 text-muted fs-6 mb-5 text-center'>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
            <img src="media/images/streakLogo.png" style={{width:"40%",marginLeft:"30%"}} className='mt-4'/>
            <p className='ps-5  mt-5 text-muted fs-6 text-center'>
              Systematic trading platform
              that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col-4 align-items-center mt-3 ">
             <img src="media/images/sensibullLogo.svg" style={{width:"60%",marginLeft:"25%"}}  />
            <p className='ps-5 mt-5 text-muted fs-6  mb-5 text-center'>
              Options trading platform that lets you
              create strategies, analyze positions, and examine
              data points like open interest, FII/DII, and more.
            </p>
            <img src="media/images/smallcaseLogo.png" style={{width:"60%",marginLeft:"30%"}}  />
            <p className='ps-5 mt-5 text-muted fs-6 text-center'>
              Thematic investing platform
              that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4 align-items-center ">
              <img src="media/images/tijori.svg" style={{width:"50%",marginLeft:"25%"}}  />
            <p className='ps-5 mt-5 text-muted fs-6 mb-5 text-center'>
              Investment research platform
                that offers detailed insights on stocks,
                sectors, supply chains, and more.
            </p>
            <img src="media/images/dittoLogo.png" style={{width:"40%",marginLeft:"30%"}}  />
            <p className='ps-5 mt-5 text-muted fs-6 text-center'>
              Personalized advice on life
                and health insurance. No spam
                and no mis-selling.
            </p>
          </div>
          <div className='row mt-5 mb-5'>
            <div className='col-3'></div>
            <div className='col-6 '> <button className='btn btn-primary fw-medium text-center fs-5 px-5 ' style={{marginLeft:"11.3rem"}} onClick={SignupForward}>Sign up for free</button></div>
            <div className='col-3'></div>
          
          </div>
          
        </div>
      </div>
    );
}

export default Universe;
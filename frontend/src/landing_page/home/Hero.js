import React from 'react'
// import {useNavigate} from 'react-router-dom';
// import axios from 'axios';
import SignupForward from '../SignupForward';


function Hero() {
    return ( 
        <div className='container p-5 text-center mb-5'style={{marginTop:"5rem"}}>
            <div className='row text-muted'>
                <img src="/media/images/homeHero.png" alt="hero image" className='mb-5'/>
                <h1 className='mt-5 mb-3 fs-2'>Invest in everything</h1>
                <p className='fs-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className=' Herobtn mt-3 fs-5 btn btn-primary' onClick={SignupForward}>Signup Now</button>
            </div>
        </div>
     );
}

export default Hero;
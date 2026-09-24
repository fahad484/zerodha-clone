import React from 'react'
import SignupForward from './SignupForward';
function OpenAccount({title,item,buttonText}) {
    return ( 
       <div className='container p-5 text-center mb-5'>
            <div className='row text-muted'>
                
                <h1 className='mt-5 mb-4 fs-2'>Open a Zerodha account</h1>
                <p className='fs-5'>Modern platforms and apps, &#8377;0 investment, and flat &#8377;20 intraday and F&O trades.</p>
                <button className=' Herobtn mt-2 fs-5 btn btn-primary' onClick={SignupForward}>Sign up Now</button>
            </div>
        </div>
     );
}

export default OpenAccount;

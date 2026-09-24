import React from 'react'

function Hero() {
    return ( 
       <div className='container text-center mb-5'style={{marginTop:"10rem"}}>
        <h1 className='mt-5'>Technology</h1>
        <p className='mt-3 text-muted fs-5'>Sleek, modern and intuitive trading platforms</p>
        <p>check out our <a href="" style={{textDecoration:"none"}}> investment offerings <i class="fa-solid fa-arrow-right-long"></i></a> </p>
       </div>
     );
}

export default Hero;
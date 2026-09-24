import React from 'react'

function Hero() {
    return ( 
        <div className='container-fluid   bg-light ' style={{marginTop:"5rem"}}>
            <nav class=" bg-body-tertiary">
                <div className='container mt-3  pt-3 d-flex justify-content-between align-items-center'>
                    <a className="navbar-brand fs-2 fw-semibold text-muted" href="#">Support Portal</a>
                    <button className='btn btn-primary'>My tickets</button>
                </div>
            </nav>
            <div className='row pb-5'>
                <input placeholder="Eg: How do I open my account, How do I activate F&O..." type="text" className='p-3 border-color-grey' style={{width:"80%",marginLeft:"8rem",marginTop:"1.8rem"}}/>
            </div>
       </div>
     );
}

export default Hero;
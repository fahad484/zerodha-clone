import React from 'react'

function Education() {
    return ( 
        <div className='container mt-5 '>
            <div className='row'>
                <div className='col-6'><img src="media/images/education.svg" style={{width:"80%"}}/></div>
                <div className='col-6 mt-4'>
                    <h1 className='fs-2 '>Free and open market education</h1>
                    <p className='mt-5'>varsity, the largest online stock market education book in the world <br/>covering everything from basics to advanced trading.</p>
                    <a href="#" style={{textDecoration:"none"}}>varsity&nbsp;&nbsp;<i class="fa-solid fa-arrow-right-long"></i></a>
                    <p className='mt-5'>TradingQ&A, the most active trading and investment community in<br/>India for all your market related queries.</p>
                    <a href="#" style={{textDecoration:"none"}}>TradingQ&A&nbsp;&nbsp;<i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;
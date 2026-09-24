import React from 'react'

function Team() {
    return ( 
        <div className='container'>
            <div className='row border-top'>
                <h1 className='text-center fs-3 text-muted'style={{marginBottom:"2rem",marginTop:"3rem"}}>People</h1>
            </div>
            <div className='row mt-5'>
               <div className='col-5 '>
                <img src="media/images/nithinkamath.jpg" style={{borderRadius:"50%",width:"65%",marginLeft:"30%"}}/>
                <p className='fs-5 mt-3' style={{paddingLeft:"48%"}}>Nithin Kamath</p>
                <p className='text-muted fs-6 ' style={{paddingLeft:"50%"}}>Founder, CEO</p>
               </div>
               <div className='col-7 ps-5 ' style={{fontSize:"18px"}}>
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <p>Playing basketball is his zen.</p>
                <p>Connect on <span style={{color:"blue"}}>Homepage</span> / <span style={{color:"blue"}}>TradingQnA</span>/ <span style={{color:"blue"}}>Twitter</span></p>
               </div>
            </div>
        </div>
     );
}

export default Team;
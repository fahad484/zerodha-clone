import React from 'react'

function Award() {
    return ( 
       <div className='container mt-5 '>
        <div className='row'>
            <div className='col-6 p-3'>
                 <img src='media/images/largestBroker.svg'/>
            </div>
            <div className='col-6 p-3 mt-3'>
                <h1>Largest stock broker in India</h1>
                <p>2+ million Zerodha clients contribute to over 15% of all retail order <br></br>volumes in India daily by trading and investing in: </p>
                <div className='row mt-5 mb-2'>
                    <div className='col-6'>
                        <ul>
                        <li>Futures and Options</li><br/>
                        <li>Commodity derivatives</li><br/>
                        <li>Currency derivatives</li>
                    </ul>
                    </div>
                    <div className='col-6'>
                        <ul>
                        <li>Stocks amd IPOs</li><br/>
                        <li>Direct mutual funds</li><br/>
                        <li>Bonds and Govt. securities</li>
                    </ul>
                    </div>
                    
                </div>
            
                <img src='media/images/pressLogos.png' alt='support' style={{width:"90%"}}/>
            </div>
        </div>
       </div>
     );
}

export default Award;
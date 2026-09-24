import React from 'react'

function Pricing() {
    return ( 
       <div className='container mt-5 mb-5'>
        <div className='row '>
            <div className='col-5'>
                <h1 className='mb-5 fs-2'>Unbeatable pricing</h1>
                <p >we pioneered the concept of discount broking and price <br/>transparency in India. Flat fees and no hidden charges. </p>
                <a href='#' style={{textDecoration:"none"}}>See pricing<i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
            <div className='col-1'></div>
            <div className='col-6 '>
                <div className='row text-center '>
                    <div className='col border p-4'>
                        <h1 className='mb-4'>&#8377;0</h1>
                        <p>Free equity delivery and <br/> direct mutual funds</p>
                    </div>
                    <div className='col border p-4'>
                        <h1 className='mb-4'>&#8377;20</h1>
                        <p>Intraday and F&O</p>
                    </div>
                </div>
            </div>
        </div>
       </div>
     );
}

export default Pricing;
import React from 'react'

function LeftSection({imageUrl,heading,description,TryDemo,learnMore,playStoreBadge,appStoreBadge}) {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row align-items-center'>
                <div className='col-6'>
                    <img src={imageUrl} style={{marginLeft:"10%"}}/>
                </div>
                <div className='col-1'></div>
                <div className='col-5 ps-5 ' >
                    <h1 className='fs-5'>{heading}</h1>
                    <p className='fs-5 mt-4 pe-3 text-muted'>{description}</p>
                    <p >
                        <a href='' style={{textDecoration:"none",display:TryDemo?"1":"none"}}>{TryDemo} <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href="" className='ps-5'  style={{textDecoration:"none",display:learnMore?"1":"none"}}>{learnMore} <i class="fa-solid fa-arrow-right-long"></i></a>
                    </p>
                    <div className='mt-4'>
                        <a href=''><img src={playStoreBadge}/></a>
                        <a href=''className='ms-3'><img src={appStoreBadge}/></a>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default LeftSection;
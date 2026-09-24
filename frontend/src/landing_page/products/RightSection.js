import React from 'react'

function RightSection({imageUrl,heading,description,learnMore}) {
    return ( 
        <div className='container  mt-5'>
            <div className='row align-items-center' >
                <div className='col-4 ms-4 ' >
                    <h1 className='fs-4'>{heading}</h1>
                    <p className='fs-5 mt-4 text-muted'>{description}</p>
                    <p >
                        <a href='' style={{textDecoration:"none"}}>{learnMore}  
                        <i class="fa-solid fa-arrow-right-long"></i></a>
                    </p>
                </div>
                <div className='col-1'></div>
                <div className='col-6  ' >
                    <img  src={imageUrl} style={{width:"44rem" ,paddingRight:"1rem"}} />
                </div>

            </div>
        </div>
     );
}

export default RightSection;
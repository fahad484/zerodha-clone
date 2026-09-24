import React, { useState } from 'react'

function DropDown({title,items}) {
    const [open,setOpen]=useState(false);
    return ( 
         <div className="  mb-4  " style={{borderRadius:"0"}}>
              <button
                className="btn btn-light btn-lg  border dropdown-toggle  d-flex justify-content-between align-items-center "
                type="button"
                onClick={()=>setOpen(!open)}
                style={{width:"48rem",height:"4.8rem"}}
              >
                <span ><i className="fa-solid fa-circle-plus me-2"style={{color:"blue"}}></i>{title}</span>
                
              </button>
              {open && (
                <ul className=" fs-5 border" style={{width:"48rem"}} >
                {items.map((item,idx)=>(
                    <li className='ps-3 m-2 ' key={idx} >
                  <a href='#' style={{textDecoration:"none"}}>{item}</a></li>
                ))}
                
              </ul>
              )}
              
            </div>
     );
}

export default DropDown;
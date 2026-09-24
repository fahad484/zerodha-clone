import React from 'react'
import DropDown from './DropDown';

function CreateTicket() {
    return (
      <div className="container">
        <div className="row ">
          <div className="col-8 mt-5 mb-5 ">
           <DropDown title="Account Opening" items={["Resident individual","Minor","Non Resident Indian (NRI)","Company, Partnership, HUF and LLP","Glossary"]}/>
           <DropDown title="Your Zerodha account" items={["Your Profile","Account modification","Client Master Report (CMR) and Depository Participant (DP)","Nomination","Transfer and conversion of securities"]}/>
           <DropDown title="Kite" items={["IPO","Trading FAQs","Margin Trading Facility (MTF) and Margins","Charts and orders","Alerts and Nudges","General"]}/>
           <DropDown title="Console" items={["Portfolio","Corporate actions","Funds statement","Reports","Profile","Segments"]}/>
           <DropDown title="Coin" items={["Mutual funds","National Pension Scheme (NPS)","Fixed Deposit (FD)","Features on Coin","Payments and Orders","General"]}/>
          </div>
          <div className="col-4  mt-5 mb-5 ">
            <div className='border-start  border-warning border-5 ms-5 'style={{width:"90%",backgroundColor:"#FFF1DE"}} >
              <ul className='p-3 ms-3 '>
                <li className='p-2'><a href="">Maintenance activity of CDSL EDIS facility</a></li>
                <li className='p-2'><a href="">Latest Intraday leverages and Square-off timings</a></li>
              </ul>
            </div>
            <table className='ms-5 mt-4  border ' style={{width:"90%"}}>
              <thead>
                <tr>
                  <th className='border ps-3 text-muted bg-light p-3 fw-semibold'>Quick links</th>
                </tr>
              </thead>
              <tbody>
                  <tr><td className='border p-2 px-5 ps-3' style={{lineHeight:"1.7",paddingRight:"2rem"}}><a href="#" style={{textDecoration:"none"}}>1.Track account opening</a></td></tr>
                  <tr><td className='border p-2 px-5 ps-3' style={{lineHeight:"1.7",paddingRight:"2rem"}}><a href="#" style={{textDecoration:"none"}}>2.Track segment activation</a></td></tr>
                  <tr><td className='border p-2 px-5 ps-3' style={{lineHeight:"1.7",paddingRight:"2rem"}}><a href="#" style={{textDecoration:"none"}}>3.Intraday margins</a></td></tr>
                  <tr><td className='border p-2 px-5 ps-3' style={{lineHeight:"1.7",paddingRight:"2rem"}}><a href="#" style={{textDecoration:"none"}}>4.Kite user manual</a></td></tr>
                  <tr><td className='border p-2 px-5 ps-3' style={{lineHeight:"1.7",paddingRight:"2rem"}}><a href="#" style={{textDecoration:"none"}}>5.Learn how to create a ticket</a></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
}

export default CreateTicket;
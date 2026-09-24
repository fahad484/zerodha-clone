import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return ( 
        <footer  className='border-top' style={{backgroundColor:"#f8f9fa" }}>
            <div className='container mb-2 '>
            <div className='row mt-5 '>
                <div className='col '>
                    <img src="media/images/logo.svg" alt="logo" style={{width:"60%"}}/>
                    <p className='mt-3 '>&copy; 2010 - 2026, Zerodha Broking Ltd.<br/>All rights reserved.</p>
                    <span >
                        <i class="fa-brands fa-twitter m-2"></i>
                        <i class="fa-brands fa-square-facebook m-2"></i>
                        <i class="fa-brands fa-instagram m-2"></i>
                        <i class="fa-brands fa-linkedin-in m-2"></i>
                        <i class="fa-brands fa-telegram m-2"></i>

                    </span>
                </div>
                <div className='col mb-5  ps-2 '>
                    <p className='fw-bold'>Company</p>
                    <Link to={"/about"} style={{textDecoration:"none"}} className='text-muted d-block mb'>About</Link><br/>
                    <Link to={"/product"} style={{textDecoration:"none"}} className='text-muted d-block mb'>products</Link><br/>
                    <Link to={"/pricing"} style={{textDecoration:"none"}} className='text-muted d-block mb'>pricing</Link><br/>
                    <Link to={"/"} style={{textDecoration:"none"}} className='text-muted d-block mb'>Referrel arogramme</Link><br/>
                    <Link to={"/"} style={{textDecoration:"none"}} className='text-muted d-block mb'>Carrers</Link><br/>
                    <Link to={"/"} style={{textDecoration:"none"}} className='text-muted d-block mb'>Zerodha.tech</Link><br/>
                    <Link to={"/"} style={{textDecoration:"none"}} className='text-muted d-block mb'>press & media</Link><br/>
                    <Link to={"/"} style={{textDecoration:"none"}} className='text-muted d-block mb'>Zerodha cares (CSR)</Link>
                </div>
                <div className='col ps-2'>
                    <p className='fw-bold'>Support</p>
                    <Link to={"/"} style={{textDecoration:"none"}} className='text-muted d-block mb'>contact</Link><br/>
                    <Link to={"/"} style={{textDecoration:"none"}} className='text-muted d-block mb'>support portal</Link><br/>
                    <Link to={"/"} style={{textDecoration:"none"}} className='text-muted d-block mb'>z-connect blog</Link><br/>
                    <Link to={"/"} style={{textDecoration:"none"}} className='text-muted d-block mb'>List of charges</Link><br/>
                    <Link to={"/"} style={{textDecoration:"none"}} className='text-muted d-block mb'>Dowloads & resources</Link>
                </div>
                <div className='col ps-2'>
                    <p className='fw-bold'>Account</p>
                    <Link to={"/"} style={{textDecoration:"none"}}className='text-muted d-block mb'>Open an account</Link><br/>
                    <Link to={"/"} style={{textDecoration:"none"}}className='text-muted d-block mb'>Fund transfer</Link><br/>
                    <Link to={"/"} style={{textDecoration:"none"}}className='text-muted d-block mb'>60 day challenge</Link><br/>
                </div>
                
            </div>          
            <div className="text-muted " style={{fontSize:"14px"}}>
                 <p >Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                <br/>
                <p>Procedure to file a complaint on SEBI SCORES/SMARTODR: Register on SCORES portal & SMARTODR. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of grievances</p>
                <br/>
                <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                <br/>
                <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
                <br/>
                <div className='d-flex text-center gap-3 '>
                    <Link to={"/"} className='text-muted' style={{textDecoration:"none"}}>NSE</Link>
                    <Link to={"/"} className='text-muted' style={{textDecoration:"none"}}>BSE</Link>
                    <Link to={"/"} className='text-muted' style={{textDecoration:"none"}}>MCX</Link>
                    <Link to={"/"} className='text-muted' style={{textDecoration:"none"}}>MSEI</Link>
                    <Link to={"/"} className='text-muted' style={{textDecoration:"none"}}>Terms & conditions</Link>
                    <Link to={"/"} className='text-muted' style={{textDecoration:"none"}}>Policies & procedures</Link>
                    <Link to={"/"} className='text-muted' style={{textDecoration:"none"}}>Privacy policy</Link>
                    <Link to={"/"} className='text-muted' style={{textDecoration:"none"}}>Disclosure</Link>
                    <Link to={"/"} className='text-muted' style={{textDecoration:"none"}}>For investor's attention</Link>     
                    <Link to={"/"} className='text-muted' style={{textDecoration:"none"}}>Investor charter</Link>     
                    <Link to={"/"} className='text-muted' style={{textDecoration:"none"}}>Sitemap</Link>   
                </div>
            </div>
        </div>
        </footer>
        
     );
}

export default Footer;
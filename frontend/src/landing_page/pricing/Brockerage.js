import React from 'react'

function Brockerage() {
    return ( 
        <div className='container'>
            <div className='row'>
                <h1 className='text-muted fs-4 mb-4'>Charges for account opening</h1>
                <table className='border mb-5' >
                    <thead >
                        <tr className='border-bottom  text-muted '>
                            <th className='p-3 fs-6'>Type of account</th>
                            <th className='p-3 fs-6'>Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr className="text-muted">
                        <td className="p-3">Individual account</td>
                        <td className="p-3"><span style={{backgroundColor:"green",color:"white",borderRadius:"8%"}} className='px-2'>FREE</span></td>
                    </tr>
                    <tr className="text-muted">
                        <td className="p-3">Minor account</td>
                        <td className="p-3"><span style={{backgroundColor:"green",color:"white",borderRadius:"8%"}} className='px-2'>FREE</span></td>
                    </tr>
                    <tr className="text-muted">
                        <td className="p-3">NRI account</td>
                        <td className="p-3">₹ 500</td>
                    </tr>
                    <tr className="text-muted">
                        <td className="p-3">HUF account</td>
                        <td className="p-3"><span style={{backgroundColor:"green",color:"white",borderRadius:"8%"}} className='px-2'>FREE</span> (online) / ₹ 500 (offline)</td>
                    </tr>
                    <tr className="text-muted">
                        <td className="p-3">Partnership, LLP, and Corporate accounts (offline only)</td>
                        <td className="p-3">₹ 500</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className='row mb-5'>
                <h1 className='text-muted fs-4 mb-4'>Demat AMC (Annual Maintenance Charge)</h1>
                <div className='col text-muted'>
                    <div className='border-start border-primary border-4 p-2 rounded-1 bg-light d-inline px-3 '>Free for first year*</div>
                    <p className='mt-3'>From second year onwards, for BSDA accounts:</p> 
                </div>
                <table className='border ' >
                    <thead >
                        <tr className='border-bottom  text-muted '>
                            <th className='p-3 fs-6'>Value of holdings</th>
                            <th className='p-3 fs-6'>AMC</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr className="text-muted">
                        <td className="p-3">Up to ₹4 lakh</td>
                        <td className="p-3"><span style={{backgroundColor:"green",color:"white",borderRadius:"8%"}} className='px-2'>FREE</span></td>
                    </tr>
                    <tr className="text-muted">
                        <td className="p-3">₹4 lakh – ₹10 lakh</td>
                        <td className="p-3">₹100 per year + 18% GST, charged quarterly</td>
                    </tr>
                    <tr className="text-muted">
                        <td className="p-3">Above ₹10 lakh</td>
                        <td className="p-3">₹300 per year + 18% GST, charged quarterly</td>
                    </tr>
                    
                    </tbody>
                </table>
                <p className='mt-1 text-muted'>For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless of holdings value, charged quarterly.</p>
                <p className='mt-1 text-muted'>To learn more about BSDA, <span style={{color:"blue"}}>click here</span>. To learn more about AMC, <span style={{color:"blue"}}>click here</span>.</p>
                <p className='mt-1 text-muted'>*Resident individual accounts only.</p>

                <h1 className='text-muted fs-4 mb-4 mt-5'>Charges for optional value added services</h1>
                <table className='border ' >
                    <thead >
                        <tr className='border-bottom  text-muted '>
                            <th className='p-3 fs-6'>Service</th>
                            <th className='p-3 fs-6'>Billing Frequency</th>
                            <th className='p-3 fs-6'>Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr className="text-muted">
                        <td className="p-3">Tickertape</td>
                        <td className="p-3">Monthly / Quarterly / Annual</td>
                        <td className="p-3">Free: 0 | Pro: 249/699/2399</td>
                    </tr>
                    <tr className="text-muted">
                        <td className="p-3">Smallcase</td>
                        <td className="p-3">Per transaction</td>
                        <td className="p-3">Buy & Invest More: 100 | SIP: 10</td>
                    </tr>
                    <tr className="text-muted">
                        <td className="p-3">Kite Connect</td>
                        <td className="p-3">Monthly</td>
                        <td className="p-3">Connect: 500 | Personal: Free</td>
                    </tr>
                    
                    </tbody>
                </table>
                
            </div>
            <p className='fs-4'>Charges explained</p>
            <div className='row text-muted py-3'>
                <div className='col'>
                    <p className='fs-5'>&nbsp;Securities/Commodities transaction tax</p>
                    <p className='p-2'>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
                    <p className='p-2'>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
                    <p className='fs-5'>&nbsp;Transaction/Turnover Charges</p>
                    <p className='p-2'>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
                    <p className='p-2'>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
                    <p className='p-2'>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>
                    <p className='p-2'>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
                    <p className='p-2'>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>

                    <p className='fs-5'>&nbsp;Call & trade</p>
                    <p className='p-2'>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>
                    <p className='fs-5'>&nbsp;Stamp charges</p>
                    <p className='p-2'>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>
                    <p className='fs-5'>&nbsp;NRI brokerage charges</p>
                    <ul>
                        <li className='p-2'>For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).</li>
                        <li className='p-2'>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li className='p-2'>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                    </ul>
                     <p className='fs-5'>&nbsp;Account with debit balance</p>
                    <p className='p-2'>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>
                    <p className='fs-5'>&nbsp;Charges for Investor's Protection Fund Trust (IPFT) by NSE</p>
                    <ul>
                        <li className='p-2'>Equity and Futures - ₹0.01 per crore + GST of the traded value.</li>
                        <li className='p-2'>Options - ₹0.01 per crore + GST traded value (premium value).</li>
                        <li className='p-2'>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                    </ul>
                    <p className='fs-5'>&nbsp;Margin Trading Facility (MTF)</p>
                    <ul>
                        <li className='p-2'>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
                        <li className='p-2'>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
                        <li className='p-2'>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
                    </ul>
                    
                </div>
                <div className='col '>
                    <p className='fs-5'>&nbsp;GST</p>
                    <p className='p-2'>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
                    <p className='fs-5'>&nbsp;SEBI Charges</p>
                    <p className='p-2'>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
                    <p className='fs-5'>&nbsp;DP (Depository participant) charges</p>
                    <p className='p-2'>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                    <p className='p-2'>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                    <p className='p-2'>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>
                     <p className='fs-5'>&nbsp;Pledging charges</p>
                    <p className='p-2'>₹30 + GST per pledge request per ISIN.</p>
                     <p className='fs-5'>&nbsp;AMC (Account maintenance charges)</p>
                    <p className='p-2'>Free for the first year on all new resident individual accounts.</p>
                    <p className='p-2'>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, Click here</p>
                    <p className='p-2'>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, Click here</p>
                    <p className='fs-5'>&nbsp;Corporate action order charges</p>
                    <p className='p-2'>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>
                    <p className='fs-5'>&nbsp;Off-market transfer charges</p>
                    <p className='p-2'>₹25 per transaction.</p>
                    <p className='fs-5'>&nbsp;Physical CMR request</p>
                    <p className='p-2'>First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>
                    <p className='fs-5'>&nbsp;Payment gateway charges</p>
                    <p className='p-2'>₹9 + GST (Not levied on transfers done via UPI)</p>
                    <p className='fs-5'>&nbsp;Delayed Payment Charges</p>
                    <p className='p-2'>Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. Learn more.</p>
                    <p className='fs-5'>&nbsp;Trading using 3-in-1 account with block functionality</p>
                    <ul>
                        <li className='p-2'>For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).</li>
                        <li className='p-2'>Delivery & MTF Brokerage: 0.5% per executed order.</li>
                        <li className='p-2'>Intraday Brokerage: 0.05% per executed order.</li>
                    </ul>
                </div>
            </div>
            <p className='fs-5'>&nbsp;Disclaimer</p>
            <p className='p-2'>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
        </div>
     );
}

export default Brockerage;
import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  openSellWindow: (uid)=>{},
  closeBuyWindow: () => {},
  closeSellWindow: ()=>{},
});

export const GeneralContextProvider = (props) => {
  // const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [actionWindow, setActionWindow] = useState(null);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  // buy or sell order dynamic re-render holdings
  const [refreshHoldings, setRefreshHoldings] = useState(false); 

  const handleRefreshHolding =()=>{
    setRefreshHoldings((prev)=>!prev);
  }

  const handleOpenBuyWindow = (uid) => {
    // setIsBuyWindowOpen(true);
    setActionWindow("BUY");
    setSelectedStockUID(uid);
  };

  const handleOpenSellWindow = (uid) =>{
    setActionWindow("SELL");
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    // setIsBuyWindowOpen(false);
    setActionWindow(null);
    setSelectedStockUID("");
  };
  const handleCloseSellWindow = () => {
    setActionWindow(null);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeBuyWindow: handleCloseBuyWindow,
        closeSellWindow: handleCloseSellWindow,
        handleRefreshHolding,
        refreshHoldings,
      }}
    >
      {props.children}
      {actionWindow === "BUY" && <BuyActionWindow uid={selectedStockUID} />}
      {actionWindow === "SELL" && <SellActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;

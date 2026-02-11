import React from "react";
function Hero() {
  return (
    <div class="container mt-5">
        <div className="row p-5 border-bottom text-center">
            <h1>Pricing</h1>
            <h3 className="text-muted f-5 mt-3">Free euqity investment and flat 20 traday and F&O trades</h3>
        </div>

        <div className="row p-5 mt-5 text-center text-muted">
            <div className="col-4 p-3">
                <img src='/media/images/pricingEquity.svg'/>
                <h4>Free equity delivery</h4>
                <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className="col-4 p-3">
                <img src='/media/images/intradayTrades.svg'/>
                <h4>Intraday and F&O trades</h4>
                <p >Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className="col-4 p-3 ">
                <img src='/media/images/pricing0.svg'/>
                <h4>Free direct MF</h4>
                <p >All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
        </div>
       
    </div>
  );
}

export default Hero;

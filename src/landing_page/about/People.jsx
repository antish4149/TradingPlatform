import React from "react";

function People() {
  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center mb-3 pt-5">People</h2>
        <div className="col-6 text-center pb-5 ">
          <div className="pb-5">
            <img
              src="/media/images/antish.png"
              class="rounded-circle"
              alt="founder"
              style={{ width: "50%" }}
            />
            <p className="pt-2">Antish Kumar Yadav</p>
            <p>Founder & CEO</p>
          </div>
        </div>

        <div className="col-6 pt-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="">Homepage</a>/ <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default People;

import React from 'react';

function Pricing(){
    return(
        <div class='container'>
            <div className='row'>
                <div className="col-4">
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p>We pioneered t he concept of disount broking and price
                        transparency in Inida. Flat fees and no hidden charges.
                    </p>
                    <a className='text-primary' style={{textDecoration:"none "}}>See pricing 
                            <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-2"></div>
                <div className="col-6 mb-5">
                    <div className="row">
                        <div className="col-6 border border-1 p-4 text-center">
                            <h1 class='fs-2 mb-3'>₹ 0</h1>
                            <p>Free equity delivery and<br/>
                                direc mutual funds
                            </p>
                        </div>
                        <div className="col-6 border border-1 p-4 text-center">
                            <h1 className='mb-3'>₹ 20</h1>
                            <p>Intraday and F&O
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Pricing;
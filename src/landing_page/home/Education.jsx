import React from 'react';
function Education(){
    return(
        <div class='container'>
            <div className='row'>
                <div className="col-4">
                    <img src='/media/images/education.svg' style={{width:"99%"}}/>
                </div>
                <div className="col-2"></div>
                <div className="col-6 mt-5">
                    <h2 className='mt-2 fs-2'>Free and open market education</h2>
                    <p>Varsity, the largest online stock market education book in the world<br/>
                    covering everything from the basucs to adavaced trading.</p>
                    <a href=''>Versity <i class="fa-solid fa-arrow-right"></i></a>
                    <p className='mt-4'>TradingQ&A, the most active trading and investment commodity in<br/>
                    India for all your market related queries.</p>
                    <a href=''>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    )
}
export default Education;
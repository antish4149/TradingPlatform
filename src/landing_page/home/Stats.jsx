import React from 'react';

function Stats(){
    return (
        <div className='container p-3'>
            <div className='row p-5'>
            <div className='col-6 p-5'>
                <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                
                <h2 class='fs-4'>Customer-first always</h2>
                <p class='text-muted'>That's why 1.3+ crore customers trust Zerodha with 3.5+
                    lakh crores worth of equity investments.
                </p>
        
                <h2 class='fs-4'>No spam or gimmicks</h2>
                <p class='text-muted'>No gimmicks, spam, "gamification, or annoying push notification. 
                    High quality apps that you use at your pace the way you like
                </p>
            
            
                <h2 class='fs-4'>The Zerodha universe</h2>
                <p class='text-muted'>Not just an app, but a whole ecosystem. Our investement in 
                    30+ fintech startups offer tailored services specific to you needs.
                </p>
            
                <h2 class='fs-4'>Do better with money</h2>
                <p class='text-muted'>With initiatives like Nudge and Kill Switch, we don't just 
                    facilitate transaction, but actively help you do better with 
                    you money
                </p>
                
            </div>
            <div className='col-6 p-5 mt-5'>
                <img src="/media/images/ecosystem.png" style={{width:"95%"}} className='mx-auto'/>
                <div class='text-center'>
                <a href="" class='mx-5' style={{textDecoration:"none"}}>Explore a products <i class="fa-solid fa-arrow-right"></i></a>
                <a href="" style={{textDecoration:"none"}}>Try kite</a>
            </div>
                </div>
            </div>
        </div>
    )
}
export default Stats;
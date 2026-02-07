import React from "react";

function SignUp() {
    return ( 
        <div class='container'>
            <div className="text-center  margin">
                <h2 className="mb-3 fs-3 text-muted">Open a free demat and trading account online</h2>
        <p className="fs-5">Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
            </div>
        <div className="row mb-5" >
            <div className="col-6">
                <img src='/media/images/signup.png' style={{width:"90%"}}/>
            </div>
            <div className="col-6">
                <h2>Signup Now</h2>
                <p>Or track your existing application</p>
                <form>
                    <div>
                        <span><a href=''>+91</a></span>
                        <input type='tel' placeholder="Enter your mobile number" name='mobile_no'/>
                    </div>
                    <button type="button" class="btn btn-primary btn-lg ps-5 mt-3" >Get OTP</button>
                </form>
            </div>
        </div>

        </div>
     );
}

export default SignUp;
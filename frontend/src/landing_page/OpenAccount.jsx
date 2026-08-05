import React from 'react';

function OpenAccount() {
    return ( 
        <div className="container mb-5">
            <div className="row text-center">
                <img src="media\images-20260413T105856Z-3-001\images\homeHero.png" className='img-fluid mb-5' alt="Hero-Image"  />
                <h1 className='mt-5'>Open a Zerodha Account</h1>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='p-3 btn btn-primary fs-5 mb-5'style={{width:"20%", margin:"0 auto"}}>SignUp For Free</button>
            </div>
        </div>
     );
}

export default OpenAccount;
import React from 'react';

function HeroSection() {
    return ( 
        <div className="container mb-5">
            <div className="row text-center">
                <img src="media\images-20260413T105856Z-3-001\images\homeHero.png" className='img-fluid mb-5' alt="Hero-Image" id='heroimg' />
                <h1 className='mt-5'>Invest in Everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds.</p>
                <button className='p-3 btn btn-primary fs-5 mb-5'style={{width:"20%", margin:"0 auto"}}>SignUp For Free </button>
            </div>
        </div>
    );
}

export default HeroSection;
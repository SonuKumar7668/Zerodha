import React from 'react'
function Hero() {
    return (
        <div className='container p-5 text-center'>
            <div className='row'>
                    <img src='/media/images/homeHero.png' alt='Home hero' className='mb-5'/>
            </div>
            <h1>Invest in everything</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button className='p-2 btn btn-primary fs-5' style={{width:"20%",margin: "0 auto"}}>Sign up</button>
        </div>
    );
}

export default Hero;
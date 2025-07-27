import React from 'react'

function Universe() {
    return (
        <div className='container mt-5'>
            <div className='row text-center'>
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-4 p-5'>
                    <img src="/media/images/zerodhaFundhouse.png" style={{ width: "200px" }} alt='image' />
                    <p className='text-small text-muted'>Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.</p>
                </div>
                <div className='col-4 p-5'>
                    <img src="/media/images/sensibullLogo.svg" style={{ width: "200px" }} alt='image' />
                    <p className='text-small text-muted mt-5'>Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.</p>
                </div>
                <div className='col-4 p-5'>
                    <img src="/media/images/streakLogo.png" style={{ width: "200px" }} alt='image' />
                    <p className='text-small text-muted'>Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.</p>
                </div>

                <div className='col-4 p-5 mt-5'>
                    <img src="/media/images/goldenpiLogo.png" style={{ width: "200px" }} alt='image' />
                    <p className='text-small text-muted'>Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.
                    </p>
                </div>
                <div className='col-4 p-5 mt-5'>
                    <img src="/media/images/smallcaseLogo.png" style={{ width: "200px" }} alt='image' />
                    <p className='text-small text-muted mt-5'>Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.</p>
                </div>
                <div className='col-4 p-5 mt-5'>
                    <img src="/media/images/dittoLogo.png" style={{ width: "200px" }} alt='image' />
                    <p className='text-small text-muted'>Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.
                        Sign up for free</p>
                </div>
                <button className='p-2 btn btn-primary fs-5' style={{width:"20%",margin: "40px auto"}}>Sign up for free</button>
            </div>
        </div>
    );
}

export default Universe;
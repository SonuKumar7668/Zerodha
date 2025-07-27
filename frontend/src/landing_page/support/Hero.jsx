import React from 'react'

function Hero() {
    return ( 
        <section className='container-fluid' id="supportHero">
            <div className=' p-5 mb-5' id="supportWrapper">
                <h4>Support Portal</h4>
                <a href="">Track Ticket</a>
            </div>
            <div className='row mb-5'>
                <div className=' col-6 p-5' id="searchWrapper">
                    <h1>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg. how do i activate F&O'/>
                    <a href=""> Track Account Opening </a> 
                    <a href=""> Track segment activation </a>
                    <a href=""> Intraday margins </a>
                    <a href=""> Kite user manual </a>
                </div>
                <div className='col-6 p-5'>
                    <h1>Features</h1>
                    <ol>
                    <li><a href="">Current takeovers and Delisting </a></li>
                    <li><a href="">Latest Intraday Laverages</a></li>
                    </ol>

                </div>
            </div>
        </section>
     );
}

export default Hero;
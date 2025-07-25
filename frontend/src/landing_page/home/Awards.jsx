import React from 'react'

function Awards() {
    return ( 
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-6'>
                    <img src="/media/images/largestBroker.svg" alt="large broker"/>
                </div>
                <div className='col-6' style={{margin:"auto"}}>
                    <h1>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <img src="media/images/pressLogos.png" alt="Press logos" style={{width: "90%",margin: "auto"}}/>
                </div>
            </div>
        </div>
     );
}

export default Awards;
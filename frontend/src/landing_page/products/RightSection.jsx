import React from 'react'

function RightSection({imageUrl, productName, productDescription, link}) {
    return ( 
        <div className='container box'>
            <div className='row '>
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href={link}>Learn More</a>
                </div>
                <div className='col-6'>
                    <img src={imageUrl} alt="image"/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;
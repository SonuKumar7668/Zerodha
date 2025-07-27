import React from 'react'

function LeftSection({imageUrl, productName, productDescription, tryDemo, learnMore , GooglePlay , appStore}) {
    return ( 
        <div className='container box mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src={imageUrl} alt='Image'/>
                </div>
                <div className='col-6 p-5'>
                    <h1>{ productName}</h1>
                    <p>{ productDescription}</p>
                    <a href={tryDemo} style={{marginRight: "10px"}}>try Demo <span>→</span></a>
                    <a href={learnMore} >Learn More <span>→</span></a>

                    <div className='mt-3'>
                    <a href={GooglePlay} style={{marginRight: "15px"}}>
                        <img src='/media/images/googlePlayBadge.svg' alt='google Play'/>
                    </a>
                    <a href={appStore} className='mr-4'>
                        <img src='/media/images/appstoreBadge.svg' alt='google Play'/>
                    </a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;
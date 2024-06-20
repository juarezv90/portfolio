import React from 'react'
import '../scss/banner.scss'

function Banner() {
    return (
        <div className="bannerContainer" id='about'>
            <div className='banner'>
                <div className="headshot">
                    <img src="./portfolio_images/headshot_sm2.webp" alt="" />
                    <img src="./portfolio_images/headshot_sm2.webp" alt="" className='top_profile'  />
                </div>
                <div className="bannerText">
                    <h2>Hi I'm Victor.</h2>
                    <p className='about text'>A dedicated full-stack developer passionate about creating seamless and dynamic web applications. With a strong foundation in both front-end and back-end technologies, I thrive on transforming ideas into functional and visually appealing digital solutions.</p>
                </div>
            </div>
        </div>
    )
}

export default Banner
import React from 'react';


const Hero = () => {

    const bgImage = { backgroundImage : 'url("images/hero.jpg")' }

    return (
        <div className='hero container-fluid position-relative ' style={bgImage}>
            <div className="hero-details container  position-absolute top-50 start-50 translate-middle-x text-white">
                <h2 >Looking for a good bite!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <button className='btn btn-warning'>order!</button>
            </div>
        </div>
    )
}

export default Hero;

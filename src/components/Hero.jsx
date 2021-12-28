import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const bgImg = {backgroundImage : "url('/images/bgimg.jpg')"}
    return(
        <div className='hero mb-5' style={bgImg}>
            <div className="container h-100 position-relative">
                <div className="hero-content text-light">
                    <p className="display-4 fw-bolder fst-italic">looking for a bite!</p>
                    <p className='fs-3'>you're in the right place</p>
                    <Link to='/menu' className='btn btn-warning px-5 fs-4'>menu</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero;
import React from 'react';
import Hero from '../components/Hero';


const Home = () => {
    return (
        <>
            <Hero/>
            <div className="container my-5 ">
                <div className="row">
                    <h2 className='text-center mb-3' >taste it!</h2>
                    <div className="col-md-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At iure sit blanditiis corrupti aperiam totam fugit iusto tempora animi voluptatum?
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam mollitia iure voluptas molestiae facilis debitis.

                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid shadow rounded" src="images/img1.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="container-fluid vh-100 bg-dark text-white">
                this is a different food section
            </div>
        </>
    )
};

export default Home;

import React from 'react';
import Hero from '../components/Hero';

const Home = () => {
    return(
        <div>
            <Hero/>
            <div className="container-fluid">
                <section className='container mb-3 '>
                    <div className="row">
                        <div className="col">
                            <h2 className='fw-bolder mb-3'>Lorem, ipsum dolor.</h2>
                            <p className='fs-3 fst-italic'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor fugiat qui officia nostrum sapiente doloremque sed? Modi magnam suscipit dolorum?
                            </p>
                        </div>
                        <div className="col">there</div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home;
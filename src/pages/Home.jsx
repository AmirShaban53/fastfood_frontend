import React from 'react';
import Hero from '../components/Hero';
import {Link} from 'react-router-dom';

const Home = () => {
    const bgImg = {backgroundImage: "url('/images/img2.jpg')"}
    return(
        <div className='bg-light'>
            <Hero/>
            <div className="container-fluid pt-4  px-0">
                <section className='container mb-5 '>
                    <div className="row">
                        <div className="col">
                            <div className="text-center mb-2">
                                <h2 className='fw-bolder text-lowercase'>delecious taste!</h2>
                                <p className="text-muted">not hungry yet!</p>
                            </div>
                            <p className='fs-3 fst-italic text-center px-md-5 mx-md-5'>
                                looking for a wide range of foods from your popular pizzas, sushi, tacos to more traditional ones like samosas, chapati and rolex; we search no further cause salsa has go you covered! Search and order from a wide range of food. enjoy!
                            </p>
                            <div className=' text-center mt-5'>
                                <img className='img-fluid rounded-circle shadow' src="/images/img4.jpg" alt="" width='300px'/>
                                <p className='fw-bolder  mb-0  fs-3'> <span>chef.</span> Jamal </p>
                                <p className='text-muted  '>Hey there!</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container-fluid menu-lead mb-5 p-0" style={bgImg}>
                    <div className="overlay text-center text-white p-5">
                        <div className="content ">
                            <h2 className='display-1 fw-bolder'>ALL <span className='text-warning'>SET!</span></h2>
                            <p className='fst-italic fs-4'>login and make an order</p>
                            <Link to='/auth' className='btn btn-outline-warning rounded-pill w-50 fs-3' >login</Link>
                        </div>
                    </div>
                </section>
                <section className="container mt-5 ">
                    <div className="text-center">
                        <h2 className='fw-bolder text-uppercase'>have a taste.</h2>
                        <p className="text-muted">Our favorites on menu.</p>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-4">
                            <img className='img-fluid rounded-3 shadow' src="/images/img5.jpg" alt="" />
                            <p className='text-muted'>sushi.</p>
                        </div>
                        <div className="col-md-4">
                            <img className='img-fluid rounded-3 shadow mt-5' src="/images/img1.jpg" alt="" />
                            <p className='text-muted'>pizza.</p>
                        </div>
                        <div className="col-md-4">
                            <img className='img-fluid rounded-3 shadow mt-10' src="/images/img6.jpg" alt="" />
                            <p className='text-muted'>chicken wings.</p>
                        </div>
                    </div>
                    <div className="mb-3 text-center">
                        <Link to='/menu' className='btn btn-warning fst-italic fs-5'>take a look!</Link>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home;
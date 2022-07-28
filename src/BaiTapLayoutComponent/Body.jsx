import React, { Component } from 'react'

export default class Body extends Component {
    render() {
        return (
            <div>
                <section className='banner py-5'>
                    <div className="container px-lg-5">
                        <div className='p-4 p-lg-5 bg-light text-center'>
                            <div className='m-4 m-lg-5'>
                                <h1 className='fw-bold display-5'>A warm welcome!</h1>
                                <p className='fs-4'>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                                <a href='#' className='btn btn-primary btn-lg'>Call to action</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='item pt-4'>
                    <div className="container px-lg-5">
                        <div className="row gx-lg-5">
                            <div className="col-lg-6 col-xxl-4 mb-5">
                                <div className="card bg-light h-100 border-0">
                                    <div className="card-body text-center p-4 p-lg5 pt-0 pt-lg-0">
                                        <div className="feature bg-primary bg-gradient text-white mb-4 rounded-3">
                                            <i class="bi bi-collection"></i>
                                        </div>
                                        <h2 className='fs-4 fw-bold'>Fresh new layout</h2>
                                        <p className='mb-0'>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xxl-4 mb-5">
                                <div className="card bg-light h-100 border-0">
                                    <div className="card-body text-center p-4 p-lg5 pt-0 pt-lg-0">
                                        <div className="feature bg-primary bg-gradient text-white mb-4 rounded-3">
                                            <i class="bi bi-cloud-download"></i>
                                        </div>
                                        <h2 className='fs-4 fw-bold'>Free to download</h2>
                                        <p className='mb-0'>As always, Start Bootstrap has a powerful collectin of free templates.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xxl-4 mb-5">
                                <div className="card bg-light h-100 border-0">
                                    <div className="card-body text-center p-4 p-lg5 pt-0 pt-lg-0">
                                        <div className="feature bg-primary bg-gradient text-white mb-4 rounded-3">
                                            <i class="bi bi-card-heading"></i>
                                        </div>
                                        <h2 className='fs-4 fw-bold'>Jumbotron hero header</h2>
                                        <p className='mb-0'>The heroic part of this template is the jumbotron hero header!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xxl-4 mb-5">
                                <div className="card bg-light h-100 border-0">
                                    <div className="card-body text-center p-4 p-lg5 pt-0 pt-lg-0">
                                        <div className="feature bg-primary bg-gradient text-white mb-4 rounded-3">
                                            <i class="bi bi-bootstrap"></i>
                                        </div>
                                        <h2 className='fs-4 fw-bold'>Feature boxes</h2>
                                        <p className='mb-0'>We've created some custom feature boxes using Bootstrap icons!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xxl-4 mb-5">
                                <div className="card bg-light h-100 border-0">
                                    <div className="card-body text-center p-4 p-lg5 pt-0 pt-lg-0">
                                        <div className="feature bg-primary bg-gradient text-white mb-4 rounded-3">
                                            <i class="bi bi-code"></i>
                                        </div>
                                        <h2 className='fs-4 fw-bold'>Simple clean code</h2>
                                        <p className='mb-0'>We keep our dependencies up to date and squash bugs as they come!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xxl-4 mb-5">
                                <div className="card bg-light h-100 border-0">
                                    <div className="card-body text-center p-4 p-lg5 pt-0 pt-lg-0">
                                        <div className="feature bg-primary bg-gradient text-white mb-4 rounded-3">
                                            <i class="bi bi-patch-check"></i>
                                        </div>
                                        <h2 className='fs-4 fw-bold'>A name you trust</h2>
                                        <p className='mb-0'>Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

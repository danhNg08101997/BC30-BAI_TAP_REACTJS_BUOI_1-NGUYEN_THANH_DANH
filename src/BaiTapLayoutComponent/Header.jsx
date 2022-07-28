import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-dark navbar-expand-lg bg-dark text-white">
                    <div class="container px-lg-5">
                        <a class="navbar-brand" href="#">Start Boootstrap</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                                <a class="nav-link" href="#">About</a>
                                <a class="nav-link" href="#">Contact</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

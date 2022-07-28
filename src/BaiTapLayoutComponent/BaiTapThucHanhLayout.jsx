import React, { Component } from 'react'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <Header />
                <section>
                    <Body />
                </section>
                <section>
                    <Footer/>
                </section>
            </div>
        )
    }
}

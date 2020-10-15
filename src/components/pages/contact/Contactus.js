import React, { Component } from 'react'
import Contentpage from "../../contentpage/Contentpage"

export default class Contactus extends Component {
    render() {
        return (
            <>
            <Contentpage pagetitlenavbar="Contact"/> 

            <a href="/contact" className="scroll-top">
                <i class="lni lni-arrow-up"></i>
            </a>

            </>
        )
    }
}

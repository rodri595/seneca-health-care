import React, { Component } from 'react'
import Contentpage from "../../contentpage/Contentpage"
import atom from "./atom.svg"

export default class About extends Component {
    render() {
        return (
            <>
                <Contentpage pagetitlenavbar="About">
                    <section id="about" className="about-section pt-120">
                        <div className="shape shape-2">
                            <img src={atom} alt="" />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-10 col-lg-11 mx-auto">
                                    <div className="about-content text-center mb-55">
                                        <div className="section-title mb-30">
                                            <span className="wow fadeInDown" data-wow-delay=".2s">About Us</span>
                                            <h2 className="mb-15 wow fadeInUp" data-wow-delay=".4s">Welcome to Our Clinic</h2>
                                        </div>
                                        <p className="mb-35 wow fadeInUp" data-wow-delay=".6s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                                        eos et accusam et justo duo dolores et ea rebum Stet clita kasd
                                        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sqit consetetur
                                        sadipscing elitr,
							sed diam nonumy eirmod tempor invidunt.</p>
                                        <a href="/contact" className="btn theme-btn wow fadeInUp" data-wow-delay=".8s">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>

                </Contentpage>

            </>
        )
    }
}

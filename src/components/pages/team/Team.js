import React, { Component } from 'react'

import Contentpage from "../../contentpage/Contentpage"

export default class Team extends Component {
    render() {
        return (
            <>
                <Contentpage pagetitlenavbar="Team">
                    <section className="about-section pt-120">
                        <div className="shape shape-2">
                            <img src={""} alt="" />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-10 col-lg-11 mx-auto">
                                    <div className="about-content text-center mb-55">
                                        <div className="section-title mb-30">
                                            <span className="wow fadeInDown" data-wow-delay=".2s">Team</span>
                                            <h2 className="mb-15 wow fadeInUp" data-wow-delay=".4s">Meet Our Doctors</h2>
                                        </div>
                                        <p className="mb-35 wow fadeInUp" data-wow-delay=".6s">
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy
                                                eirmod tempor invidunt ut labore et dolore magn .
                                        </p>
                                        <a href="/contact" className="btn theme-btn wow fadeInUp" data-wow-delay=".8s">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>

                  




                </Contentpage>
                <a href="/team" className="scroll-top">
                <i class="lni lni-arrow-up"></i>
            </a>
            </>
        )
    }
}

import React, { Component } from 'react'
import Contentpage from "../../contentpage/Contentpage"
import atom from "./atom.svg"
import celebrate from "./celebrate.svg"

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
                                        <br />
                                        <br />
                                        <br />

                                        <div className="row content wow fadeInDown" data-wow-delay=".2s">
                                            <div className="col-lg-6" >
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                                    magna aliqua.
                                                </p>
                                                <ul className="wow fadeInDown" data-wow-delay=".4s">
                                                    <li><i className="lni lni-checkmark wow fadeInDown" data-wow-delay=".6s"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                                                    <li><i className="lni lni-checkmark wow fadeInDown" data-wow-delay=".6s"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                                                    <li><i className="lni lni-checkmark wow fadeInDown" data-wow-delay=".6s"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-6 pt-4 pt-lg-0">
                                                <p>
                                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                </p>

                                            </div>
                                        </div>

                                        <br />
                                        <br />
                                        <br />



                                        <section id="counts" className="counts">
                                            <div className="container">

                                                <div className="row">
                                                    <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" >
                                                        <img src={celebrate} alt="" className="img-fluid wow fadeInDown" data-wow-delay=".2s" />
                                                    </div>

                                                    <div className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" >
                                                        <div className="content d-flex flex-column justify-content-center">
                                                            <div className="row">
                                                                <div className="col-md-6 d-md-flex align-items-md-stretch wow fadeInDown" data-wow-delay=".2s">
                                                                    <div className="count-box">
                                                                        <i className="lni lni-emoji-smile wow fadeInDown" data-wow-delay=".6s"></i>
                                                                        <span className="wow fadeInDown" data-wow-delay=".2s">65</span>
                                                                        <p><strong>Happy Clients</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6 d-md-flex align-items-md-stretch wow fadeInDown" data-wow-delay=".2s">
                                                                    <div className="count-box">
                                                                        <i className="lni lni-first-aid wow fadeInDown" data-wow-delay=".6s"></i>
                                                                        <span className="wow fadeInDown" data-wow-delay=".2s">85</span>
                                                                        <p><strong>Projects</strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan</p>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6 d-md-flex align-items-md-stretch wow fadeInDown" data-wow-delay=".2s">
                                                                    <div className="count-box">
                                                                        <i className="lni lni-timer wow fadeInDown" data-wow-delay=".6s"></i>
                                                                        <span className="wow fadeInDown" data-wow-delay=".2s">12</span>
                                                                        <p><strong>Years of experience</strong> aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel</p>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6 d-md-flex align-items-md-stretch wow fadeInDown" data-wow-delay=".2s">
                                                                    <div className="count-box">
                                                                        <i className="lni lni-graph wow fadeInDown" data-wow-delay=".6s"></i>
                                                                        <span className="wow fadeInDown" data-wow-delay=".2s">15</span>
                                                                        <p><strong>Awards</strong> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </section>


                                        <br />
                                        <br />


                                        <a href="/contact" className="btn theme-btn wow fadeInUp" data-wow-delay=".8s">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>

                </Contentpage>
                <a href="/about" className="scroll-top">
                    <i className="lni lni-arrow-up"></i>
                </a>

            </>
        )
    }
}

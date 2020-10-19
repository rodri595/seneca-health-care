import React, { Component } from 'react'
import Contentpage from "../../contentpage/Contentpage"

import slider1 from "./medicine.svg"
import dna from "./dna.svg"
import graph from "./graph.svg"


export default class Home extends Component {
    render() {
        return (
            <>
                <div className="preloader">
                    <div className="loader">
                        <div className="ytp-spinner">
                            <div className="ytp-spinner-container">
                                <div className="ytp-spinner-rotator">
                                    <div className="ytp-spinner-left">
                                        <div className="ytp-spinner-circle"></div>
                                    </div>
                                    <div className="ytp-spinner-right">
                                        <div className="ytp-spinner-circle"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Contentpage pagetitlenavbar="Home" >

     
                        <section className="slider-section wow fadeInUp" data-wow-delay=".4s">
                            

                                    <div className="container" style={{minHeight:"70vh"}}>
                                        <div className="row">
                                            <div style={{marginTop:"40px"}} className="col-xl-6 col-lg-4 col-md-3">
                                                <div className="slider-content wow fadeInUp" data-wow-delay=".6s">
                                                    <h1 >Complete Healthcare Solution</h1>
                                                    <p >Lorem ipsum
                                                    dolor sit amet, consetetur sadipscing elitr, sed dinonumy eirmod tempor invidunt
                                                    ut labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consetetur
											            sadipscing elitr.</p>
                                                    <a href="/about" className="btn theme-btn page-scroll wow fadeInUp" data-wow-delay=".8s"
                                                    >Learn More</a>
                                                </div>

                                            </div>
                                            <div  style={{marginTop:"40px"}} className="col-xl-6 col-lg-8 col-md-9 wow fadeInUp" data-wow-delay=".4s">
                                                <img  src={slider1} alt="" />
                                            </div>
                                        </div>
                               
                            </div>
                        </section>
              

                    <section className="we-do-section pt-150">
                        <div className="shape shape-1">
                            <img src={dna} alt="" />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 mx-auto">
                                    <div className="section-title text-center mb-55">
                                        <span className="wow fadeInDown" data-wow-delay=".2s">What We Do</span>
                                        <h2 className="mb-15 wow fadeInUp" data-wow-delay=".4s">What We Provide for Your Health</h2>
                                        <p className="wow fadeInUp" data-wow-delay=".6s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
							dinonumy <br className="d-none d-lg-block" /> eirmod tempor invidunt ut labore et dolore magn.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="graph mb-60">
                                        <img className="mb-35 wow fadeInUp" data-wow-delay="1s" src={graph} alt="graph" />
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="we-do-item mb-30">
                                        <div className="we-do-icon mb-25 wow fadeInUp" data-wow-delay=".4s">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40.839" height="48.598" viewBox="0 0 40.839 48.598">
                                                <g id="we-do-1" transform="translate(-12.184 -5)">
                                                    <path id="Path_48" data-name="Path 48"
                                                        d="M33.271,74.379H31.932c-.177,0-17.733-.153-19.26-5.609-1.226-4.92-.732-11.553,8.551-15.352.684-.279,1.908-.753,1.908-.753a4.824,4.824,0,0,0,1.368-.906l.038-.037,1.18-1.079a1.556,1.556,0,0,1,1.09-.468,1.443,1.443,0,0,1,1.379,1.168L32.6,63.714l4.364-12.367a1.426,1.426,0,0,1,1.362-1.164,1.551,1.551,0,0,1,1.092.481l1.148,1.014a.608.608,0,0,1,.051.048,4.775,4.775,0,0,0,1.369.9s1.308.506,2,.788c9.284,3.8,9.778,10.431,8.558,15.327C51,74.227,33.448,74.379,33.271,74.379ZM25.782,53.046a6.544,6.544,0,0,1-2,1.314s-1.2.466-1.875.74c-6.487,2.655-9.005,7.1-7.483,13.206.83,2.963,11.994,4.257,17.5,4.257h1.339c5.51,0,16.674-1.293,17.511-4.283,1.517-6.082-1-10.526-7.49-13.18-.677-.278-1.962-.775-1.962-.775a6.519,6.519,0,0,1-1.991-1.307l-.794-.7L33.751,65.9A1.205,1.205,0,0,1,32.6,66.92c-.255,0-.881-.1-1.165-1.06L26.6,52.3Z"
                                                        transform="translate(0 -20.782)" fill="#00adb5" />
                                                    <g id="Group_129" data-name="Group 129" transform="translate(38.284 37.747)">
                                                        <g id="Group_128" data-name="Group 128">
                                                            <path id="Path_49" data-name="Path 49"
                                                                d="M65.947,73.917H63.366a.649.649,0,0,1-.649-.649V71.72H61.169a.649.649,0,0,1-.649-.649V68.49a.649.649,0,0,1,.649-.65h1.548V66.294a.648.648,0,0,1,.649-.649h2.582a.649.649,0,0,1,.649.649v1.547h1.548a.649.649,0,0,1,.649.65v2.581a.648.648,0,0,1-.649.649H66.6v1.549A.65.65,0,0,1,65.947,73.917Zm-1.933-1.3H65.3V71.1a.7.7,0,0,1,.676-.676H67.5V69.139H65.975a.7.7,0,0,1-.676-.676v-1.52H64.014v1.52a.7.7,0,0,1-.676.676H61.818v1.284h1.521a.7.7,0,0,1,.676.676Z"
                                                                transform="translate(-60.52 -65.645)" fill="#00adb5" />
                                                        </g>
                                                    </g>
                                                    <path id="Path_50" data-name="Path 50"
                                                        d="M41.3,36.019c-4.59,0-7.379-4.555-7.948-6.633-.121-.44-.231-.937-.327-1.483A3.362,3.362,0,0,1,31.8,26.385a14.03,14.03,0,0,1-.576-2.959,4.754,4.754,0,0,1,.4-2.563,6.141,6.141,0,0,1,.449-2.3.909.909,0,0,1,1.751.485,4.972,4.972,0,0,0-.385,2.058.9.9,0,0,1-.175.536,3.005,3.005,0,0,0-.228,1.632,12.493,12.493,0,0,0,.45,2.429,1.517,1.517,0,0,0,.758.807.908.908,0,0,1,.506.678,16.577,16.577,0,0,0,.357,1.715c.387,1.416,2.574,5.3,6.2,5.3,3.655,0,5.919-3.937,6.289-5.294a16.116,16.116,0,0,0,.358-1.716.908.908,0,0,1,.506-.68,1.521,1.521,0,0,0,.762-.814,12.3,12.3,0,0,0,.445-2.406,2.962,2.962,0,0,0-.231-1.656.907.907,0,0,1-.171-.531,6.382,6.382,0,0,0-.294-2.138.908.908,0,0,1,1.774-.39,7.336,7.336,0,0,1,.336,2.287,4.887,4.887,0,0,1,.4,2.589h0a13.945,13.945,0,0,1-.571,2.924,3.38,3.38,0,0,1-1.23,1.525c-.077.436-.186.965-.328,1.485C48.713,31.7,45.708,36.019,41.3,36.019Z"
                                                        transform="translate(-8.746 -5.917)" fill="#00adb5" />
                                                    <path id="Path_51" data-name="Path 51"
                                                        d="M50.512,14.093H32.943a.922.922,0,0,1-.922-.921C32.021,8.207,35.831,5,41.728,5s9.707,3.207,9.707,8.171A.922.922,0,0,1,50.512,14.093Zm-16.59-1.843H49.533c-.5-3.964-4.266-5.406-7.806-5.406S34.424,8.285,33.922,12.249Z"
                                                        transform="translate(-9.125)" fill="#00adb5" />
                                                </g>
                                            </svg>
                                        </div>
                                        <h5 className="wow fadeInUp" data-wow-delay=".6s">Specialist Doctors</h5>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="we-do-item mb-30">
                                        <div className="we-do-icon mb-25 wow fadeInUp" data-wow-delay=".4s">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="53.947" height="42.07" viewBox="0 0 53.947 42.07">
                                                <g id="we-do-2" transform="translate(12.41 -88.75)">
                                                    <g id="Group_133" data-name="Group 133" transform="translate(-12.41 88.75)">
                                                        <path id="Path_52" data-name="Path 52"
                                                            d="M38.24,45.246h2.3v2.391a1.151,1.151,0,1,0,2.3,0V45.246h2.391a1.151,1.151,0,1,0,0-2.3H42.846V40.551A1.172,1.172,0,0,0,41.694,39.4a1.253,1.253,0,0,0-1.151,1.24v2.391H38.151a1.111,1.111,0,1,0,.089,2.214Z"
                                                            transform="translate(-5.638 -11.855)" fill="#00adb5" />
                                                        <path id="Path_53" data-name="Path 53"
                                                            d="M28.566,52.182H51.328a2.665,2.665,0,0,0,2.657-2.657V37.3h2.746a1.151,1.151,0,0,0,0-2.3H23.251a1.151,1.151,0,1,0,0,2.3H26V49.525A2.537,2.537,0,0,0,28.566,52.182Zm23.205-2.657a.418.418,0,0,1-.443.443H28.566a.418.418,0,0,1-.443-.443V37.3H51.771Z"
                                                            transform="translate(-3.935 -11.352)" fill="#00adb5" />
                                                        <path id="Path_54" data-name="Path 54"
                                                            d="M37.542,24.5a4.9,4.9,0,0,0-1.683,1.86,3.935,3.935,0,0,0-.266,2.214v2.037a1.1,1.1,0,0,0,1.151,1.063h0a1.1,1.1,0,0,0,1.063-1.151V28.393a5.067,5.067,0,0,1,.089-1.24,4.009,4.009,0,0,1,1.063-1.063l.8-.531L41,24.85a2.22,2.22,0,0,0,.62-.354.087.087,0,0,0,.089-.089l.8.8c.62.531,1.151,1.063,1.771,1.594l1.329,1.24.709-.709c.886-.8,1.683-1.506,2.48-2.3a4.091,4.091,0,0,0,.62-.62l.089.089c.177.089.443.177.62.266l.266.089c.266.089.443.266.531.266l.709.443c.177.089.354.266.531.354a2.862,2.862,0,0,1,1.063.974,5.067,5.067,0,0,1,.089,1.24v2.037a1.16,1.16,0,0,0,1.063,1.151h0a1.231,1.231,0,0,0,1.151-1.063V28.3a4.914,4.914,0,0,0-.266-2.214,6.075,6.075,0,0,0-2.391-2.3l-.8-.443c-.177-.089-.443-.266-.62-.354l-.266-.089c-.266-.089-.443-.266-.709-.354l-.089-.089a1.758,1.758,0,0,0-2.214.177l-.177.177-.709.709c-.531.531-1.151,1.063-1.683,1.594-.531-.443-1.063-.974-1.594-1.506a5.73,5.73,0,0,0-.8-.709l-.266-.266a1.442,1.442,0,0,0-1.683-.354c-.177.089-.443.177-.62.266-.266.089-.443.266-.709.354l-1.417.886C38.162,24.053,37.9,24.23,37.542,24.5Z"
                                                            transform="translate(-5.472 -9.882)" fill="#00adb5" />
                                                        <path id="Path_55" data-name="Path 55"
                                                            d="M49,16.714l-.089.443a1.161,1.161,0,0,0,.709,1.417c.089,0,.177.089.354.089a1.241,1.241,0,0,0,1.063-.8l.177-.443c.089-.354.266-.709.354-1.151a9.59,9.59,0,0,0,.266-3.1A5.087,5.087,0,0,0,47.052,8.3h-.531a6.208,6.208,0,0,0-4.34,1.329A5.828,5.828,0,0,0,40.5,13.437a10.689,10.689,0,0,0,.8,4.428,1.177,1.177,0,0,0,.886.709,1.1,1.1,0,0,0,1.24-.974,1.313,1.313,0,0,0-.089-.62,7.714,7.714,0,0,1-.62-3.454,3.683,3.683,0,0,1,.974-2.3,3.927,3.927,0,0,1,2.746-.709h.443a3.062,3.062,0,0,1,2.834,2.923,5.437,5.437,0,0,1-.266,2.3A10.39,10.39,0,0,0,49,16.714Z"
                                                            transform="translate(-6.036 -8.3)" fill="#00adb5" />
                                                        <path id="Path_56" data-name="Path 56"
                                                            d="M7.228,20.257a4.441,4.441,0,0,0,4.428-4.428A4.5,4.5,0,0,0,7.228,11.4a4.428,4.428,0,1,0,0,8.857Zm0-6.731A2.214,2.214,0,1,1,5.014,15.74,2.193,2.193,0,0,1,7.228,13.526Z"
                                                            transform="translate(-1.729 -8.654)" fill="#00adb5" />
                                                        <path id="Path_57" data-name="Path 57"
                                                            d="M18.978,45.761c-.531,2.214-1.151,4.428-1.683,6.731a1.049,1.049,0,0,0,.8,1.329h.266a1.063,1.063,0,0,0,1.063-.8c.531-2.214,1.151-4.428,1.683-6.731l.177-.531c.443-1.594.974-3.543-.089-5.226a2.921,2.921,0,0,0-2.569-1.329c-.354,0-4.163-.354-5.58-.531-.531-.089-.974-.089-1.506-.177a1.115,1.115,0,1,0-.266,2.214c.443.089.974.089,1.417.177,1.506.177,5.314.531,5.757.531.62,0,.8.177.8.177.531.974.177,2.3-.177,3.631C19.067,45.318,18.978,45.584,18.978,45.761Z"
                                                            transform="translate(-2.585 -11.751)" fill="#00adb5" />
                                                        <path id="Path_58" data-name="Path 58"
                                                            d="M1.6,28.616a23.136,23.136,0,0,0,1.24,7.528c.266.974.531,2.037.8,3.1.709,2.391,1.949,3.986,3.72,4.606a10.569,10.569,0,0,0,3.277.531c.974,0,1.949-.089,2.923-.177L13.29,41.99a12.826,12.826,0,0,1-5.226-.177C7,41.37,6.2,40.4,5.673,38.624c-.266-.974-.531-2.037-.8-3.011A26.232,26.232,0,0,1,3.725,28.7c0-1.417.266-1.949.886-2.3a2.051,2.051,0,0,1,2.126.354,2.6,2.6,0,0,1,.886,1.063c.089.177.089.266.177.443.089.354.266.709.354,1.063a.8.8,0,0,0,.089.443c.089.974.177,2.391,1.506,3.1h.089c.62.354,5.226,2.746,5.226,2.746a1.11,1.11,0,0,0,1.063-1.949c-3.9-2.037-4.96-2.657-5.314-2.746h0c-.266-.089-.354-.886-.354-1.329a1.729,1.729,0,0,0-.089-.62,7.481,7.481,0,0,0-.443-1.506,4.318,4.318,0,0,1-.266-.62,6.368,6.368,0,0,0-1.594-1.86,4.32,4.32,0,0,0-4.34-.531C1.6,25.428,1.6,27.465,1.6,28.616Z"
                                                            transform="translate(-1.59 -10.105)" fill="#00adb5" />
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <h5 className="wow fadeInUp" data-wow-delay=".6s">Frequent Visits</h5>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="we-do-item mb-30">
                                        <div className="we-do-icon mb-25 wow fadeInUp" data-wow-delay=".4s">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="48.152" height="48.154" viewBox="0 0 48.152 48.154">
                                                <g id="we-do-3" transform="translate(-1.846 -1.846)">
                                                    <path id="Path_59" data-name="Path 59"
                                                        d="M46,18.78A3.994,3.994,0,0,0,42.432,21L32.309,17.386a6.492,6.492,0,0,0,.08-1.008,6.36,6.36,0,0,0-1.262-3.8l5.65-3.767a4.037,4.037,0,1,0-.887-1.333L30.006,11.4a6.367,6.367,0,0,0-7.877-.124L19.685,8.223a4.064,4.064,0,1,0-1.158,1.115l2.45,3.061a6.374,6.374,0,0,0-1.34,3.179H9.894a4,4,0,1,0,0,1.6h9.738a6.335,6.335,0,0,0,.64,2.105L8.221,29.08a4.063,4.063,0,1,0,1.114,1.156l12.136-9.86a.8.8,0,0,0,.571-1.254,4.8,4.8,0,1,1,7.885,0l1.313.915a6.319,6.319,0,0,0,.607-1.117l10.171,3.633c0,.08-.023.15-.023.228a4,4,0,1,0,4-4Zm-6.4-15.21a2.4,2.4,0,1,1-2.4,2.4,2.4,2.4,0,0,1,2.4-2.4Zm-23.215,4.8a2.4,2.4,0,1,1,2.4-2.4A2.4,2.4,0,0,1,16.379,8.373ZM5.972,18.78a2.4,2.4,0,1,1,2.4-2.4,2.4,2.4,0,0,1-2.4,2.4Zm0,16.01a2.4,2.4,0,1,1,2.4-2.4,2.4,2.4,0,0,1-2.4,2.4ZM46,25.184a2.4,2.4,0,1,1,2.4-2.4A2.4,2.4,0,0,1,46,25.184Z"
                                                        transform="translate(0 0)" fill="#00adb5" />
                                                    <path id="Path_60" data-name="Path 60"
                                                        d="M44.414,30.808a3.194,3.194,0,0,0-2.4,1.086,3.2,3.2,0,0,0-4.8,0,3.2,3.2,0,0,0-4-.656V21.2a3.2,3.2,0,0,0-6.4,0V34.09a5.588,5.588,0,0,0-4-1.681.8.8,0,0,0-.8.8V47.619a.8.8,0,0,0,.234.566l5.038,5.038h2.264L23.6,47.287V34.09a4.009,4.009,0,0,1,3.2,3.923v5.6a.8.8,0,0,0,1.6,0V21.2a1.6,1.6,0,1,1,3.2,0V35.611a.8.8,0,0,0,1.6,0v-1.6a1.6,1.6,0,0,1,3.2,0v1.6a.8.8,0,1,0,1.6,0v-1.6a1.6,1.6,0,0,1,3.2,0v1.6a.8.8,0,0,0,1.6,0v-1.6a1.6,1.6,0,0,1,3.2,0V53.222h1.6V34.01A3.2,3.2,0,0,0,44.414,30.808Z"
                                                        transform="translate(-4.02 -3.223)" fill="#00adb5" />
                                                </g>
                                            </svg>
                                        </div>
                                        <h5 className="wow fadeInUp" data-wow-delay=".6s">Cordial Administration</h5>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="we-do-item mb-30">
                                        <div className="we-do-icon mb-25 wow fadeInUp" data-wow-delay=".4s">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="46.239" height="51.043" viewBox="0 0 46.239 51.043">
                                                <g id="we-do-4" transform="translate(-1273.5 -1752.346)">
                                                    <g id="Icon_feather-home" data-name="Icon feather-home" transform="translate(1275 1753.846)">
                                                        <path id="Path_108" data-name="Path 108"
                                                            d="M4.5,19.815,26.119,3,47.739,19.815V46.239a4.8,4.8,0,0,1-4.8,4.8H9.3a4.8,4.8,0,0,1-4.8-4.8Z"
                                                            transform="translate(-4.5 -3)" fill="none" stroke="#00adb5" stroke-linecap="round"
                                                            stroke-linejoin="round" stroke-width="3" />
                                                    </g>
                                                    <path id="Union_1" data-name="Union 1" d="M7.658,6.87h0v0h0v0Z"
                                                        transform="translate(1288.853 1775.014)" fill="none" stroke="#00adb5" stroke-linecap="round"
                                                        stroke-linejoin="round" stroke-width="3" />
                                                </g>
                                            </svg>
                                        </div>
                                        <h5 className="wow fadeInUp" data-wow-delay=".6s">Specialized Pharmacy</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </Contentpage>
                <a href="/" className="scroll-top wow fadeInUp" data-wow-delay="3s">
                <i className="lni lni-arrow-up"></i>
            </a>

            </>
        )
    }
}

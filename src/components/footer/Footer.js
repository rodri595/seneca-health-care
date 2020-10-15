import React, { Component } from 'react'
import footerbackground from "./footer.jpg"

import { Map, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet'
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import "./footer.css"

import logo from "../header/logo.gif"


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export const senecaIcon = new L.Icon({
    iconUrl: "https://www.flaticon.com/svg/static/icons/svg/3063/3063044.svg",
    iconSize: [25, 25],
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    shadowAnchor: [10, 30]
});

export default class Footer extends Component {
    state = {
        darkmode: false
    }
    render() {
        return (
            <div>
                <footer className="footer pt-100 img-bg" style={{ backgroundImage: `url(${footerbackground})` }} >
                    <div className="container">
                        <div className="footer-widget-wrapper">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5 col-md-6">
                                    <div className="footer-widget mb-30">
                                        <a href="/" className="logo wow fadeInUp" data-wow-delay="0.4s"><img src={logo} style={{ width: "200px" }} alt="logo" /></a>
                                        <p>Lorem ipsum dolor serit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                                        labore dolore magna
								aliquyam erat diam voluptua.</p>
                                        <div className="footer-social-links">
                                            <ul>
                                                <li className="wow fadeInUp" data-wow-delay="0.4s"><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/senecahealthcare"><i className="lni lni-facebook-filled"></i></a></li>
                                                <li className="wow fadeInUp" data-wow-delay="0.4s"><a href="/"><i className="lni lni-twitter-filled"></i></a></li>
                                                <li className="wow fadeInUp" data-wow-delay="0.4s"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/senecahealthcare/"><i className="lni lni-instagram-original"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-6">
                                    <div className="footer-widget mb-30 wow fadeInUp" data-wow-delay="0.4s">
                                        <h4>Links</h4>
                                        <ul className="footer-links">
                                            <li><a href="/">Home</a></li>
                                            <li><a href="/about">About</a></li>
                                            <li><a href="/services">Services</a></li>
                                            <li><a href="/team">Doctor</a></li>
                                            <li><a href="/contact">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-5">
                                    <div className="footer-widget mb-30 wow fadeInUp" data-wow-delay="0.4s">
                                        <h4>Insurance</h4>
                                        <ul className="footer-links">
                                            <li><a href="/">Aetna</a></li>
                                            <li><a href="/">Blue cross Blue shields</a></li>
                                            <li><a href="/">Cigna</a></li>
                                            <li><a href="/">Florida Health Solution </a></li>
                                            <li><a href="/">Med Plan</a></li>
                                            {/* <li><a href="/">Care Plus</a></li>
                                            <li><a href="/">United Healthcare</a></li>
                                            <li><a href="/">Sun Health & Dental</a></li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-12 col-md-7">
                                    <div className="footer-widget mb-30 wow fadeInUp" data-wow-delay="0.4s">
                                        <h4>Medical Location</h4>

                                        <Map style={{ borderRadius: "15px", height: "200px" }} center={[26.182332, -80.252711]} zoom={18}>
                                            {this.state.darkmode ?
                                                <TileLayer
                                                    noWrap={true}
                                                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
                                                :
                                                <TileLayer
                                                    noWrap={true}
                                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                />

                                            }
                                            <Marker
                                                icon={senecaIcon}
                                                position={[26.182332, -80.252711]}>
                                                <Popup >
                                                    <img src={logo} alt="logo" /> <br />
                                                </Popup>
                                                <Tooltip >
                                                    <div>
                                                        <text>"Click Me" ,
                                                            <span role="img" aria-label="wink">
                                                                😉
                                                            </span>
                                                        </text>
                                                    </div>
                                                </Tooltip>

                                            </Marker>
                                        </Map>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="copyright-area">
                            <p className="mb-0 text-center">Developed by <a href="/" rel="nofollow"> Rodrigo Erazo</a></p>
                        </div>
                    </div>
                </footer>
                
            </div>
        )
    }
}

import React, { Component } from 'react'

import logo from "./logo.gif"

export default class Navbar extends Component {
    render() {
        return (
            <div className="header-wrapper">
				<div className="header-top theme-bg" style={{backgroundImage: "linear-gradient(to right, #02AAB0 0%, #00CDAC  51%, #02AAB0  100%)",textTransform:"uppercase", transition:"0.5s", boxShadow: "0 0 20px #eee", padding:" 15px 45px"}}>
					<div className="container">
						<div className="row">
							<div className="col-md-8">
								<div className="header-top-left text-center text-md-left">
									<ul>
										<li><a href="tel:+1 954-368-6604"><i className="lni lni-phone"></i> +1 954-368-6604</a></li>
										<li><a href="mailto:manager@senecahwc.com?subject=Consult%20Help"><i className="lni lni-envelope"></i> manager@senecahwc.com</a></li>
									</ul>
								</div>
							</div>
							<div className="col-md-4">
								<div className="header-top-right d-none d-md-block">
									<ul>
										<li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/senecahealthcare"><i className="lni lni-facebook-filled"></i></a></li>
										<li><a target="_blank" rel="noopener noreferrer" href="/"><i className="lni lni-twitter-filled"></i></a></li>
										<li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/senecahealthcare/"><i className="lni lni-instagram-original"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="navbar-area" style={{zIndex:"9909"}}>  
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<nav className="navbar navbar-expand-lg">
									<a className="navbar-brand" href="/">
										<img src={logo} alt="Logo"/>
									</a>
									<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
										aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
										<span className="toggler-icon"></span>
										<span className="toggler-icon"></span>
										<span className="toggler-icon"></span>
									</button>
				
									<div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
										<ul id="nav" className="navbar-nav ml-auto">
											<li className="nav-item active">
												<a className={this.props.navbartitle==="Home"? "active":""} href="/">Home</a>
											</li>
											<li className="nav-item">
												<a className={this.props.navbartitle==="About"? "active":""} href="/about">About</a>
											</li>
											<li className="nav-item">
												<a className={this.props.navbartitle==="Services"? "active":""} href="/services">Service</a>
											</li>
											<li className="nav-item">
												<a className={this.props.navbartitle==="Team"? "active":""} href="/team">Doctor</a>
											</li>
											<li className="nav-item">
												<a className={this.props.navbartitle==="Contact"? "active":""} href="/contact">Contact</a>
											</li>
										</ul>
									</div> 
								</nav> 
							</div>
						</div> 
					</div> 
				</div> 
		</div>
		
        )
    }
}

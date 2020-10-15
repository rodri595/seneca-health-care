import React from 'react'
import {Container} from "reactstrap";

import Navbar from "../header/Navbar"
import Footer from "../footer/Footer"

export default ({pagetitlenavbar, children })=>{
        return (
            <div className="d-flex flex-column overflow-hidden min-vh-100 ">
                <Navbar navbartitle={pagetitlenavbar} />
                <div style={{ backgroundColor: "whitesmoke" }} className="flex-grow-1 overflow-auto">
                    <Container fluid>
                        {children}
                    </Container>
                </div>
                <Footer />
            </div>
        )
    }


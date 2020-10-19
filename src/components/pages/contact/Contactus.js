import React, { createRef, Component } from "react";
import Contentpage from "../../contentpage/Contentpage"
import { Container, Row, Col, Form, FormGroup, Input, Label, Button, Card } from "reactstrap";
import "leaflet-routing-machine";

import contactussvg from "./contact.svg"
import atom from "../about/atom.svg"

import { Map, TileLayer, Tooltip, Circle } from 'react-leaflet'
import L from 'leaflet';

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
export const userIcon = new L.Icon({
    iconUrl: "https://www.flaticon.com/svg/static/icons/svg/1077/1077012.svg",
    iconSize: [25, 25],
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    shadowAnchor: [15, 25]
});


export default class Contactus extends Component {
    constructor() {
        super();
        this.state = {
            darkmode: true,
            location: {
                lat: 0,
                lng: 0,
            },
            currentPos: null,
            zoom: 2,
        }
        this.mapRef = createRef();
    }
    fetchData() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    location: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    },
                    zoom: 18,
                }, () => { this.routing_machine() });
            },
            () => {
                fetch("https://ipapi.co/json")
                    .then((res) => res.json())
                    .then((location) => {
                        this.setState({
                            location: {
                                lat: location.latitude,
                                lng: location.longitude,
                            },
                            zoom: 9,
                        }, () => { this.routing_machine() });
                    });
            }
        );
    }

    componentDidMount() {
        this.fetchData();

    }


    routing_machine = () => {
        L.Routing.control({

            lineOptions: {
                styles: [
                    { color: '#00adb5', opacity: 1, weight: 3 }
                ]
            },

            show: false,
            fitSelectedRoutes: true,
            addWaypoints: false,


            collapsible: true,
            plan: L.Routing.plan([
                L.latLng(this.state.location.lat, this.state.location.lng),
                L.latLng(26.182332, -80.252711),
            ],{
                createMarker: function (i, wp) {
                    if(i===0){
                        return L.marker(wp.latLng, {icon: userIcon}).bindTooltip('You Might me Around Here right?')
                    }else{
                        return L.marker(wp.latLng, {icon: senecaIcon}).bindPopup('Seneca Healtcare Center')
                    }
                },
              })
        }).addTo(this.mapRef.current.leafletElement)
    }
    render() {
        return (
            <>
                <Contentpage pagetitlenavbar="Contact">

                    <section className="about-section pt-120">
                        <div className="shape shape-2">
                            <img className="rotating" src={atom} alt="" />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-10 col-lg-11 mx-auto">
                                    <div className="about-content text-center mb-55">
                                        <div className="section-title mb-30">
                                            <span className="wow fadeInDown" data-wow-delay=".2s">Appoinment</span>
                                            <h2 className="mb-15 wow fadeInUp" data-wow-delay=".4s">Get Appoinment Now</h2>
                                        </div>
                                        <p className="mb-35 wow fadeInUp" data-wow-delay=".6s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy eirmod tempor invidunt ut labore et dolore magn.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Container style={{ marginBottom: "50px" }}>
                            <Card body outline style={{ borderRadius: "20px", boxShadow: " 0px 3px 8px rgba(0,0,0,0.4)" }}>
                                <Row>
                                    <Col sm="5">
                                        <Form style={{ display: "flex", flexDirection: "column", }}>
                                            <FormGroup>
                                                <Label>
                                                    Full Name
                                                        </Label>
                                                <Input style={{ borderRadius: "10px", }} type="text" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label>
                                                    Email
                                                        </Label>
                                                <Input style={{ borderRadius: "10px", }} type="email" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label>
                                                    Phone Number
                                                        </Label>
                                                <Input style={{ borderRadius: "10px", }} type="tel" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label>
                                                    Date
                                                        </Label>
                                                <Input style={{ borderRadius: "10px", }} type="datetime-local" />
                                            </FormGroup>
                                        </Form>
                                        <br />
                                        <Button block className="btn theme-btn wow fadeInUp" data-wow-delay=".8s">Send</Button>
                                    </Col>
                                    <Col sm="7">
                                        <img style={{ marginTop: "20px" }} src={contactussvg} alt="" />
                                    </Col>
                                </Row>
                            </Card>

                        </Container>

                        <div className="container">
                            <div className="row">
                                <div className="col-xl-10 col-lg-11 mx-auto">
                                    <div className="about-content text-center mb-55">
                                        <div className="section-title mb-30">
                                            <span className="wow fadeInDown" data-wow-delay=".2s">Map</span>
                                            <h2 className="mb-15 wow fadeInUp" data-wow-delay=".4s">Wanna Get Directions?</h2>
                                        </div>
                                        <p className="mb-35 wow fadeInUp" data-wow-delay=".6s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy eirmod tempor invidunt ut labore et dolore magn.</p>
                                        <Map ref={this.mapRef} className="wow fadeInUp" data-wow-delay=".4s"
                                            style={{ borderRadius: "15px", height: "400px" }}
                                            center={[this.state.location.lat, this.state.location.lng]}
                                            zoom={this.state.zoom}
                                            bounceAtZoomLimits={true}
                                            maxBoundsViscosity={0.95}
                                            maxBounds={[[-85, -180], [85, 180]]}>
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

                                            <Circle center={[this.state.location.lat, this.state.location.lng]} fillColor="blue" radius={200}>
                                                <Tooltip >
                                                    <div>
                                                        You Might Be Here
                                                    </div>
                                                </Tooltip>


                                            </Circle>
                                        </Map>
                                        <br />
                                        <Button className="btn theme-btn page-scroll wow fadeInUp" data-wow-delay=".8s"><a target="_blank" rel="noopener noreferrer" style={{ color: "white" }} href="https://www.google.com/maps/dir//Seneca+Healthcare+%26+Wellness+Center,+4603+N+University+Dr,+Lauderhill,+FL+33351,+Estados+Unidos/@26.1823821,-80.2528231,21z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88d906757eed98af:0x29518c65bb02d9fe!2m2!1d-80.2526355!2d26.1823411" >Google Map Directions</a></Button>

                                    </div>
                                </div>
                            </div>
                        </div>



                    </section>
                </Contentpage>

                <a href="/contact" className="scroll-top">
                    <i className="lni lni-arrow-up"></i>
                </a>

            </>
        )
    }
}

import React, { useState } from "react";
import { Container, Col, Row, Image, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import OffNav from "../../components/OffNav/index.js";
import MainNav from "../../components/MainNav";
import List from "../../assets/icons/list";
import goldLogo from "../../assets/images/InterstellarConstruction.png";
import QualityCraft from "../../assets/images/QualityCraftsmanship.png";
import "./style.css";

export default function Landing() {
  return (
    <div id="landing">
      <Container fluid className="p-0">
        <Row className="int-blue pt-2 p-4">
          <Col
            xs={12}
            md={6}
            className="d-flex flex-column justify-content-center py-4"
          >
            <h1 className="d-grotesque text-center text-white">
              <span>
                <Container className="d-inline">
                  <Image width="10%" src={goldLogo} />
                </Container>
              </span>
              INTERSTELLAR CONSTRUCTION
              <br />
              <span className="sg">CONSTRUCTION AND REMODELING SERVICE</span>
            </h1>
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex flex-column justify-content-center"
          >
            <Container className="d-flex flex-column mt-3">
              <p className="text-white mona-1 mb-2">
                Call or email for a free estimate
              </p>
              <p className="text-white phone mona-1 my-0">
                <a href="tel:+17133826053">713-382-6053</a>
              </p>
              <p className="text-white phone mt-0">
                <a href="mailto:interstellarconstructionllc@gmail.com">
                  interstellarconstructionllc@gmail.com
                </a>
              </p>
            </Container>
          </Col>
        </Row>
        <Row>
          <Image src={QualityCraft} />
        </Row>
        <Row className="p-4">
          <Container className="py-5 pt-4 w-100">
            <Row className="pt-md-3 px-0 py-2">
              <Col sm={12} md={6} lg={4} className="d-flex">
                <Card className="serv-card p-5 py-3 pb-3 rounded-0 border-0">
                  <Card.Body>
                    <div className="serv-deco"></div>
                    <h2 className="d-grotesque serv-text    ">Roofing</h2>
                    <h4 className="d-grotesque serv-text    ">
                      Repairs and Replacements
                    </h4>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={6} lg={4} className="d-flex ">
                <Card className="serv-card p-5  py-3 pb-3 rounded-0 border-0">
                  <Card.Body>
                    <div className="serv-deco"></div>
                    <h2 className="d-grotesque serv-text    ">Concrete</h2>
                    <h4 className="d-grotesque serv-text    ">
                      Repair and Replacements
                    </h4>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={6} lg={4} className="d-flex     ">
                <Card className="serv-card p-5 py-3 pb-3 rounded-0 border-0">
                  <Card.Body>
                    <div className="serv-deco"></div>
                    <h2 className="d-grotesque serv-text    ">
                      General Contracting
                    </h2>
                    <h4 className="d-grotesque serv-text     mb-0">
                      Project Management
                    </h4>
                    <h4 className="d-grotesque serv-text     mb-0">Framing</h4>
                    <h4 className="d-grotesque serv-text    ">Extensions</h4>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={6} lg={4} className=" d-flex     ">
                <Card className="serv-card p-5  py-3 pb-3 rounded-0 border-0">
                  <Card.Body>
                    <div className="serv-deco"></div>
                    <h2 className="d-grotesque serv-text    ">
                      Full-scale renovation
                    </h2>
                    <h4 className="d-grotesque serv-text     mb-0">
                      Kitchen remodeling
                    </h4>
                    <h4 className="d-grotesque serv-text    ">
                      Bathroom remodeling
                    </h4>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={6} lg={4} className=" d-flex     ">
                <Card className="serv-card p-5  py-3 pb-3 rounded-0 border-0">
                  <Card.Body>
                    <div className="serv-deco"></div>
                    <h2 className="d-grotesque serv-text    ">Home Exterior</h2>
                    <h4 className="d-grotesque serv-text     mb-0">
                      Patio Covers
                    </h4>
                    <h4 className="d-grotesque serv-text    ">Siding</h4>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Row>
        <Row className="gold p-4">
          <Row className="pt-5">
            <h1 className="d-grotesque">OUR SERVICES</h1>
            <Container className="py-5 pt-4 w-100">
              <Row className="pt-md-3 px-0 py-2">
                <Col
                  sm={12}
                  md={6}
                  lg={4}
                  className="d-flex p-4 mona flex-column"
                >
                  <h2>Custom renovations</h2>
                  <h5>
                    Our team of skilled craftspeople is at the heart of
                    everything we do. By working together, we’re able to tackle
                    projects of any size with exceptional precision, ensuring
                    clear communication and seamless execution at every step.
                  </h5>
                </Col>
                <Col
                  sm={12}
                  md={6}
                  lg={4}
                  className="d-flex p-4 mona flex-column"
                >
                  <h2>Roofing and shuttering</h2>
                  <h5>
                    We offer a wide range of roofing solutions, including
                    pre-cast, post-cast, and metal roofing. Our team of
                    professionals will help you choose the right solution for
                    your home, ensuring a beautiful and durable roof.
                  </h5>
                </Col>
                <Col
                  sm={12}
                  md={6}
                  lg={4}
                  className="d-flex p-4 mona flex-column"
                >
                  <h2>Budget-Friendly</h2>
                  <h5>
                    We’re also able to collaborate with clients on more
                    budget-conscious projects. With a wide selection of
                    affordable materials and flexible options, we can tailor our
                    solutions to meet diverse budget needs.
                  </h5>
                </Col>
              </Row>
            </Container>
          </Row>
        </Row>
        <Row className="int-blue p-4">
          <Container className="py-5 pt-4 w-100">
            <Row className="p-5">
              <Col>
                <h1 className="footer-big text-center">
                  Let's talk about your next project!
                </h1>
              </Col>
              <Col className="d-flex flex-column justify-content-center">
                <p className="text-white phone mona-1 mb-0">Phone:</p>
                <p className="text-white phone mona-1 ">
                  <a href="tel:+17133826053">713-382-6053</a>
                </p>
                <p className="text-white phone mona-1 mb-0">Email:</p>
                <p className="text-white phone">
                  <a href="mailto:interstellarconstructionllc@gmail.com">
                    interstellarconstructionllc@gmail.com
                  </a>
                </p>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </div>
  );
}

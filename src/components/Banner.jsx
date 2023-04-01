import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Banner = ({ latestPosts }) => {
  return (
    <>
      <Container>
        <div className="jumbotron jumbotron-fluid mb-3 pt-0 pb-0 bg-lightblue position-relative">
          <div className="pl-4 pr-0 h-100 tofront">
            <Row className="justify-content-between">
              <Col md={6} className="pt-6 pb-6 align-self-center">
                <h1 className="secondfont mb-3 font-weight-bold">
                  {latestPosts?.title}
                </h1>
                <p className="mb-3">
                  {latestPosts?.summary}
                </p>
                <Link to={`/blog/${latestPosts?.id}`} variant="dark" >
                  Leer mas
                </Link>
              </Col>
              <Col
                md={6}
                className="d-none d-md-block"
                style={{
                  backgroundImage: `url(${latestPosts?.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              ></Col>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Banner;

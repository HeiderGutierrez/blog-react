import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import DefaultImage from '../assets/images/default.png';

const CardPost = (props) => {
  const { id, image, title, date, summary, author } = props;
  return (
    <Card className="mb-3" key={id}>
      <Row>
        <Col xs={12} md={4}>
          <Card.Img src={image ? image : DefaultImage} alt={title} />
        </Col>
        <Col xs={12} md={8}>
          <Card.Body>
            <h2 className="mb-1 h4 font-weight-bold">
              <Link to={`/blog/${id}`} className="text-dark">
                {title}
              </Link>
            </h2>
            <p>{summary}</p>
            <div className="card-text text-muted small">{author}</div>
            <small className="text-muted">{date}</small>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default CardPost;

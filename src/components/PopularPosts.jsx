import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

const PopularPosts = (props) => {
  return (
    <ListGroup className="list-featured">
      {props.popularPosts.map((post) => (
        <ListGroup.Item key={post.id}>
          <span>
            <h6 className="font-weight-bold">
              <Link to={`/blog/${post.id}`} className="text-dark">
                {post.title}
              </Link>
            </h6>
            <p className="text-muted">{post.author}</p>
          </span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default PopularPosts;


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share";
import { Container, Row, Col, Image, Badge } from "react-bootstrap";
import DefaultImage from "../assets/images/default.png";
import SuscribeForm from "../components/SubscribeForm/SubscribeForm";

const BlogPost = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  const getPost = async () => {
    try {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setPost(docSnap.data());
        // Incrementar viewsCount
        const postRef = doc(db, "posts", id);
        await updateDoc(postRef, {
          viewsCount: docSnap.data().viewsCount + 1,
        });
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <Container>
        <div
          fluid
          className="jumbotron jumbotron-fluid mb-3 pl-0 pt-0 pb-0 bg-white position-relative"
        >
          <div className="h-100 tofront">
            <Row className="justify-content-between">
              <Col md={6} className="pt-6 pb-6 pr-6 align-self-center">
                <p className="text-uppercase font-weight-bold">
                  <Badge variant="danger">
                    <a className="text-white" href="./category.html">
                      {post.category}
                    </a>
                  </Badge>
                </p>
                <h1 className="display-4 secondfont mb-3 font-weight-bold">
                  {post.title}
                </h1>
                <p className="mb-3">{post.summary}</p>
                <div className="d-flex align-items-center">
                  <Image
                    className="rounded-circle"
                    src={DefaultImage}
                    width={70}
                  />
                  <small className="ml-2">
                    {post.author}
                    <span className="text-muted d-block">{post.date}</span>
                  </small>
                </div>
              </Col>
              <Col md={6} className="pr-0">
                <Image
                  src={post.image ? post.image : DefaultImage}
                  alt={post.title}
                  fluid
                />
              </Col>
            </Row>
          </div>
        </div>
      </Container>
      <Container className="pt-4 pb-4">
        <Row className="justify-content-center">
          <Col lg={2} md={12} className="pr-4 mb-4">
            <div className="sticky-top text-center">
              <div className="text-muted">Share this</div>
              <div className="share">
                {/* AddToAny BEGIN */}
                <FacebookShareButton url={window.location.href}>
                  <FacebookIcon size={30} borderRadius={100} />
                </FacebookShareButton>
                <TwitterShareButton url={window.location.href}>
                  <TwitterIcon size={30} borderRadius={100} />
                </TwitterShareButton>
                {/* AddToAny END */}
              </div>
            </div>
          </Col>
          <Col lg={8} md={12}>
            <article className="article-post">
              <p>{post.content}</p>
            </article>
            <SuscribeForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BlogPost;

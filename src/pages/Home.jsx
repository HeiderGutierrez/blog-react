import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import { db } from "../services/firebase";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import CardPost from "../components/CardPost";
import PopularPosts from "../components/PopularPosts";
import SubscribeForm from "../components/SubscribeForm/SubscribeForm";
import Banner from "../components/Banner";
import SearchInput from "../components/SearchInput";

const Home = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [lastPost, setLastPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const LIMIT = 5;
  const postsCollections = collection(db, "posts");

  const getPosts = async (lastPostDoc) => {
    try {
      setLoading(true);
      let postsQuery = query(
        postsCollections,
        orderBy("date", "desc"),
        limit(LIMIT)
      );
      if (lastPostDoc) {
        postsQuery = query(
          postsCollections,
          orderBy("date", "desc"),
          startAfter(lastPostDoc),
          limit(LIMIT)
        );
      }
      const data = await getDocs(postsQuery);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setLatestPosts((prevPosts) =>
        lastPostDoc ? [...prevPosts, ...filteredData] : filteredData
      );
      setLastPost(data.docs[data.docs.length - 1]);
      setLoading(false);
      if (data.docs.length < LIMIT) {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getPopularPosts = async () => {
    try {
      const data = await getDocs(
        query(postsCollections, orderBy("viewsCount", "desc"), limit(4))
      );
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPopularPosts(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
    getPopularPosts();
  }, []);

  const handleLoadMore = () => {
    getPosts(lastPost);
  };

  // Filtramos los posts según el término de búsqueda
  const filteredPosts = latestPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {latestPosts.length > 0 && <Banner latestPosts={latestPosts[0]} />}
      <section className="latest-posts">
        <Container>
          <Row className="justify-content-between">
            <Col md={8}>
              <h5 className="font-weight-bold spanborder">
                <span>Todos los posts</span>
              </h5>
              <SearchInput setSearchTerm={setSearchTerm} />
              {filteredPosts.map((post) => (
                <CardPost
                  id={post.id}
                  image={post.image}
                  title={post.title}
                  date={post.date}
                  summary={post.summary}
                  author={post.author}
                />
              ))}
              {loading && (
                <div className="text-center mt-4 mb-4">
                  <Spinner animation="border" />
                </div>
              )}
              {!loading && hasMore && (
                <Button
                  onClick={handleLoadMore}
                  variant="primary"
                  className="btn-block"
                >
                  Cargar más
                </Button>
              )}
              {!hasMore && <p>No hay más posts para cargar</p>}
            </Col>
            <Col md={4} className="pl-4">
              <h5 className="font-weight-bold spanborder">
                <span>Popular</span>
              </h5>
              <PopularPosts popularPosts={popularPosts} />
            </Col>
          </Row>
        </Container>
      </section>
      <SubscribeForm />
    </div>
  );
};

export default Home;

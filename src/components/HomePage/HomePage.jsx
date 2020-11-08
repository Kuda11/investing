import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import firebase from "../../firebase"
import { Container, Dimmer, Header, Image, Segment, Loader, } from 'semantic-ui-react'

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("web-page-data");

  const getArticles = () => {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setArticles(items)
      setLoading(false)
    });
  }

  useEffect(() => {
    getArticles();
  }, []);

  if (loading) {
    return (
      <>
        <NavBar />
        <Container>
          <Header as='h1' size='huge' textAlign='center'>
            10 Investing Tips for Successful Investing for Everyday People
                      </Header>
          <h3><Dimmer active ><Loader inverted>Loading</Loader></Dimmer></h3>
        </Container>
      </>
    )
  }
  return (
    <>
      <NavBar />
      <Container>
        <Header as='h1' size='huge' textAlign='center'>
          10 Investing Tips for Successful Investing for Everyday People
      </Header>
        <Image centered src='https://images.pexels.com/photos/4031817/pexels-photo-4031817.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' size='huge' />
        {articles.map((article) => (
          <Segment key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.info}</p>
          </Segment>
        ))}
      </Container>
    </>
  );
};

export default HomePage;

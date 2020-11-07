import React from "react";
import styles from "./HomePage.module.scss";
import NavBar from "./NavBar";
import { Container, Header, Image, Segment } from 'semantic-ui-react'


const HomePage = () => {
  return (
    <>
    <NavBar/>
    <Container>
      <Header as='h1' size='huge' textAlign='center'>
        10 Investing Tips for Successful Investing for Everyday People
      </Header>
        <Image centered src='https://images.pexels.com/photos/4031817/pexels-photo-4031817.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' size='huge' />

      <Segment>
        <h3>1. Stay Rational</h3>
        <p>
        Regardless of your investment style, it’s always a good idea to try and mitigate your risk. If you want to limit potential losses, you could diversify your portfolio by spreading your money across investment types and regions. Think about it. If you invest all your money in one or two companies, you could be in for a nasty shock should these companies struggle. Now, say you buy a number of investments, including different types (e.g. shares, bonds, property), and invest in different financial markets, the likelihood of losing all your money will decrease.
        </p>
      </Segment>
      <Segment>
        <h3>2. Consider diversifying your portfolio</h3>
        <p>
        Focus your attention on industries that you’re already comfortable with. Imagine that you were going to have to own and operate a business.
        </p>
      </Segment>
      <Segment>
        <h3>3. Do Your Homework</h3>
        <p>
        Sometimes it takes time to find the perfect business for you. It is important to fully understand the business as if you were the owner of the company. Spend 5-10 hours getting to fully know a company from the inside and out.
        </p>
      </Segment>
      <Segment>
        <h3>4. Love What You Own</h3>
        <p>
        Love what you own. Put your money where your values are. Most of us have the intention to make the world a better place, but seem to forget that the businesses that they invest in have a direct impact on what is going to exist in the world in 20 years.
        </p>
      </Segment>
      <Segment>
        <h3>5. Start NOW!!</h3>
        <p>
        If you haven’t taken the plunge yet, what are you waiting for? Assuming you're in the position to and you’re comfortable taking some risk with your money, now could be a good time to start investing. By delaying your investment journey, you could be missing out on some positive growth – not ideal if you’re looking to maximise your potential profits. If you want to make the most of your investment journey, it could be worth letting your FOMO take over and urge you to invest. The earlier you start, the sooner your money could grow, so consider joining the investment world as soon as you can.
        </p>
      </Segment>
    </Container>
    </>
  );
};

export default HomePage;

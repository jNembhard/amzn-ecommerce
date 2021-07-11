import React from "react";
import styled from "styled-components";

function Home(props) {
  return (
    <HomeWrap>
      <HomeImg />
      <HomeContainer></HomeContainer>
    </HomeWrap>
  );
}

export default Home;

const HomeWrap = styled.div``;
const HomeContainer = styled.div``;

const HomeImg = styled.img``;
HomeImg.defaultProps = {
  src: process.env.PUBLIC_URL + "/images/amazon_pic.jpg",
};

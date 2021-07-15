import React from "react";
import styled from "styled-components";
import Product from "./Product";

function Home(props) {
  return (
    <HomeWrap>
      <HomeContainer>
        <HomeImg
          src={process.env.PUBLIC_URL + "/images/home_images/amazon_pic.jpg"}
          alt="Home Image"
        />
        <HomeRow>
          <Product
            id="13487928"
            title="The Lean Startup"
            price={29.99}
            image={
              process.env.PUBLIC_URL + "/images/home_images/lean_startup.jpg"
            }
            rating={4}
          />
          <Product
            id="49538094"
            title="SAMSUNG 65-Inch Class Crystal UHD AU8000 Series - 4K UHD HDR Smart TV with Alexa Built-in"
            price={797.99}
            image={
              process.env.PUBLIC_URL + "/images/home_images/samsung_tv.jpg"
            }
            rating={5}
          />
          <Product
            id="79249742"
            title="Echo Studio - High-fidelity smart speaker with 3D audio and Alexa"
            price={199.99}
            image={
              process.env.PUBLIC_URL +
              "/images/home_images/amazon_echo_studio.jpg"
            }
            rating={4}
          />
        </HomeRow>
        <HomeRow>
          <Product
            id="12495679"
            title="Keurig K-Elite Coffee Maker, Single Serve K-Cup Pod Coffee Brewer, With Iced Coffee Capability, Brushed Slate"
            price={119.99}
            image={
              process.env.PUBLIC_URL + "/images/home_images/coffee_maker.jpg"
            }
            rating={3}
          />
          <Product
            id="57128520"
            title="SkyTech Blaze II Gaming Computer PC Desktop - Ryzen 5 3600 6-Core 3.6GHz, GTX 1660 Super 6G, 500G SSD, 16GB DDR4 3000, RGB, AC WiFi, Windows 10 Home 64-bit"
            price={1109.0}
            image={
              process.env.PUBLIC_URL +
              "/images/home_images/skytech_computer.jpg"
            }
            rating={5}
          />
        </HomeRow>
        <HomeRow>
          <Product
            id="13029579"
            title="SkyTech Blaze II Gaming Computer PC Desktop - Ryzen 5 3600 6-Core 3.6GHz, GTX 1660 Super 6G, 500G SSD, 16GB DDR4 3000, RGB, AC WiFi, Windows 10 Home 64-bit"
            price={104.98}
            image={
              process.env.PUBLIC_URL + "/images/home_images/office_chair.jpg"
            }
            rating={5}
            quantity={0}
          />
        </HomeRow>
      </HomeContainer>
    </HomeWrap>
  );
}

export default Home;

const HomeWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1500px;
`;

const HomeRow = styled.div`
  display: flex;
  z-index: 1;
  margin-left: 5px;
  margin-right: 5px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const HomeContainer = styled.div``;

const HomeImg = styled.img`
  width: 100%;
  z-index: -1;
  margin-bottom: -150px;
  /* creates fade from top to bottom*/
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

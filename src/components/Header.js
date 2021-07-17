import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../features/StateProvider";
import { auth } from "../firebase";

function Header(props) {
  // eslint-disable-next-line no-unused-vars
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <Heading>
      <Link to="/">
        <HeaderLogo />
      </Link>

      <HeaderSearch>
        <HeaderSearchInput type="text" />
        <SearchIcon className="header__searchIcon"></SearchIcon>
      </HeaderSearch>

      <HeaderNav>
        <Link to={!user && "/login"} style={{ textDecoration: "none" }}>
          <HeaderOption onClick={handleAuthentication}>
            <OptionLineOne>
              {user ? "Hello " + user.email : "Hello Guest"}
            </OptionLineOne>
            <OptionLineTwo>{user ? "Sign Out" : "Sign In"}</OptionLineTwo>
          </HeaderOption>
        </Link>

        <Link to="/orders" style={{ textDecoration: "none" }}>
          <HeaderOption>
            <OptionLineOne>Returns</OptionLineOne>
            <OptionLineTwo>& Orders</OptionLineTwo>
          </HeaderOption>
        </Link>

        <HeaderOption>
          <OptionLineOne>Your</OptionLineOne>
          <OptionLineTwo>Prime</OptionLineTwo>
        </HeaderOption>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <HeaderOptionBasket>
            <ShoppingBasketIcon />
            <HeaderBasketCount>{basket?.length}</HeaderBasketCount>
          </HeaderOptionBasket>
        </Link>
      </HeaderNav>
    </Heading>
  );
}

export default Header;

const Heading = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #131921;
  position: sticky;
  top: 0;
  z-index: 100;
  @media (max-width: 768px) {
    max-width: fit-content;
  }
`;

const HeaderLogo = styled.img`
  width: 100px;
  object-fit: contain;
  margin: 0 20px;
  margin-top: 18px;
`;

HeaderLogo.defaultProps = {
  src: "https://pngimg.com/uploads/amazon/amazon_PNG11.png",
};

const HeaderNav = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const HeaderSearch = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 24px;
`;
const HeaderSearchInput = styled.input`
  height: 12px;
  padding: 10px;
  border: none;
  width: 100%;
  @media (max-width: 768px) {
    width: 100vw;
  }
`;

const HeaderOption = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  color: white;
`;
const OptionLineOne = styled.span`
  font-size: 10px;
  text-decoration: none;
`;
const OptionLineTwo = styled(OptionLineOne)`
  font-size: 13px;
  font-weight: 800;
`;
const HeaderOptionBasket = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

const HeaderBasketCount = styled(OptionLineTwo)`
  margin-left: 10px;
  margin-right: 10px;
`;

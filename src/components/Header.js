import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header(props) {
  return (
    <Heading>
      <HeaderLogo />
      <HeaderSearch>
        <HeaderSearchInput type="text" />
        <SearchIcon className="header__searchIcon"></SearchIcon>
      </HeaderSearch>

      <HeaderNav>
        <HeaderOption>
          <OptionLineOne>Hello User</OptionLineOne>
          <OptionLineTwo>Sign In</OptionLineTwo>
        </HeaderOption>

        <HeaderOption>
          <OptionLineOne>Returns</OptionLineOne>
          <OptionLineTwo>& Orders</OptionLineTwo>
        </HeaderOption>

        <HeaderOption>
          <OptionLineOne>Your</OptionLineOne>
          <OptionLineTwo>Prime</OptionLineTwo>
        </HeaderOption>

        <HeaderOptionBasket>
          <ShoppingBasketIcon />
          <HeaderBasketCount>0</HeaderBasketCount>
        </HeaderOptionBasket>
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
  display: flash;
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

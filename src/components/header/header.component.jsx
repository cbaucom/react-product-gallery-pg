import React from "react";

import {
  HeaderContainer,
  LogoText,
  SearchContainer,
  SearchIcon,
  InputContainer,
  BackgroundContainer,
} from "./header.styles.jsx";

const Header = ({ searchText, setSearchText }) => (
  <BackgroundContainer>
    <HeaderContainer>
      <LogoText>Amazing Store</LogoText>
      <SearchContainer>
        <SearchIcon />
        <InputContainer
          type="search"
          placeholder="Search products by name"
          value={searchText}
          onChange={({ target: { value } }) => setSearchText(value)}
        />
      </SearchContainer>
    </HeaderContainer>
  </BackgroundContainer>
);

export default Header;

import React from "react";

import { HeaderContainer, LogoText, SearchContainer, SearchIcon, InputContainer} from "./header.styles.jsx";

const Header = () => (
  <HeaderContainer>
    <LogoText>Amazing Store</LogoText>
    <SearchContainer>
      <SearchIcon />
      <InputContainer
        type="search"
        placeholder="Search products by name"
      />
    </SearchContainer>
  </HeaderContainer>
);

export default Header;

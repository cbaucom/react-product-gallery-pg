import React from "react";

import { HeaderContainer, LogoText, SearchContainer, SearchIcon, InputContainer} from "./header.styles.jsx";

const Header = ({searchText, setSearchText}) => (
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
);

export default Header;

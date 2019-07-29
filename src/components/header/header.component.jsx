import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import {
  HeaderContainer,
  LogoText,
  SearchContainer,
  SearchIcon,
  InputContainer,
  BackgroundContainer,
} from "./header.styles.jsx";

const Header = ({ searchText, setSearchText, hidden }) => (
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
			<CartIcon />
			{hidden ? null : <CartDropdown />}
    </HeaderContainer>
  </BackgroundContainer>
);

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);

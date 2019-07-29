import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
  TotalContainer
} from "./cart-dropdown.styles";
import CartItem from "../cart-item/cart-item.component";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

const CartDropdown = ({ cartItems, total }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      )}
    </CartItemsContainer>

    <TotalContainer>TOTAL: ${total.toFixed(2)}</TotalContainer>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CartDropdown);

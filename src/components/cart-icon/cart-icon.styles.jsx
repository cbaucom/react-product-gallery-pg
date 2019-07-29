import styled from "styled-components";

import { ReactComponent as ShoppingIconSVG } from "../../assets/shopping-bag.svg";

export const CartContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 40px;
  height: 40px;
`;

export const ItemCountContainer = styled.span`
  font-size: 22px;
  position: absolute;
  top: 13px;
`;

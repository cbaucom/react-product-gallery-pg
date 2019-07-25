import styled from "styled-components";

export const ProductsContainer = styled.section`
  padding: 0 2rem;
`;

export const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(191px, 1fr));
  grid-gap: 28px;
`;

export const ProductContainer = styled.div`
  background: #fff;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  box-shadow: 0 4px 14px 7px rgba(121, 121, 121, 0.05);
  height: 352px;
  padding: 20px;
  text-align: center;
  display: grid;
  align-content: space-between;
  justify-content: center;

  &:hover {
    border: 2px solid #f8cb00;
  }

  img {
    width: 100%;
  }

  .name {
    font-size: 18px;
    font-weight: 400;
    color: #373738;
    letter-spacing: 0;
    text-align: center;
  }

  .price {
    color: #f8cb00;
  }
`;

import styled from "styled-components";

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.86);
  position: fixed;
  top: 0;
  left: 0;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  left: 50px;
  right: 50px;
  background: #ffffff;
  box-shadow: 0 16px 34px 7px rgba(121, 121, 121, 0.1);
  border-radius: 4px;
  width: 860px;
  height: 533px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    width: 90vw;
    height: auto;
    left: 10px;
    right: 10px;
  }
`;

export const ModalContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 20px;
  padding: 1rem;
  background: white;
  font-size: 3rem;
  color: #373738;
  cursor: pointer;
  border: none;
  outline: 0;
  font-weight: 300;

  &:hover {
    opacity: 0.5;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  width: 70%;
`;

export const ProductImage = styled.div`
  margin: 0;
`;

export const ProductName = styled.div`
  font-size: 28px;
  color: #373738;
  letter-spacing: 0;
  text-align: left;
  padding-bottom: 2rem;
`;

export const ProductPrice = styled.div`
  font-size: 30px;
  color: #f8cb00;
  letter-spacing: 0;
  text-align: left;
  font-weight: 700;
  color: #f8cb00;
`;

export const ProductDescription = styled.p`
  font-weight: 300;
  font-size: 16px;
  color: #585858;
  letter-spacing: 0;
  line-height: 30px;
  text-align: left;
`;

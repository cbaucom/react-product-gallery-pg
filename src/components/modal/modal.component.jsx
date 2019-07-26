import React from "react";

import {
  CloseButton,
  ModalOverlay,
  ModalWrapper,
  ModalContainer,
  ProductContainer,
  ProductDescription,
  ProductImage,
  ProductName,
  ProductPrice,
} from "./modal.styles";

const Modal = ({
  product,
  setModalOpen,
  setSelectedProduct,
  setSelectedProductId,
}) => {
  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedProduct(null);
    setSelectedProductId(null);
  };

  return (
    <>
      <ModalOverlay />
      <ModalWrapper>
        <CloseButton onClick={handleModalClose}>&times;</CloseButton>
        <ModalContainer>
          <ProductImage>
            <img src={product.images.large} alt={product.name} />
          </ProductImage>
          <ProductContainer>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
            <ProductDescription>{product.description}</ProductDescription>
          </ProductContainer>
        </ModalContainer>
      </ModalWrapper>
    </>
  );
};

export default Modal;

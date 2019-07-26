import React from "react";

import { Card } from "./product-card.styles";

const ProductCard = ({ id, product, setModalOpen, setSelectedProductId }) => {
  const handleProductClick = () => {
    setSelectedProductId(id);
    setModalOpen(true);
  };

  return (
    <Card onClick={handleProductClick}>
      <img src={product.images.medium} alt={product.description} />
      <h3 className="name">{product.name}</h3>
      <h3 className="price">${product.price}</h3>
    </Card>
  );
};
export default ProductCard;

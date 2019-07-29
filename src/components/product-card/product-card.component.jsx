import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import { Card, AddButton, DetailsButton } from "./product-card.styles";

const ProductCard = ({ id, product, setModalOpen, setSelectedProductId, addItem }) => {
  const handleProductClick = () => {
    setSelectedProductId(id);
    setModalOpen(true);
  };

  return (
    <Card>
      <img src={product.images.medium} alt={product.description} />
      <h3 className="name">{product.name}</h3>
      <h3 className="price">${product.price}</h3>
      <DetailsButton inverted onClick={handleProductClick}>
        More details
      </DetailsButton>
      <AddButton inverted onClick={() => addItem(product)}>
        Add to cart
      </AddButton>
    </Card>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: product => dispatch(addItem(product)),
});

export default connect(
  null,
  mapDispatchToProps
)(ProductCard);

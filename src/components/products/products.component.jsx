import React from "react";

import { ProductsContainer, Products, ProductContainer } from "./products.styles";

const ProductsList = ({ products, searchText, minPrice, maxPrice }) => (
  <ProductsContainer>
    <h2>Category Name</h2>
    <Products>
      {products
        .filter(product =>
          product.name.toLowerCase().includes(searchText.toLowerCase())
        )
        .filter(product => product.price >= minPrice)
        .filter(product => product.price <= maxPrice)
        .map(({ id, name, images, description, price }) => (
          <ProductContainer key={id}>
            <img src={images.medium} alt={description} />
            <h3 className="name">{name}</h3>
            <h3 className="price">${price}</h3>
          </ProductContainer>
        ))}
    </Products>
  </ProductsContainer>
);

export default ProductsList;

import React from "react";

import ProductCard from '../product-card/product-card.component'
import {
  ProductsContainer,
  ProductList,
} from "./products.styles";

const Products = ({
  products,
  categoryName,
  searchText,
  minPrice,
  maxPrice,
  selectedCategoryId,
  setSelectedProductId,
  setModalOpen,
}) => {

  return (
      <ProductsContainer>
      <h2>{categoryName === undefined ? "All Products" : categoryName}</h2>
        <ProductList>
          {products
            .filter(product =>
              product.name.toLowerCase().includes(searchText.toLowerCase())
            )
            .filter(product => product.price >= minPrice)
            .filter(product => product.price <= maxPrice)
            .filter(product => selectedCategoryId !== undefined
              ? product.categoryId === selectedCategoryId
              : product
            )
            .map((product) => {
              return (
                <ProductCard product={product} id={product.id} key={product.id} setSelectedProductId={setSelectedProductId}
                setModalOpen={setModalOpen} />
              );
            })}
        </ProductList>
      </ProductsContainer>
  );
};

export default Products;

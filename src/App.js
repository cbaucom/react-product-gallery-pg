import React, { useState, useEffect } from "react";
import styled from "styled-components";

import "./App.css";
import { products, categories } from "./data";
import Header from "./components/header/header.component";
import Categories from "./components/categories/categories.component";
import Products from "./components/products/products.component";
import Modal from "./components/modal/modal.component";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const MainContainer = styled.main`
  width: 90%;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 2fr 6fr;
  padding: 0 2rem;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 0 1rem;
    grid-gap: 15px;
  }
`;

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(9999999);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);

  // Find the active category name
  const { name: categoryName } =
    categories.find(({ id }) => id === selectedCategoryId) || {};

  // Find and set the selected product
  useEffect(() => {
    const product = products.find(product => product.id === selectedProductId);

    setSelectedProduct(product);
  }, [selectedProductId]);

  // Find and set the selected category
  useEffect(() => {
    const category = categories.find(
      category => category.id === selectedCategoryId
    );

    setSelectedCategory(category);
  }, [selectedCategoryId]);

  return (
    <AppContainer>
      <Header searchText={searchText} setSearchText={setSearchText} />
      <MainContainer>
        <Categories
          categories={categories}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          selectedCategoryId={selectedCategoryId}
          setSelectedCategoryId={setSelectedCategoryId}
        />
        <Products
          products={products}
          categoryName={categoryName}
          selectedCategoryId={selectedCategoryId}
          searchText={searchText}
          minPrice={minPrice}
          maxPrice={maxPrice}
          setModalOpen={setModalOpen}
          setSelectedProductId={setSelectedProductId}
        />
        {modalOpen && selectedProduct ? (
          <Modal
            product={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            setModalOpen={setModalOpen}
            setSelectedProductId={setSelectedProductId}
          />
        ) : null}
      </MainContainer>
    </AppContainer>
  );
};

export default App;

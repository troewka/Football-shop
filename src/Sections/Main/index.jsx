import React from "react";
import Title from "../../Components/Title";
import Search from "../../Components/Search";
import Card from "../../Components/Card";
import "./styles.scss";

const Main = ({
  searchInput,
  setSearchInput,
  onSearchInputValue,
  product,
  onAddToCart,
  onAddToFavorite,
  loading,
}) => {
  const renderItems = () => {
    const prodFilter = product.filter((item) =>
      item.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    return (loading ? [...Array(8)] : prodFilter).map((items, index) => (
      <Card
        key={index}
        onAddToCart={(obj) => onAddToCart(obj)}
        onAddToFavorite={(obj) => onAddToFavorite(obj)}
        loading={loading}
        {...items}
      />
    ));
  };

  return (
    <section className="main">
      <div className="main__header">
        <Title inputValue={searchInput} text="Футбольні м`ячі" size="L" />
        <Search
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          onSearchInputValue={onSearchInputValue}
        />
      </div>
      <div className="main__cards">{renderItems()}</div>
    </section>
  );
};

export default Main;

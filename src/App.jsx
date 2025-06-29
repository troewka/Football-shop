import React, { createContext, useEffect, useState } from "react";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import Header from "./Sections/Header";
import Main from "./Sections/Main";
import Favorite from "./Sections/Favorites";
import Orders from "./Sections/Orders";
import Cart from "./Sections/Cart";
import "./App.scss";

export const AppContext = createContext({});

function App() {
  const [product, setProduct] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function onRequest() {
      const cartRequest = await axios.get(
        "https://684fc063e7c42cfd1795c950.mockapi.io/cart"
      );
      const favoriteRequest = await axios.get(
        "https://6855002b6a6ef0ed6630d873.mockapi.io/favorite"
      );
      const productRequest = await axios.get(
        "https://684fc063e7c42cfd1795c950.mockapi.io/items"
      );
      setLoading(false);

      setCartItems(cartRequest.data);
      setFavoriteItems(favoriteRequest.data);
      setProduct(productRequest.data);
    }
    onRequest();
  }, []);

  const onAddToCart = async (obj) => {
    const findItem = cartItems.find((item) => item.parentId === obj.id);

    try {
      if (findItem) {
        setCartItems((prev) => prev.filter((prod) => prod.parentId !== obj.id));
        await axios.delete(
          `https://684fc063e7c42cfd1795c950.mockapi.io/cart/${findItem.id}`
        );
      } else {
        const { data } = await axios.post(
          "https://684fc063e7c42cfd1795c950.mockapi.io/cart",
          obj
        );
        setCartItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert(`Виникла помилка ${error} при додавані в Кошик`);
    }
  };

  const onAddToFavorite = async (obj) => {
    const findItem = favoriteItems.find((item) => item.parentId === obj.id);
    try {
      if (findItem) {
        axios.delete(
          `https://6855002b6a6ef0ed6630d873.mockapi.io/favorite/${findItem.id}`
        );
        setFavoriteItems((prev) =>
          prev.filter((item) => item.parentId !== obj.id)
        );
      } else {
        const { data } = await axios.post(
          "https://6855002b6a6ef0ed6630d873.mockapi.io/favorite",
          obj
        );
        setFavoriteItems((prev) => [...prev, data]);
        console.log(favoriteItems);
      }
    } catch (error) {
      alert(`Произошла ошыбка ${error} при добавлении в Закладки`);
    }
  };

  const onRemoveFromCart = (id) => {
    axios.delete(`https://684fc063e7c42cfd1795c950.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onSearchInputValue = (event) => {
    setSearchInput(event.target.value);
  };

  const onCheckAddedToCart = (id) => {
    return cartItems.some((obj) => obj.parentId === id);
  };

  const onCheckAddedToFavorites = (id) => {
    return favoriteItems.some((obj) => obj.parentId === id);
  };

  return (
    <AppContext.Provider
      value={{
        product,
        cartItems,
        setCartItems,
        favoriteItems,
        onCheckAddedToCart,
        onCheckAddedToFavorites,
      }}
    >
      <div className="app">
        <div className="container">
          {isCartOpen ? (
            <Cart
              items={cartItems}
              removeItem={onRemoveFromCart}
              isClose={() => setIsCartOpen(false)}
            />
          ) : null}
          <Header cartItems={cartItems} isOpen={() => setIsCartOpen(true)} />
          <Route path="/" exact>
            <Main
              product={product}
              loading={loading}
              onAddToCart={onAddToCart}
              onAddToFavorite={onAddToFavorite}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              onSearchInputValue={onSearchInputValue}
            />
          </Route>
          <Route path="/favorite" exact>
            <Favorite
              favorite={favoriteItems}
              onAddToCart={onAddToCart}
              onAddToFavorite={onAddToFavorite}
            />
          </Route>
          <Route path="/orders" exact>
            <Orders
              favorite={favoriteItems}
              onAddToCart={onAddToCart}
              onAddToFavorite={onAddToFavorite}
            />
          </Route>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;

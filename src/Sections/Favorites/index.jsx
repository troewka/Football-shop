import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Title from "../../Components/Title";
import Card from "../../Components/Card";
import Message from "../../Components/Message";
import "./styles.scss";

const Favorite = ({ favorite, onAddToCart, onAddToFavorite }) => {
  return (
    <section className="favorite">
      {favorite.length > 0 ? (
        <>
          <div className="favorite__header">
            <Link to="/">
              <img src="/image/icons/back.svg" alt="back" />
            </Link>
            <Title text="Список бажань" size="L" />
          </div>
          <div className="favorite__cards">
            {favorite.map((items, index) => {
              return (
                <Card
                  key={index}
                  onAddToCart={(obj) => onAddToCart(obj)}
                  onAddToFavorite={(obj) => onAddToFavorite(obj)}
                  {...items}
                />
              );
            })}
          </div>
        </>
      ) : (
        <Message
          to="/"
          image="bookmarksEmpty"
          title="Списків бажань немає :("
          descr="Ви нічого не додали до списка бажань"
          typeBtn="pageEmpty"
        />
      )}
    </section>
  );
};

export default Favorite;

import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Menu from "../../Components/Menu";
import "./styles.scss";

const Header = ({ cartItems, isOpen }) => {
  const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo">
          <img src="/image/picture/logo.png" alt="logo" />
          <div className="header__title">
            <h1>Football-Shop</h1>
            <p>Магазин кращих футбольних м'ячів</p>
          </div>
        </div>
      </Link>

      <ul className="header__menu">
        <Menu
          isOpen={isOpen}
          imgUrl="/image/icons/cart.svg"
          text={`${totalPrice} грн.`}
        />
        <Menu
          to="/favorite"
          imgUrl="/image/icons/favorite.svg"
          text="Список бажань"
        />
        <Menu
          to="/orders"
          imgUrl="/image/icons/profile.svg"
          text="Замовлення"
        />
      </ul>
    </header>
  );
};

export default Header;

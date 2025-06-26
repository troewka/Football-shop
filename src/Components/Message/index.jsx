import React from "react";
import Title from "../Title";
import Button from "../Button";
import "./styles.scss";

const Message = ({ image, title, colorTitle, descr, typeBtn, isClose, to }) => {
  let imageUrl = "";
  switch (image) {
    case "cartEmpty":
      imageUrl = "/image/picture/cart_empty.png";
      break;
    case "orderDone":
      imageUrl = "/image/picture/order_done.png";
      break;
    case "bookmarksEmpty":
      imageUrl = "/image/picture/bookmarks_empty.png";
      break;
    case "orderEmpty":
      imageUrl = "/image/picture/order_empty.png";
      break;
    default:
      imageUrl = "";
  }
  return (
    <div className="cart-info">
      <img className="cart-info__picture" src={imageUrl} alt={title} />
      <div className="cart-info__title">
        <Title text={title} size="S" color={colorTitle} />
      </div>
      <p>{descr}</p>
      <Button
        to={to}
        isClose={isClose}
        text="Повернутись назад"
        type={typeBtn}
      />
    </div>
  );
};

export default Message;

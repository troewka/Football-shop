import React, { useContext, useState } from "react";
import axios from "axios";
import Title from "../../Components/Title";
import Button from "../../Components/Button";
import Message from "../../Components/Message";
import { AppContext } from "../../App";
import "./styles.scss";

const Cart = ({ items, removeItem, isClose }) => {
  const { cartItems, setCartItems } = useContext(AppContext);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [isOrdersId, setIsOrdersId] = useState(null);

  const onClickOrder = async () => {
    try {
      setIsOrderComplete(true);
      const { data } = await axios.post(
        "https://6855002b6a6ef0ed6630d873.mockapi.io/orders",
        {
          items: cartItems,
        }
      );
      setIsOrdersId(data);
      setCartItems([]);
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          "https://684fc063e7c42cfd1795c950.mockapi.io/cart/" + item.id
        );
      }
    } catch (error) {
      alert(`Виникла помилка ${error} при додавані Замовлення`);
    }
  };

  const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="overlay">
      <div className="cart">
        <div className="cart__header">
          <Title text="Кошик" size="M" />
          <img onClick={isClose} src="/image/icons/close.svg" alt="close" />
        </div>
        {items.length > 0 ? (
          <div className="cart__block">
            <div className="cart__items">
              {items.map((item) => {
                return (
                  <div key={item.id} className="cart__item">
                    <img
                      className="cart__picture"
                      src={item.imgUrl}
                      alt={item.title}
                    />
                    <div className="cart__descr">
                      <p>{item.title}</p>
                      <b>{item.price} руб.</b>
                    </div>
                    <img
                      onClick={() => removeItem(item.id)}
                      className="cart__delete"
                      src="/image/icons/close.svg"
                      alt="delete"
                    />
                  </div>
                );
              })}
            </div>
            <div className="cart__order">
              <div className="cart__price">
                <p>Всього: </p>
                <span></span>
                <b>{totalPrice} грн.</b>
              </div>
              <div className="cart__price">
                <p>ПДВ 20%:</p>
                <span></span>
                <b>{Math.round((totalPrice / 100) * 20)} грн.</b>
              </div>
              <Button
                onClickOrder={onClickOrder}
                text="Оформити замовлення"
                type="order"
              />
            </div>
          </div>
        ) : (
          <Message
            image={isOrderComplete ? "orderDone" : "cartEmpty"}
            title={isOrderComplete ? "Замовлення оформлено!" : "Кошик порожній"}
            colorTitle={isOrderComplete ? "#87C20A" : "#000000"}
            descr={
              isOrderComplete
                ? `Ваше замовлення № ${isOrdersId.id} найближчим часом буде передано до кур'єрської служби`
                : "Додайте хоча б один товар, щоб зробити замовлення."
            }
            typeBtn={
              isOrderComplete ? "back" : "order" || cartItems ? "back" : null
            }
            isClose={isClose}
          />
        )}
      </div>
    </div>
  );
};

export default Cart;

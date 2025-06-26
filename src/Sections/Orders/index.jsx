import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Title from "../../Components/Title";
import Card from "../../Components/Card";
import Message from "../../Components/Message";
import "./styles.scss";

const Orders = () => {
  const [isOrders, setIsOrdes] = useState([]);

  useEffect(() => {
    const onGetOrders = async () => {
      try {
        const { data } = await axios.get(
          "https://6855002b6a6ef0ed6630d873.mockapi.io/orders"
        );
        setIsOrdes((prev) => [...prev, ...data.map((obj) => obj.items).flat()]);
      } catch (error) {
        console.log("Не вдалось отримати замовлення");
      }
    };
    onGetOrders();
  }, []);

  return (
    <section className="orders">
      {isOrders.length > 0 ? (
        <>
          <div className="orders__header">
            <Link to="/">
              <img src="/image/icons/back.svg" alt="back" />
            </Link>

            <Title text="Мої замовлення" size="L" />
          </div>
          <div className="orders__cards">
            {isOrders.map((items, index) => {
              return <Card key={index} {...items} />;
            })}
          </div>
        </>
      ) : (
        <Message
          to="/"
          image="orderEmpty"
          title="Замовлення відсутні :("
          descr="Ви нічого не змовили"
          typeBtn="pageEmpty"
        />
      )}
    </section>
  );
};

export default Orders;

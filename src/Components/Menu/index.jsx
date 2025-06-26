import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./styles.scss";

const Menu = ({ imgUrl, text, isOpen, to }) => {
  const Content = (
    <div onClick={isOpen} className="menu">
      <img src={imgUrl} alt={text} />
      <span>{text}</span>
    </div>
  );
  return <li>{to ? <Link to={to}>{Content}</Link> : Content}</li>;
};

export default Menu;

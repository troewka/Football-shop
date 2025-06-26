import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./styles.scss";

const Button = ({ text, type, isClose, onClickOrder, to }) => {
  let className = "";
  if (type === "order") {
    className = "btn order";
  } else if (type === "back") {
    className = "btn back";
  } else if (type === "pageEmpty") {
    className = "btn page-empty";
  } else {
    className = "btn";
  }
  const Content = (
    <div className="wrap-btn">
      <button
        onClick={type === "order" ? onClickOrder : isClose}
        className={className}
      >
        {text} <img src="/image/icons/btn_arrow.svg" alt="arrow" />
      </button>
    </div>
  );

  return <>{to ? <Link to={to}>{Content}</Link> : Content}</>;
};

export default Button;

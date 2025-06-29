import React, { useState, useContext } from "react";
import ContentLoader from "react-content-loader";
import "./styles.scss";
import { AppContext } from "../../App";

const Card = ({
  id,
  imgUrl,
  title,
  price,
  onAddToCart,
  onAddToFavorite,

  loading,
}) => {
  const { onCheckAddedToCart, onCheckAddedToFavorites } =
    useContext(AppContext);
  //const [favorite, setFavorite] = useState(checkFavorite);
  const cardObj = { id, parentId: id, imgUrl, title, price };

  const onClickAdd = () => {
    onAddToCart(cardObj);
  };

  const onClickFavorite = () => {
    onAddToFavorite(cardObj);
    //setFavorite(!favorite);
  };
  return (
    <div className="card">
      {loading ? (
        <ContentLoader
          speed={2}
          width={210}
          height={260}
          viewBox="0 0 210 260"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="33" y="35" rx="10" ry="10" width="150" height="90" />
          <rect x="33" y="155" rx="5" ry="5" width="95" height="15" />
          <rect x="33" y="190" rx="5" ry="5" width="80" height="25" />
          <rect x="33" y="135" rx="5" ry="5" width="150" height="15" />
          <rect x="150" y="185" rx="5" ry="5" width="32" height="32" />
        </ContentLoader>
      ) : (
        <div className="card__item">
          {onAddToFavorite && (
            <button onClick={onClickFavorite}>
              <img
                src={
                  onCheckAddedToFavorites(id)
                    ? "/image/icons/liked.svg"
                    : "/image/icons/unliked.svg"
                }
                alt="favorite"
              />
            </button>
          )}

          <div className="card__descr">
            <img className="card__picture" src={imgUrl} alt={title} />
            <p>{title}</p>
            <div className="card__cost">
              <div className="card__price">
                <p>Ціна:</p>
                <b>{price} грн.</b>
              </div>
              {onAddToCart && (
                <button onClick={onClickAdd}>
                  <img
                    src={
                      onCheckAddedToCart(id)
                        ? "/image/icons/done.svg"
                        : "/image/icons/plus.svg"
                    }
                    alt="plus"
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;

//const itemsBall = [
//    {
//    "imgUrl": "https://content2.rozetka.com.ua/goods/images/big/521430561.jpg",
//    "title": "М'яч футбольний ADIDAS UCL LEAGUE COMPETITION JH1288 №5",
//    "price": 1980
//  },
//  {
//    "imgUrl": "https://content1.rozetka.com.ua/goods/images/big/319634795.jpg",
//    "title": "М'яч футбольний Select Fusion 962 Біло-синій №5",
//    "price": 1392
//  },
//  {
//    "imgUrl": "https://content.rozetka.com.ua/goods/images/big/488580529.jpg",
//    "title": "М'яч футбольний Adidas TIRO MATCH (HT2421) білий, зелений Унісекс 5",
//    "price": 1099
//  },
//  {
//    "imgUrl": "https://content1.rozetka.com.ua/goods/images/big/304268307.jpg",
//    "title": "М'яч футбольний Puma Orbita 3 TB FQ Football Size 5",
//    "price": 1879
//  },
//  {
//    "imgUrl": "https://content2.rozetka.com.ua/goods/images/big/411152082.jpg",
//    "title": "Футбольний м'яч CU8064-100 5 NIKE STRKTEAM ",
//    "price": 1223
//  },
//  {
//    "imgUrl": "https://content2.rozetka.com.ua/goods/images/big/461722966.jpg",
//    "title": "Футбольний м'яч Adidas Teamwear UCL Club IN9328 розмір №4 Зелений",
//    "price": 1093
//  },
//  {
//    "imgUrl": "https://content1.rozetka.com.ua/goods/images/big/318040959.jpg",
//    "title": "М'яч футбольний Select Flash Turf v23 383 Жовто-помаранчевий №4 ",
//    "price": 2505
//  },
//  {
//    "imgUrl": "https://content1.rozetka.com.ua/goods/images/big/461722787.jpg",
//    "title": "Футбольний м'яч Adidas Teamwear Tiro Competition HT2426 розмір №5 Біло-синьо-червоний",
//    "price": 1912
//  }
//]

//const items = [
//  {
//    "imgUrl": "/image/picture/nike_blazer.png",
//    "title": "Мужские Кроссовки Nike Blazer Mid Suede",
//    "price": 12999
//  },
//  {
//    "imgUrl": "/image/picture/nike_airmax.png",
//    "title": "Мужские Кроссовки Nike Air Max 270",
//    "price": 13700
//  },
//  {
//    "imgUrl": "/image/picture/nike_blazer2.png",
//    "title": "Мужские Кроссовки Nike Blazer Mid Suede",
//    "price": 8499
//  },
//  {
//    "imgUrl": "/image/picture/puma_x.png",
//    "title": "Кроссовки Puma X Aka Boku Future Rider",
//    "price": 8999
//  },
//  {
//    "imgUrl": "/image/picture/under_armour.png",
//    "title": "Мужские Кроссовки Under Armour Curry 8",
//    "price": 15199
//  },
//  {
//    "imgUrl": "/image/picture/nike_kyrie.png",
//    "title": "Мужские Кроссовки Nike Kyrie 7",
//    "price": 11299
//  },
//  {
//    "imgUrl": "/image/picture/nike_jordan.png",
//    "title": "Мужские Кроссовки Jordan Air Jordan 11",
//    "price": 10799
//  },
//  {
//    "imgUrl": "/image/picture/nike_lebron.png",
//    "title": "Мужские Кроссовки Nike LeBron XVIII",
//    "price": 16499
//  },
//  {
//    "imgUrl": "/image/picture/nike_lebron2.png",
//    "title": "Мужские Кроссовки Nike Lebron XVIII Low",
//    "price": 13999
//  },
//  {
//    "imgUrl": "/image/picture/nike_kyrie2.png",
//    "title": "Мужские Кроссовки Nike Kyrie Flytrap IV",
//    "price": 11499
//  }
//]

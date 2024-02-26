import React, { Component } from "react";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { toast } from "react-toastify";
export default class Card extends Component {
  render() {
    let {
      item,
      handleCountChange,
      handleLike,
      handleAddCart,
      cartBtn,
      handleRemoveCart,
    } = this.props;
    return (
      <div className="cardBox">
        <div className="card">
          <div className="flex-center">
            <div className="chegirma">{item?.chegirma}% off</div>
            <button className="likeBtn" onClick={() => handleLike(item)}>
              {item?.like ? <AiTwotoneHeart /> : <AiOutlineHeart />}
            </button>
          </div>
          <figure>
            <img src={item?.rasm} alt={item?.nomi} />
          </figure>
          <div className="card_text">
            <p>
              {item?.ombor_Soni > 0 ? (
                ""
              ) : (
                <span className="notData"> Not </span>
              )}
              Available(in stock)
            </p>
            <h3> {item.nomi} </h3>
            <div className="narx">
              <p>
                <b>${item?.chegirmaNarx} </b>
                <s>${item?.narx}</s>
              </p>
            </div>
          </div>
          {cartBtn ? (
            <div className="flex-center">
              <button onClick={() => handleRemoveCart(item)} className="rmCart effectBtn">
                remove cart
              </button>
              <button
                onClick={() => {
                  toast.error("mahsulotni olish uchun ro'yxatdan o'ting");
                }}
                className="shopBtn effectBtn"
              >
                shop product
              </button>
            </div>
          ) : (
            <div className="flex-center">
              <div className="flex-center btns ">
                <button
                  name="minus"
                  onClick={(e) => handleCountChange(e, item)}
                >
                  -
                </button>
                <span>{item?.soni} </span>
                <button onClick={(e) => handleCountChange(e, item)} name="plus">
                  +
                </button>
              </div>
              <button className="cartAdd" onClick={() => handleAddCart(item)}>
                <BsCartPlus className="_icon" />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

class CardBox extends Component {
  render() {
    let { item } = this.props;
    return (
      <div className="cardBoxer">
        <figure>
          <img src={item?.rasm} alt={item?.nomi} />
        </figure>
        <div className="cardBoxer_text">
          <p>
            <b>{item?.desc}</b>
            <br />
            {item?.text}
          </p>
        </div>
        <button className="shop">shop now</button>
      </div>
    );
  }
}

export { CardBox };

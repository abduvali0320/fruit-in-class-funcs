import React, { Component } from "react";
import Card from "../card/Card";
import { MdOutlineClose } from "react-icons/md";
export default class ModalCart extends Component {
  render() {
    let { cartShow, cartData, handleCartShow, handleCountChange, handleLike,handleRemoveCart } =
      this.props;
    return (
      <div className={cartShow ? "modalCart" : "modalCart disabled"}>
        <div className="cartBody">
          <button
            className="modalClose"
            title="modal yopish"
            onClick={handleCartShow}
          >
            <MdOutlineClose />
          </button>
          <div className="cartBox">
            {cartData.map((u) => {
              return (
                <Card
                  item={u}
                  handleCountChange={handleCountChange}
                  key={u.id}
                  cartBtn={true}
                  handleLike={handleLike}
                  handleRemoveCart={handleRemoveCart}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

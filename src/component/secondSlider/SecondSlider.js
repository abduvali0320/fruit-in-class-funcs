import React, { Component } from "react";
import Card from "../card/Card";
import Slider from "react-slick";

export default class SecondSlider extends Component {
  render() {
    let { data, handleCountChange, handleLike, handleAddCart } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    };
    return (
      <div>
        <div className="infoText">
          <b> For You</b>
          <h3>Top Vegetables & Fruits Products</h3>
        </div>
        <div className="firstSlider">
          <Slider {...settings}>
            {[...data, ...data, ...data].map((e, i) => {
              return (
                <Card
                  item={e}
                  key={e.id}
                  handleCountChange={handleCountChange}
                  handleLike={handleLike}
                  handleAddCart={handleAddCart}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

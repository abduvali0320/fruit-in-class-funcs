import { Component } from "react";
import SimpleSliderItem from "./SimpleSliderItem";
import rasm1 from "../../support/images/simpleSlider/3052951.png";
import rasm2 from "../../support/images/simpleSlider/3053051.png";
import rasm3 from "../../support/images/simpleSlider/groceries1.png";
import rasm4 from "../../support/images/simpleSlider/house1.png";
import rasm5 from "../../support/images/simpleSlider/milk1.png";
import rasm6 from "../../support/images/simpleSlider/shopping-cart1.png";
import Slider from "react-slick";
class SimpleSlider extends Component {
  state = {
    data: [
      {
        id: 1,
        nomi: "Vegetables & Fruits",
        rasm: rasm1,
      },
      {
        id: 2,
        nomi: "Beverages",
        rasm: rasm2,
      },
      {
        id: 3,
        nomi: "Snacks",
        rasm: rasm3,
      },
      {
        id: 4,
        nomi: "Home Care",
        rasm: rasm4,
      },
      {
        id: 5,
        nomi: "Dairy & Eggs",
        rasm: rasm5,
      },
      {
        id: 6,
        nomi: "Grocery & Staples",
        rasm: rasm6,
      },
    ],
  };

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      cssEase: "ease",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="simpleSlider">
        <div className="infoText" >
          <b>shop by</b>
          <h3>Categories</h3>
        </div>
        <Slider {...settings}>
          {this.state.data.map((i, index) => {
            return <SimpleSliderItem data={i} key={index} />;
          })}
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;

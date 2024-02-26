import { Component } from "react";
import SliderItem from "./SliderItem";
import Slider from "react-slick";
import rasm1 from "../../support/images/slowSlider/Rectangle(1).png";
import rasm2 from "../../support/images/slowSlider/Rectangle(2).png";
import rasm3 from "../../support/images/slowSlider/Rectangle(4).png";
import rasm4 from "../../support/images/slowSlider/Rectangle7(3).png";
import rasm5 from "../../support/images/slowSlider/Rectangle7.png";
class SlowSlider extends Component {
  state = {
    data: [
      {
        id: 1,
        chegirma: 6,
        sarlavha: "Buy More & Save More",
        text: "Beverage",
        rasm: rasm1,
      },
      {
        id: 2,
        chegirma: 10,
        sarlavha: "Buy More & Save More",
        text: "Nuts & Snacks",
        rasm: rasm2,
      },
      {
        id: 3,
        chegirma: 25,
        sarlavha: "Buy More & Save More",
        text: "Fresh Vegetables",
        rasm: rasm3,
      },
      {
        id: 4,
        chegirma: 8,
        sarlavha: "Buy More & Save More",
        text: "Fresh Fruits",
        rasm: rasm4,
      },
      {
        id: 5,
        chegirma: 19,
        sarlavha: "Buy More & Save More",
        text: "Eggs & Dairy",
        rasm: rasm5,
      },
    ],
  };
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 50000,
      autoplaySpeed: 1,
      cssEase: "linear",
    };
    return (
      <>
        <Slider {...settings}>
          {[...this.state.data, ...this.state.data, ...this.state.data].map(
            (item, index) => (
              <SliderItem data={item} key={index} />
            )
          )}
        </Slider>
      </>
    );
  }
}

export default SlowSlider;

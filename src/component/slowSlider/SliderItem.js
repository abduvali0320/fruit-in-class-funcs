import { Component } from "react";
class SliderItem extends Component {
  render() {
    let { data } = this.props;
    return (
      <div className="slowSlider_box">
        <div className="slowSlider_item">
          <figure>
            <img src={data.rasm} alt={data.sarlavha} />
          </figure>
          <div className="slider_info">
            <b> {data.chegirma}% OFF </b>
            <h3> {data.sarlavha} </h3>
            <p> {data.text} </p>
          </div>
          <button className="shop">shop now</button>
        </div>
      </div>
    );
  }
}

export default SliderItem;

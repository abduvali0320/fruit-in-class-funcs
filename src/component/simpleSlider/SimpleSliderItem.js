import { Component } from "react";
class SimpleSliderItem extends Component {
  render() {
    let { data } = this.props;
    return (
      <div className="simpleSliderBox">
        <div className="simpleSliderItem" >
          <figure>
            <img src={data.rasm} alt={data.nomi} />
          </figure>
          <p>{data.nomi}</p>
        </div>
      </div>
    );
  }
}

export default SimpleSliderItem;

import { Component } from "react";
import { CardBox } from "../card/Card";
import rasm1 from "../../support/images/international/bir.png";
import rasm2 from "../../support/images/international/ikki.png";
import rasm3 from "../../support/images/international/tort.png";
class Offers extends Component {
  state = {
    data: [
      {
        desc: "Daily Essentials",
        text: "20% off Everyday",
        rasm: rasm1,
      },
      {
        desc: "GET UP TO ",
        text: "30% Off",
        rasm: rasm2,
      },
      {
        desc: "Special Discount",
        text: " for All Items",
        rasm: rasm3,
      },
    ],
  };
  render() {
    return (
      <>
        <div className="offers">
          <div className="infoText">
            <b> Offers</b>
            <h3>Best Values</h3>
          </div>
          <div className="boxer flex-center ">
            <div className="box">
              {this.state.data.map((item, i) => {
                return <CardBox key={i} item={item} />;
              })}
            </div>
          </div>
        </div>
        <div className="cashBox">
          <div className="opacity"></div>
          <h2>Get $5 Cashback! Min Order of $50</h2>
          <button>USE CODE : COMBOSUPERR2a</button>
        </div>
      </>
    );
  }
}
export { Offers };

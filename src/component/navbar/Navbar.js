import { Component } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookSquare, FaWhatsapp } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { LuPhoneCall } from "react-icons/lu";
import { BsTwitter, BsSearch } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

class Navbar extends Component {
  render() {
    let { data, handleCartShow, handleLikeShow, cartData } = this.props;
    return (
      <div className="navbar ">
        <div className="navbarTop">
          <div className="email flex-center g-10">
            <a href="#" className="flex-center g-10">
              <HiOutlineMail className="_icon" /> Hello@colorlib.com
            </a>
          </div>
          <div>Free Shipping for all order of $99</div>
          <div className="flex-center g-10">
            <a href="#">
              <FaFacebookSquare className="_icon" />
            </a>
            <a href="#">
              <FaWhatsapp className="_icon" />
            </a>
            <a href="#">
              <ImLinkedin className="_icon" />
            </a>
            <a href="#">
              <BsTwitter className="_icon" />
            </a>
          </div>
        </div>
        <div className="navbarCenter">
          <div className="logo">LOGO🍎</div>
          <select>
            <option hidden>nimadir belgilang</option>
            <option>select</option>
            <option>select</option>
            <option>select</option>
            <option>select</option>
          </select>
          <div className="search flex-center g-10 ">
            <BsSearch className="_icon" />
            <input type="search" placeholder="Search for products..." />
          </div>
          <div className="tel">
            <a href="tel:+998 99 798-78-40" className="flex-center g-10">
              <LuPhoneCall className="_icon" />
              +998 99 798-78-40
            </a>
          </div>
          <div className="likeBox flex-center ">
            <button onClick={handleLikeShow}>
              <AiOutlineHeart className="_icon" />
              {[
                ...data?.firtSlider,
                ...data?.secondSlider,
                ...data?.thirstSlider,
              ].filter((e) => e.like)?.length > 0 ? (
                <span>
                  {
                    [
                      ...data?.firtSlider,
                      ...data?.secondSlider,
                      ...data?.thirstSlider,
                    ].filter((e) => e?.like)?.length
                  }
                </span>
              ) : (
                ""
              )}
            </button>
          </div>
          <div className="profile">
            <select>
              <option hidden>profileni tanlang</option>
              <option>select</option>
              <option>select</option>
              <option>select</option>
              <option>select</option>
            </select>
          </div>
        </div>
        <nav>
          <div className="flex-center">
            <div className="selectCategory">
              <div className="spans">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p>Select Categories</p>
            </div>
            <ul className="flex-center">
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">Stores</a>
              </li>
              <li>
                <a href="#">CONTACT</a>
              </li>
            </ul>
          </div>
          <button className="cartBtn flex-center g-10" onClick={handleCartShow}>
            <AiOutlineShoppingCart className="_icon" />
            CART <span> {cartData.length > 0 ? cartData.length : ""}</span>
          </button>
        </nav>
      </div>
    );
  }
}
export default Navbar;

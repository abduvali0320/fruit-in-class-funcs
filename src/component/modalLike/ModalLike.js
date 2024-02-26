import React, { Component } from "react";
import { BsCartPlusFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
export default class ModalLike extends Component {
  render() {
    let { likeShow, data, handleLike, handleLikeShow, handleAddCart } =
      this.props;
    return (
      <div className={likeShow ? "modalLike" : " modalLike disabled"}>
        <button
          className="modalClose"
          title="modal yopish"
          onClick={handleLikeShow}
        >
          <MdOutlineClose />
        </button>
        <div className="likeBody">
          <table border={1}>
            <thead>
              <tr>
                <th>rasm</th>
                <th>nomi</th>
                <th>ombordagi son</th>
                <th>narxi</th>
                <th>chegirma</th>
                <th colSpan={3}> action </th>
              </tr>
            </thead>
            <tbody>
              {data.filter((i) => i.like)?.length > 0 ? (
                data
                  .filter((i) => i.like)
                  ?.map((o) => {
                    return (
                      <tr key={o.id}>
                        <td>
                          <figure className="table_rasm">
                            <img src={o?.rasm} alt={o?.nomi} />
                          </figure>
                        </td>
                        <td> {o?.nomi} </td>
                        <td> {o?.ombor_Soni} </td>
                        <td> {o?.narx}$ </td>
                        <td> {o?.chegirma}% </td>
                        <td>
                          <button
                            className="btnClikc addCart"
                            onClick={() => handleAddCart(o)}
                          >
                            <BsCartPlusFill className="_icon" />
                          </button>
                        </td>
                        <td>
                          <button
                            className="btnClikc removeLike"
                            onClick={() => handleLike(o)}
                          >
                            <AiFillHeart className="_icon" />
                          </button>
                        </td>
                      </tr>
                    );
                  })
              ) : (
                <tr>
                  <th>Yoqtirilgan mahsulotlar qolmadi</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

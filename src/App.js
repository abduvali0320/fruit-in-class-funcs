import "./app.css";
import "./style/style.css";
import Navbar from "./component/navbar/Navbar";
import SlowSlider from "./component/slowSlider/SlowSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "./component/simpleSlider/SimpleSlider";
import FirtSlider from "./component/firstSlider/FirtSlider";
import { useEffect, useState } from "react";
import SecondSlider from "./component/secondSlider/SecondSlider";
import ThirstSlider from "./component/thirstSlider/ThirstSlider";
import {
  rasm1,
  rasm10,
  rasm11,
  rasm12,
  rasm13,
  rasm14,
  rasm15,
  rasm2,
  rasm3,
  rasm4,
  rasm5,
  rasm6,
  rasm7,
  rasm8,
  rasm9,
} from "./support";
import { Offers } from "./component/offers/Offers";
import Footer from "./component/footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalCart from "./component/modalCart/ModalCart";
import ModalLike from "./component/modalLike/ModalLike";
function App() {
  const [likeShow, setLikeSHow] = useState(false);
  const [cartShow, setCartSHow] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [data, setData] = useState({
    firtSlider: [
      {
        id: 0,
        ombor_Soni: 0,
        nomi: "Fresh organic apricot",
        soni: 0,
        narx: 11,
        yoqdi: false,
        rasm: rasm1,
        chegirma: 15,
        category: "firtSlider",
      },
      {
        id: 1,
        ombor_Soni: 6,
        nomi: "Cucumber",
        soni: 0,
        narx: 18,
        yoqdi: false,
        rasm: rasm2,
        chegirma: 17,
        category: "firtSlider",
      },
      {
        id: 2,
        ombor_Soni: 10,
        nomi: "Hazelnuts filbert nut",
        soni: 0,
        narx: 98,
        yoqdi: false,
        rasm: rasm3,
        chegirma: 19,
        category: "firtSlider",
      },
      {
        id: 3,
        ombor_Soni: 11,
        nomi: "raw broccoli",
        soni: 0,
        narx: 29,
        yoqdi: false,
        rasm: rasm4,
        chegirma: 19,
        category: "firtSlider",
      },
      {
        id: 4,
        ombor_Soni: 0,
        nomi: " Organic quince",
        soni: 0,
        narx: 71,
        yoqdi: false,
        rasm: rasm5,
        chegirma: 12,
        category: "firtSlider",
      },
    ],
    secondSlider: [
      {
        id: 5,
        ombor_Soni: 12,
        nomi: "Red apple",
        soni: 0,
        narx: 19,
        yoqdi: false,
        rasm: rasm6,
        chegirma: 24,
        category: "secondSlider",
      },
      {
        id: 6,
        ombor_Soni: 23,
        nomi: "capsicum-green",
        soni: 0,
        narx: 18,
        yoqdi: false,
        rasm: rasm7,
        chegirma: 26,
        category: "secondSlider",
      },
      {
        id: 7,
        ombor_Soni: 16,
        nomi: "Pear fruit",
        soni: 0,
        narx: 28,
        yoqdi: false,
        rasm: rasm8,
        chegirma: 16,
        category: "secondSlider",
      },
      {
        id: 8,
        ombor_Soni: 35,
        nomi: "Blueberry",
        soni: 0,
        narx: 19,
        yoqdi: false,
        rasm: rasm9,
        chegirma: 14,
        category: "secondSlider",
      },
      {
        id: 9,
        ombor_Soni: 21,
        nomi: "Fresh raspberry",
        soni: 0,
        narx: 14,
        yoqdi: false,
        rasm: rasm10,
        chegirma: 18,
        category: "secondSlider",
      },
    ],
    thirstSlider: [
      {
        id: 10,
        ombor_Soni: 0,
        nomi: "Ginger",
        soni: 0,
        narx: 11,
        yoqdi: false,
        rasm: rasm11,
        chegirma: 9,
        category: "thirstSlider",
      },
      {
        id: 11,
        ombor_Soni: 8,
        nomi: "Two fresh figs",
        soni: 0,
        narx: 14,
        yoqdi: false,
        rasm: rasm12,
        chegirma: 19,
        category: "thirstSlider",
      },
      {
        id: 12,
        ombor_Soni: 13,
        nomi: "Strawberry",
        soni: 0,
        narx: 98,
        yoqdi: false,
        rasm: rasm13,
        chegirma: 18,
        category: "thirstSlider",
      },
      {
        id: 13,
        ombor_Soni: 11,
        nomi: "Eggplant",
        soni: 0,
        narx: 23,
        yoqdi: false,
        rasm: rasm14,
        chegirma: 8,
        category: "thirstSlider",
      },
      {
        id: 14,
        ombor_Soni: 0,
        nomi: "egg",
        soni: 0,
        narx: 14,
        yoqdi: false,
        rasm: rasm15,
        chegirma: 5,
        category: "thirstSlider",
      },
    ],
  });

  // funksiyalar
  const handleCartShow = () => {
    if (cartData.length > 0) {
      setCartSHow(!cartShow);
      window.document.body.style.overflow = cartShow ? "auto" : "hidden";
    } else {
      toast.error("Saqlangan mahsulotlar yo'q");
    }
  };
  const handleLikeShow = () => {
    if (
      [...data.firtSlider, ...data.secondSlider, ...data.thirstSlider].filter(
        (o) => o.like
      ).length > 0
    ) {
      setLikeSHow(!likeShow);
      window.document.body.style.overflow = likeShow ? "auto" : "hidden";
    } else {
      toast.error("yoqtirilgan mahsulot yo'q");
    }
  };
  function handleChegirma(p) {
    return p.map((item) =>
      true
        ? {
            ...item,
            chegirmaNarx: (
              item.narx -
              (item.narx / 100) * item.chegirma
            ).toFixed(2),
          }
        : { ...item }
    );
  }

  function handleAddCart(item) {
    if (cartData.filter((c) => c.id === item.id).length === 0) {
      setCartData([item, ...cartData]);
      toast.success("mahsulot saqlandi");
    } else {
      setCartData(cartData.map((i) => (i.id === item.id ? item : i)));
      toast.success("ayni paytdagi mahsulot saqlandi");
    }
  }

  // har bir ojb ni chegirmasini hisoblash
  useEffect(() => {
    setData({
      ...data,
      firtSlider: handleChegirma(data.firtSlider),
      secondSlider: handleChegirma(data.secondSlider),
      thirstSlider: handleChegirma(data.thirstSlider),
    });
  }, [setData]);
  // dataning sonini oshirish va kamaytirish
  const handleCountChange = (e, item) => {
    switch (e.target.name) {
      case "minus":
        if (0 < item.soni) {
          setData({
            ...data,
            [item?.category]: data?.[item.category].map((p) => {
              return p.id === item.id ? { ...p, soni: p.soni - 1 } : p;
            }),
          });
        } else {
          toast.warn("mahuslot 0 dan kam bo'lmaydi", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        break;
      case "plus":
        if (item.ombor_Soni > item.soni) {
          setData({
            ...data,
            [item?.category]: data?.[item.category].map((p) => {
              return p.id === item.id ? { ...p, soni: p.soni + 1 } : p;
            }),
          });
        } else {
          toast.warn(
            `omborda mahsulot qolma${item.ombor_Soni === 0 ? "gan" : "di"}   `,
            {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
          );
        }
        break;
    }
  };
  const handleLike = (item) => {
    setData({
      ...data,
      [item?.category]: data?.[item.category].map((p) => {
        return p.id === item.id ? { ...p, like: !p.like } : p;
      }),
    });
    setCartData(
      cartData.map((p) => {
        return p.id === item.id ? { ...p, like: !p.like } : p;
      })
    );
    if (!item?.like) {
      toast.success("mahsulotimz yoqganidan xursandmiz");
    } else {
      toast.error("afsus, mahsulotimiz yoqmadi");
    }
  };
  const handleRemoveCart = (o) => {
    setCartData(cartData.filter((p) => p.id !== o.id));
    toast.warn("mahsulot savatdan olindi");
    if (cartData.length === 1) {
      handleCartShow();
    }
  };
  return (
    <>
      <div className="container">
        <ToastContainer autoClose={"1500"} />
        <ModalCart
          cartShow={cartShow}
          cartData={cartData}
          handleCartShow={handleCartShow}
          handleCountChange={handleCountChange}
          handleLike={handleLike}
          handleRemoveCart={handleRemoveCart}
          data={[
            ...data.firtSlider,
            ...data.secondSlider,
            ...data.thirstSlider,
          ]}
        />
        <ModalLike
          likeShow={likeShow}
          handleAddCart={handleAddCart}
          data={[
            ...data.firtSlider,
            ...data.secondSlider,
            ...data.thirstSlider,
          ]}
          handleLikeShow={handleLikeShow}
          handleLike={handleLike}
        />
        <Navbar
          data={data}
          cartData={cartData}
          handleCartShow={handleCartShow}
          handleLikeShow={handleLikeShow}
        />
        <div className="slowSlider">
          <SlowSlider />
        </div>
        <SimpleSlider />
        <div className="sliderBox">
          <FirtSlider
            data={data.firtSlider}
            handleCountChange={handleCountChange}
            handleLike={handleLike}
            handleAddCart={handleAddCart}
          />
        </div>
        <div className="sliderBox">
          <Offers />
        </div>
        <div className="sliderBox">
          <SecondSlider
            data={data.secondSlider}
            handleCountChange={handleCountChange}
            handleLike={handleLike}
            handleAddCart={handleAddCart}
          />
        </div>
        <div className="sliderBox">
          <ThirstSlider
            data={data.thirstSlider}
            handleCountChange={handleCountChange}
            handleLike={handleLike}
            handleAddCart={handleAddCart}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

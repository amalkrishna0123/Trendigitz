import React from "react";
import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { BiRupee } from "react-icons/bi";
import { setAddItemToCart } from "../app/CartSlice";

const Item = ({
  ifExists,
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}) => {
  // console.log(id)
  const dispatch = useDispatch()

  const onAddToCart = () => {
    const item = {id, title, text, img, color, shadow, price }
    dispatch(setAddItemToCart(item))
  }
  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105 ${
          ifExists ? " justify-items-start" : " justify-items-center"
        } `}
      >
        <div
          className={`grid items-center justify-items-center ${
            ifExists ? " justify-items-start" : " justify-items-center"
          } `}
        >
          <h1 className=" text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
            {title}
          </h1>
          <p className="text-slate-200 filter drop-shadow text-base lg:text-sm font-normal">
            {text}
          </p>

          <div className=" flex items-center justify-between w-28 my-2">
            <div className=" flex items-center bg-white px-2 rounded blur-effect-theme">
              <h1 className="text-black text-sm flex items-center font-medium ">
                <BiRupee />
                {price}
              </h1>
            </div>
            <div className="flex items-center gap-1">
              <FaStar className="flex icon-style text-slate-900 w-5 h-5 md:w-4 md:h-4" />
              <h1 className="md:text-sm text-slate-100 font-normal">
                {rating}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="bg-white opacity-90 blur-effect-theme button-theme p-0.5 shadow shadow-slate-200" onClick={()=>onAddToCart()}
            >
              <GiShoppingBag className=" icon-style text-slate-900" />
            </button>
            <button
              type="button"
              className="bg-white opacity-90 blur-effect-theme button-theme px-2 py-1"
            >
              {btn}
            </button>
          </div>
        </div>
        <div
          className={`flex items-center ${
            ifExists ? " absolute top-0 right-1" : " justify-center"
          } `}
        >
          <img
            src={img}
            alt={`${id}`}
            className={` transitions-theme hover:-rotate-12 ${
              ifExists
                ? " h-auto w-64 lg:w-56 md:w-48 rotate-[25deg]"
                : "h-36 w-auto"
            } `}
          />
        </div>
      </div>
    </>
  );
};

export default Item;

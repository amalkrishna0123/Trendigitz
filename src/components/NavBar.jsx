import React, { useEffect, useState } from "react";
import logo from "./../assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { setOpenCart } from "../app/CartSlice";

const NavBar = () => {
    const [navPosition, SetNavPosition] = useState(false)
    const dispatch = useDispatch()

    const onCartToggle = () => {
      dispatch(setOpenCart({
        cartState : true
      }))
    }
    const navScroll = () =>{
        if(window.scrollY > 30){
            SetNavPosition(true)
        }
        else{
            SetNavPosition(false)
        }
    }
    useEffect(() =>{
        window.addEventListener('scroll',navScroll)

        return(() =>{
            window.removeEventListener('scroll',navScroll)
        })
    })
  return (
    <>
      <header className={
        !navPosition? 'absolute top-[-20px]  left-0 right-0 opacity-100 z-50' : ' fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme'
      }>
        <nav className="flex absolute items-center justify-between nike-container">
          <div className="flex items-center">
            <img src={logo} alt="" className=" w-40 h-auto" />
          </div>
          <ul className="flex items-center justify-center gap-2">
            <li className="grid items-center">
              <FiSearch className={`icon-style ${navPosition && 'text-slate-900 transition-all duration-300'}`} />
            </li>
            <li>
              <FaRegHeart className={`icon-style ${navPosition && 'text-slate-900 transition-all duration-300'}`} />
            </li>
            <li>
              <button type="button" onClick={onCartToggle} className=" border-none outline-none active:scale-110 transition-all duration-300 relative ">
                <HiOutlineShoppingBag className={`icon-style ${navPosition && 'text-slate-900 transition-all duration-300'}`} />
                <div className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${navPosition? 'bg-slate-900 text-slate-100 shadow-slate-900' : 'bg-slate-100 text-slate-900 shadow-slate-100' }`}>0</div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;

import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { useState } from "react";
import { useSelector } from "react-redux";

function Header() {
  const [show, setShow] = useState(false);

  const { cartItem } = useSelector((state) => state.cart);
  return (
    <div className="flex justify-between items-center px-4 md:px-24 py-6  bg-yellow-900 font-semibold mb-5 text-white">
      <div className="font-seminold text-xl sm:text-3xl">STORE 🏪</div>
      <div className="space-x-14 md:flex hidden">
        <Link to="/">Products</Link>
        <Link to="/about">About</Link>

        <Link
          to="/cart"
          className="flex flex-row gap-2 justify-center items-center"
        >
          {cartItem.length > 0 && (
            <span className="w-6 h-6 text-lg rounded-full bg-white text-black flex justify-center items-center font-bold">
              {cartItem.reduce((acc, item) => acc + item.qty, 0)}
            </span>
          )}
          Cart
        </Link>
      </div>
      <Link
        className="hidden items-center space-x-1 md:flex gap-1 border py-2 px-5 border-white"
        to="/login"
      >
        <FaUser />
        Login
      </Link>
      <div
        className={
          !show
            ? "space-y-14 text-lg space-x-6 md:hidden flex flex-col w-[100%] h-screen transition-all duration-500 bg-gray-800 fixed top-0 left-[-100%] pt-5"
            : "space-y-14 text-lg space-x-6 md:hidden flex flex-col w-[100%] h-screen transition-all duration-500 bg-gray-800 fixed top-0 left-0 pt-5"
        }
      >
        <FaTimes
          style={{ cursor: "pointer", color: "red", fontSize: "1.3rem" }}
          onClick={() => setShow(false)}
          className="absolute top-5 right-5"
        />
        <Link to="/">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/cart" className="flex flex-row gap-2 items-center">
          {cartItem.length > 0 && (
            <span className="w-6 h-6 text-lg rounded-full bg-white text-black flex justify-center items-center font-bold">
              {cartItem.reduce((acc, item) => acc + item.qty, 0)}
            </span>
          )}
          Cart
        </Link>
        <Link
          className="flex items-center space-x-1 gap-1 border py-2 px-5 border-white w-[100px]"
          to="/login"
        >
          <FaUser />
          Login
        </Link>
      </div>
      <FaBars
        className="md:hidden block text-2xl font-semibol cursor-pointer"
        onClick={() => setShow(true)}
      />
    </div>
  );
}

export default Header;

import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useShopping } from "../contexts/Shopping";
import { useUser } from "../contexts/Auth";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AppImage from "../assets/chorebucks.png";
import { FcCurrencyExchange } from "react-icons/fc";

const Header = ({ points }) => {
  const { cart } = useShopping();
  const { user } = useUser();
  const navigate = useNavigate();
  const goToShoppingCart = () => {
    navigate("/cart");
  };

  const style = {
    headerContainer: `container flex flex-col mx-auto min-w-full py-0.5 bg-gray-100`,
    dividerOne: `container flex justify-between min-w-full`,
    logoContainer: `flex content-center ml-2`,
    currencyLogo: `text-4xl`,
    appLogo: `mt-2 w-2/5 h-3/6 md:w-3/12 md:h-3/6 lg:w-2/12 lg:h-3/6`,
    cartContainer: `flex flex-col items-center my-auto mr-2`,
    shoppingCartLogo: `text-4xl text-black pt-1 mx-auto`,
    headingOne: `absolute text-xs ml-7 bg-red-500 border-white text-white px-1.5 py-0.5 rounded-xl`,
    spanBox: `flex pr-2`,
    paragraphOne: `text-center font-semibold`,
    paragraphTwo: `ml-1`,
    userContainer: `flex flex-row self-end mr-4`,
    headingTwo: `ml-1`,
  };

  return (
    <header className={style.headerContainer}>
      <div className={style.dividerOne}>
        <div className={style.logoContainer}>
          <FcCurrencyExchange className={style.currencyLogo} />
          <img src={AppImage} alt="Chore Bucks" className={style.appLogo} />
        </div>
        <div className={style.cartContainer}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToShoppingCart}
          >
            <AiOutlineShoppingCart className={style.shoppingCartLogo} />
          </motion.button>
          {cart.length > 0 && (
            <h2 className={style.headingOne}>
              {cart.length}
            </h2>
          )}
          <span className={style.spanBox}>
            <p className={style.paragraphOne}>{points}</p>
            <p className={style.paragraphTwo}>Points</p>
          </span>
        </div>
      </div>
      <div className={style.userContainer}>
        <h2>Welcome!</h2>
        <h2 className={style.headingTwo}>{user.username}</h2>
      </div>
    </header>
  );
}

export default Header
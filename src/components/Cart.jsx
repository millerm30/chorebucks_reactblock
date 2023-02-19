import React, { useState } from "react";
import { useShopping } from "../contexts/Shopping";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import CartItem from "./Cartitem";

const Cart = ({ points }) => {
  const { cart, removeFromCartHandler, purchaseCartHandler, cartTotal, updateCartItem } = useShopping();
  const [isActive, setIsActive] = useState(false);

  const style = {
    mainContainer: `text-center bg-blue-300`,
    headingSection: `pt-10 mb-12`,
    headingOne: `text-3xl font-semibold p-1`,
    choreBucksSection: `container mx-auto`,
    headingTwo: `text-2xl font-semi-bold p-1`,
    paragraphOne: `italic pt-4`,
    cartItemContainer: `w-4/5 mx-auto mt-10 pb-5 rounded-lg bg-white md:w-1/2 lg:w-1/3`,
    cartButtonContainer: `container flex flex-col justify-center w-3/4 items-center py-3 mx-auto md:w-1/2 lg:w-1/3`,
    spanBoxOne: `container flex justify-between w-4/5`,
    headingThree: `text-left text-md`,
    headingFour: `text-md`,
    purchaseButton: `bg-blue-900 my-4 self-center px-4 py-2 text-white font-bold rounded-lg`,
  };

  return (
    <main className={style.mainContainer}>
        {isActive && (
        <Confetti
          style={{ pointerEvents: "none", width: "100%", height: "100%" }}
          numberOfPieces={isActive ? 500 : 0}
          recycle={false}
          onConfettiComplete={(confetti) => {
            setIsActive(false);
            confetti.reset();
          }}
        />
        )}
      <section className={style.headingSection}>
        <h2 className={style.headingOne}>🧒 Shopping Cart 🚀</h2>
        <p>Complete your purchase!</p>
      </section>
      <section className={style.choreBucksSection}>
        <h2 className={style.headingTwo}>
          Available Chore Bucks 💰{points}
        </h2>
        {cart.length === 0 && (
          <p className={style.paragraphOne}>No items added to your cart!</p>
        )}
        {cart.length === 0 ? null : (
          <div className={style.cartItemContainer}>
            {cart.map((wish) => (
              <CartItem
                key={wish.id}
                wish={wish}
                removeFromCartHandler={removeFromCartHandler}
                updateCartItem={updateCartItem}
              />
            ))}
          </div>
        )}
        <div className={style.cartButtonContainer}>
          {cart.length === 0 ? null : (
            <span className={style.spanBoxOne}>
              <h2 className={style.headingThree}>Cart Total:</h2>
              <h2 className={style.headingFour}>💰 {cartTotal}</h2>
            </span>
          )}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            disabled={cart.length === 0}
            onClick={() => {
              purchaseCartHandler();
              if (points >= cart.reduce((acc, curr) => acc + curr.points, 0))
                setIsActive(true); 
            }
            }
            className={`${style.purchaseButton} ${
              cart.length === 0
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            Purchase
          </motion.button>
        </div>
      </section>
    </main>
  );
};

export default Cart;

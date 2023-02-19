import React, { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

const WishAdd = ({ addWish }) => {
  const [title, setTitle] = useState("");
  const [points, setPoints] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = (e) => {
      e.preventDefault()
      setIsActive(true)
      addWish(title, Number(points))
      setTitle("")
      setPoints("")
  };

  const style = {
    section: `container mx-auto pt-10`,
    heading: `text-3xl font-semibold p-1 text-center`,
    paragraph: `text-center`,
    form: `flex flex-col w-3/4 mx-auto md:w-1/3`,
    wishInput: `rounded-md py-2 px-2 border border-blue-700 outline-none w-full mb-2`,
    pointsInput: `rounded-md py-2 px-2 border border-blue-700 outline-none w-1/2`,
    label: `text-left mt-5`,
    button: `bg-blue-900 my-4 self-center px-4 py-2 text-white font-bold rounded-lg`,
  };
  
  return (
    <section className={style.section}>
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
      <section>
        <h1 className={style.heading}>
          😉 Wish List! 👍
        </h1>
        <p className={style.paragraph}>
          Add items to your wish list that you would like to build your points
          to purchase!
        </p>
      </section>
      <form
        onSubmit={handleSubmit}
        className={style.form}
      >
        <label className={style.label}>Add Wish Item:</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          maxLength="100"
          required
          placeholder="Enter your wish item..."
          className={style.wishInput}
        ></input>
        <label className={style.label}>Add Point Value:</label>
        <input
          onChange={(e) => setPoints(e.target.value)}
          value={points}
          type="number"
          min="0"
          required
          placeholder="Enter point value..."
          className={style.pointsInput}
        ></input>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          disabled={!title || !points}
          className={`${style.button} ${!title || !points ? "opacity-40 cursor-not-allowed" : "curson-pointer"}`}
          value="add wish"
        >
          Add Wish Item
        </motion.button>
      </form>
    </section>
  );
}

export default WishAdd
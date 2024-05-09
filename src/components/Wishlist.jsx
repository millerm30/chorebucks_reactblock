import React from "react";
import Wishadd from "./Wishadd";
import { FaTrashAlt } from "react-icons/fa";
import { useWishes } from "../contexts/Wishes";
import Card from "./Card";
import { motion } from "framer-motion";

const style = {
  main: `bg-blue-300`,
  section: `grid grid-cols-2 gap-5 py-5 mx-5 md:grid-cols-3 lg:grid-cols-4`,
  paragraph: `text-center italic pt-4`,
  button: `bg-blue-900 my-4 px-4 py-2 text-white font-bold rounded-lg`,
};

const WishList = () => {
  const { wishes, addWish, completeWish, removeWish } = useWishes();

  return (
    <main className={style.main}>
      <Wishadd addWish={addWish} />
      {wishes.length === 0 && (
        <p className={style.paragraph}>No Wish List Items!</p>
      )}
      {
        <section className={style.section}>
          {wishes.map((wish) => (
            <Card key={wish.id} title={wish.title} points={wish.points} style={wish.style} remove={<FaTrashAlt onClick={() => removeWish(wish)}/>}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => completeWish(wish)}
                  className={style.button}>
                  Add To Cart
                </motion.button>
            </Card>
          ))}
        </section>
      }
    </main>
  );
}

export default WishList
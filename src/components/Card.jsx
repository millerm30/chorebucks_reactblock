import React from "react";
import { motion } from "framer-motion";

const styles = {
  motionDivider: `bg-[#f8f8f8] w-full px-2 py-1 mt-5 flex flex-col justify-center border-2 rounded-lg`,
  cardDivider: `container h-full flex flex-col justify-between`,
  button: `text-2xl text-red-600 block mr-0 ml-auto py-1`,
  headingOne: `text-2xl font-semibold p-1 text-center`,
  headingTwo: `text-lg font-semibold p-1 text-center`,
  spanBox: `mx-auto`,
};

export const Card = ({title, points, style, remove, children}) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 12,
      }}
      className={styles.motionDivider}
      style={style}
    >
      <div className={styles.cardDivider}>
        <span>
          <button className={styles.button}>
            {remove}
          </button>
          <h2 className={styles.headingOne}>{title}</h2>
          <h3 className={styles.headingTwo}>
            💰{points} Points
          </h3>
        </span>
        <span className={styles.spanBox}>{children}</span>
      </div>
    </motion.div>
  );
};

export default Card;
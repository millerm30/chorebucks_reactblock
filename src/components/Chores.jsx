import React, { useState } from "react";
import { useChores } from "../contexts/Chores";
import { GoTrashcan } from "react-icons/go";
import Card from "./Card";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import Confetti from "react-confetti";

const Chores = () => {
  const { chores, removeChore, completeChore } = useChores();
  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate();
  const goToAddChoresLink = () => {
    navigate("/choresadd");
  };

  const style = {
    mainContainer: `text-center bg-blue-300`,
    headingSection: `pt-10 mb-6`,
    headingOne: `text-3xl font-semibold p-1`,
    choreButton: `bg-blue-900 my-4 self-center px-4 py-2 text-white font-bold rounded-lg`,
    paragraphOne: `italic pt-4`,
    choresSection: `grid grid-cols-2 gap-5 mx-5 py-5 md:grid-cols-3 lg:grid-cols-4`,
    completeChoreButton: `bg-blue-900 my-4 self-center px-4 py-2 text-white font-bold rounded-lg`,
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
        <h2 className={style.headingOne}>🧒 Chore Area 🚀</h2>
        <p>Complete chores to build points!</p>
      </section>
      <section>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={goToAddChoresLink}
          className={style.choreButton}
        >
          Add Chores
        </motion.button>
      </section>
      <Outlet />
      <section className="choresArea">
        {chores.length === 0 && <p className={style.paragraphOne}>No Chores to do!</p>}
        {
          <section className={style.choresSection}>
            {chores.map((chore) => (
              <Card
                key={chore.id}
                style={chore.style}
                title={chore.title}
                points={chore.points}
                remove={<GoTrashcan onClick={() => removeChore(chore)} />}
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    completeChore(chore);
                    setIsActive(!isActive);
                  }}
                  className={style.completeChoreButton}
                >
                  Complete
                </motion.button>
              </Card>
            ))}
          </section>
        }
      </section>
    </main>
  );
}

export default Chores;
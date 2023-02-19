import React, { useState, useEffect, Fragment } from "react";
import { useChores } from "../contexts/Chores";
import choresChoices from "./Chorelist";
import toast from "react-hot-toast";
import { v4 as uuid } from 'uuid';
import { Dialog, Transition } from '@headlessui/react'
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const getInitialNewChoresLocalStorage = () => {
  const temp = localStorage.getItem("choresList");
  if (temp) {
    return JSON.parse(temp);
  }
  return choresChoices;
};

export default function MyModal() {
  const { addChore } = useChores();
  const [choresList, setChoresList] = useState(getInitialNewChoresLocalStorage);
  const navigate = useNavigate();
  const isOpen = true

  const goBack = () => {
    navigate("/chores");
  };

  const [chore, setChore] = useState("");
  const [point, setPoint] = useState("");
  const [label, setLabel] = useState("");

  const handleChoresChange = (e) => {
    setChore(e.target.value);
  };

  const handlePointChange = (e) => {
    setPoint(e.target.value);
  };

  const handleNewChore = (e) => {
    e.preventDefault();
    setChoresList([...choresList,{ label: label, value: label, id: uuid()}]);
    setLabel("");
    toast(`${label} added to chore list!`, { icon: "👍" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addChore(chore, Number(point));
    setChore("");
    setPoint("");
  };

  useEffect(() => {
    localStorage.setItem("choresList", JSON.stringify(choresList));
  }, [choresList]);

  const style = {
    mainContainer: `bg-blue-300`,
    transitionChild: `fixed inset-0 bg-black bg-opacity-25`,
    mainDivider: `fixed inset-0 overflow-y-auto`,
    secondDivider: `flex items-center justify-center p-4 text-center`,
    dialogPanel: `w-full max-w-md transform overflow-hidden rounded-2xl bg-blue-300 p-6 text-left align-middle shadow-xl transition-all`,
    dialogDivider: `text-center bg-blue-300`,
    sectionOne: `pt-2`,
    headingOne: `text-3xl font-semibold py-1`,
    paragraphOne: `text-center`,
    sectionTwo: `pt-5`,
    form: `flex flex-col w-full mx-auto`,
    chooseChoreLabel: `mb-1 text-left`,
    chooseChoreSelect: `rounded-md py-2 border mb-2 border-blue-700 outline-none`,
    pointsLabel: `mb-1 text-left`,
    pointsValueInput: `rounded-md p-2 border border-blue-700 outline-none w-1/2`,
    addChoreButton: `bg-blue-900 my-4 self-center px-4 py-2 text-white font-bold rounded-lg`,
    addNewChoreSection: `pb-5`,
    addNewChoreHeadingContainer: `pt-5`,
    headingTwo: `text-xl font-semibold p-1`,
    addNewChoreInputContainer: `pt-2`,
    addNewChoreForm: `flex flex-col w-full mx-auto`,
    addNewChoreLabel: `mb-1 text-left`,
    addNewChoreInput: `rounded-md py-2 px-2 border border-blue-700 outline-none w-full mb-2`,
    addNewChoreButton: `bg-blue-900 my-4 self-center px-4 py-2 text-white font-bold rounded-lg`,
    closeButton: `inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-black hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`,
  };

  return (
    <>
      <main className={style.mainContainer}>
        <Transition appear show={(isOpen)} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={() => null}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className={style.transitionChild} />
            </Transition.Child>

            <div className={style.mainDivider}>
              <div className={style.secondDivider}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className={style.dialogPanel}>
                    <div className={style.dialogDivider}>
                      <section className={style.sectionOne}>
                        <h2 className={style.headingOne}>
                          🙂 Add chores! 🚀
                        </h2>
                        <p className={style.paragraphOne}>
                          Add your chores below to start earning points!
                        </p>
                      </section>
                      <section className={style.sectionTwo}>
                        <form
                          onSubmit={handleSubmit}
                          className={style.form}
                        >
                          <label htmlFor="chores" className={style.chooseChoreLabel}>
                            Choose your chore:{""}
                          </label>
                          <select
                            value={chore}
                            name="chores"
                            onChange={handleChoresChange}
                            className={style.chooseChoreSelect}
                          >
                            {choresList.map((choice) => (
                              <option key={choice.id} value={choice.value}>
                                {choice.label}
                              </option>
                            ))}
                          </select>
                          <label htmlFor="chores" className={style.pointsLabel}>
                            Point value:
                          </label>
                          <input
                            type="number"
                            required
                            min={0}
                            placeholder="Enter point value..."
                            value={point}
                            name="chores"
                            onChange={handlePointChange}
                            className={style.pointsValueInput}
                          ></input>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            type="submit"
                            disabled={!chore}
                            className={`${style.addChoreButton} ${
                              !chore
                                ? "opacity-50 cursor-not-allowed"
                                : "cursor-pointer"
                            }`}
                          >
                            Add Chore
                          </motion.button>
                        </form>
                      </section>
                      <section className={style.addNewChoreSection}>
                        <div>
                          <div className={style.addNewChoreHeadingContainer}>
                            <h2 className={style.headingTwo}>
                              Don't see your chore above? <br></br>Add it
                              yourself!
                            </h2>
                          </div>
                          <div className={style.addNewChoreInputContainer}>
                            <form className={style.addNewChoreForm}>
                              <label
                                htmlFor="choresNew"
                                className={style.addNewChoreLabel}
                              >
                                Add new chore:
                              </label>
                              <input
                                value={label}
                                maxLength="100"
                                placeholder="Enter new chore..."
                                name="choresNew"
                                onChange={(e) => setLabel(e.target.value)}
                                className={style.addNewChoreInput}
                              ></input>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                type="submit"
                                disabled={!label}
                                onClick={handleNewChore}
                                className={`${style.addNewChoreButton} ${
                                  !label
                                    ? "opacity-50 cursor-not-allowed"
                                    : "cursor-pointer"
                                }`}
                              >
                                Add New Chore
                              </motion.button>
                            </form>
                          </div>
                        </div>
                      </section>
                    </div>
                    <div className="mt-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        className={style.closeButton}
                        onClick={goBack}
                      >
                        Close
                      </motion.button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </main>
    </>
  );
}

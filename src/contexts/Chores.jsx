import React, {useContext, useState, useEffect} from "react";
import toast from "react-hot-toast";
import { v4 as uuid } from "uuid";
import success from "../sounds/success.mp3";
import tada from "../sounds/tada.mp3";
import failure from "../sounds/failure.mp3";

const ChoresContext = React.createContext();

function getInitialChores() {
  const temp = localStorage.getItem("chores");
  const savedChores = JSON.parse(temp);
  return savedChores || [];
};

const createRandomBackGroundColors = () => {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  return bgColor;
};

let audioAddChore = new Audio(success);
let audioSuccess = new Audio(tada);
let audioFailure = new Audio(failure);

export function ChoresProvider({ children, addPoints}) {
    const [chores, setChores] = useState(getInitialChores);

    useEffect(() => {
        const temp = JSON.stringify(chores)
        localStorage.setItem("chores", temp)
    },[chores]);

    const addChore = (title, points) => {
        audioAddChore.play();
        toast(`👍 ${title} added to chores list!`);
        setChores([...chores, { id: uuid(), title, points, style: {borderColor: createRandomBackGroundColors()} }]);
    };

    const removeChore = (chore) => {
        audioFailure.play();
        toast(`🍩 ${chore.title} removed from chores list!`);
        setChores(chores.filter((c) => c !== chore));
    };

    const completeChore = (chore) => {
        audioSuccess.play();
        toast(`👏 ${chore.title} Completed. Good Job! 💸`);
        addPoints(chore.points)
        setChores(chores.filter((c) => c !== chore));
    };

    return (
        <ChoresContext.Provider value={{ chores, addChore, removeChore, completeChore }}>
            {children}
        </ChoresContext.Provider>
    );
}

export const useChores = () => useContext(ChoresContext);
import React, { useContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
import { useShopping } from "./Shopping";
import success from "../sounds/success.mp3";
import negative from "../sounds/icqdelete.mp3";
import yay from "../sounds/yay.mp3";

const WishesContext = React.createContext();

const localStorageKey = "wishList";

function getInitialWishes() {
  return localStorage.getItem(localStorageKey)
    ? JSON.parse(localStorage.getItem(localStorageKey))
    : [];
};

const createRandomBackGroundColors = () => {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  return bgColor;
};

let audioAddWish = new Audio(success);
let audioFailure = new Audio(negative);
let audioSuccess = new Audio(yay);

export function WishesProvider({ children }) {
    const { addToCartHandler } = useShopping();
    const [wishes, setWishes] = useState(getInitialWishes);

    const addWish = (title, points) => {
      audioAddWish.play();
      toast(`😃 ${title} added to wish list!`);
      setWishes([...wishes, { title, points, id: uuid(), style: {borderColor: createRandomBackGroundColors()} }]);
    };

    const completeWish = (wish) => {
      audioSuccess.play();
      addToCartHandler(wish.title, wish.points);
      setWishes(wishes.filter((i) => i.id !== wish.id));
      toast(`🚀 ${wish.title} added to shopping cart! 🚀`);
    };

    const removeWish = (wish) => {
      audioFailure.play();
      toast(`😛 ${wish.title} removed from wish list!`);
      setWishes(wishes.filter((i) => i !== wish));
    };

    useEffect(() => {
      const store = JSON.stringify(wishes);
      localStorage.setItem("wishList", store);
    }, [wishes]);
    
    return (
        <WishesContext.Provider value={{ wishes, addWish, completeWish, removeWish, createRandomBackGroundColors }}>
        {children}
        </WishesContext.Provider>
    );
};

export const useWishes = () => useContext(WishesContext);
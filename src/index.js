import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "tw-elements";
import Layout from "./components/Layout";
import HeroPage from "./components/Hero";
import ChoresPage from "./components/Chores";
import WishlistPage from "./components/Wishlist";
import ModalAdd from "./components/ChoresAddModal";
import App from "./App";
import Cart from "./components/Cart";
import Login from "./components/Login";
import { UserProvider } from "./contexts/Auth";
import { useUser } from "./contexts/Auth";

const root = ReactDOM.createRoot(document.getElementById("root"));

function getBucksFromLocalStorage() {
  const points = localStorage.getItem("points");
  if (points) {
    return Number(points);
  }
  return 0;
};

const Router = () => {
  const [points, setPoints] = useState(() => getBucksFromLocalStorage());
  
  const { isLoggedIn } = useUser();
  
  const addPoints = (amount) => setPoints(points + amount);
  const removePoints = (amount) => setPoints(points - amount);

  useEffect(() => {
    localStorage.setItem("points", points);
  } , [points]);
  
  return(
  <App points={points} addPoints={addPoints} removePoints={removePoints}>
    <BrowserRouter basename="/chorebucks_reactblock">
      <Routes>
        {isLoggedIn ? (
        <Route path="/" element={<Layout points={points}/>}>
          <Route path="" element={<HeroPage />} />
          <Route path="/chores" element={<ChoresPage />} />
            <Route path="/choresadd" element={<ModalAdd />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/cart" element={<Cart points={points}/>} />
        </Route>
        ) : (
          <Route path="/" element={<Login />} />
        )}
      </Routes>
    </BrowserRouter>
  </App>
);
};

const Main = () => {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

root.render(<Main />);

import React, { useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import AppImage from "../assets/chorebucks.png";
import { FcCurrencyExchange } from "react-icons/fc";

const getInitialUsersFromLocalStorage = () => {
    const user = localStorage.getItem("user");
    if (user) {
        return JSON.parse(user);
    }
    return [user];
}

const Newuser = () => {
    const [ newUser, setNewUser ] = useState(getInitialUsersFromLocalStorage());
    const [ newUsername, setNewUsername ] = useState("");
    const [ newPassword, setNewPassword ] = useState("");
    const [ showPassword, setShowPassword ] = useState(false);

    const handleNewUsernameChange = (e) => {
        setNewUsername(e.target.value);
    }

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    }

    const handleChangeEye = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setNewUser([...newUser, { username: newUsername, password: newPassword }]);
        setNewUsername("");
        setNewPassword("");
        window.location.pathname = ("/chore-bucks");
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(newUser));
    }
    , [newUser]);

    const style = {
      mainDivider: `bg-blue-100 h-screen`,
      heading: `text-center mb-4`,
      appLogoDivider: `flex justify-center py-6`,
      currecnyLogo: `text-4xl`,
      appLogo: `w-1/2 md:w-1/4 lg:w-1/4`,
      form: `w-3/4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 md:w-1/2 lg:w-1/3 mx-auto`,
      dividerOne: `mb-4`,
      usernameLabel: `block text-gray-700 text-sm font-bold mb-2`,
      usernameInput: `shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`,
      dividerTwo: `mb-6`,
      dividerThree: `flex justify-between`,
      passwordLabel: `block text-gray-700 text-sm font-bold mb-2`,
      spanBox: `flex items-start`,
      buttonEye: `text-gray-700 text-2xl cursor-pointer mr-1`,
      passwordInput: `shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`,
      dividerFour: `flex flex-col`,
      buttonSignUp: `bg-blue-900 my-4 px-4 py-2 text-white font-bold rounded-lg`,
      paragraphTwo: `text-center text-black-500 text-xs pt-6`,
    };

    return (
      <div className={style.mainDivider}>
        <div className={style.appLogoDivider}>
          <FcCurrencyExchange className={style.currecnyLogo} />
          <img src={AppImage} alt="" className={style.appLogo} />
        </div>
        <h1 className={style.heading}>Registration Form</h1>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.dividerOne}>
            <label htmlFor="username" className={style.usernameLabel}>
              Username
            </label>
            <input
              onChange={handleNewUsernameChange}
              value={newUsername}
              name="userName"
              className={style.usernameInput}
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className={style.dividerTwo}>
            <div className={style.dividerThree}>
              <span>
                <label htmlFor="password" className={style.passwordLabel}>
                  Password
                </label>
              </span>
              <span className={style.spanBox}>
                <button onClick={handleChangeEye} className={style.buttonEye}>
                  {!showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </button>
                {!showPassword ? "show" : "hide"}
              </span>
            </div>
            <input
              onChange={handleNewPasswordChange}
              value={newPassword}
              name="password"
              className={style.passwordInput}
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="******************"
            />
          </div>
          <div className={style.dividerFour}>
            <button
              disabled={!newUsername || !newPassword}
              className={`${style.buttonSignUp} ${
                !newUsername || !newPassword
                  ? "opacity-40 cursor-not-allowed"
                  : "cursor-pointer"
              }`}
            >
              Sign Up
            </button>
            <Link to="/">
              <p className={style.paragraphTwo}>Back to Login</p>
            </Link>
          </div>
        </form>
      </div>
    );
}

export default Newuser
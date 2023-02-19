import React, { useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const UserContext = React.createContext();

const users = {
  "Guest": {
    username: "Guest",
    password: "Guest",
  },
  "Mike": {
    username: "Mike",
    password: "Mike",
  },
};

function getLoggedInUser() {
  const user = localStorage.getItem("user");
  if (user === null) {
    return undefined;
  } else {
    return JSON.parse(user);
  }
};

export function UserProvider({ children }) {
  const [user, setUser] = useState(getLoggedInUser);
  const [isLoggedIn, setIsLoggedIn] = useState(getLoggedInUser(user !== undefined));

   useEffect(() => {
     setIsLoggedIn(() => {
       const user = getLoggedInUser();
       if (user) {
         return true;
       }
       return false;
     });
   }, [setIsLoggedIn]);

  const login = (username, password) => {
    const user = users[username];
    if (!user) {
      toast("User not found", {
        icon: "💩",
      });
      return;
    }
    const passwordCorrect = user.password === password;
    if (!passwordCorrect) {
      toast("Password is incorrect", {
        icon: "🤨",
      });
      return;
    }
    toast(`Welcome ${user.username}`, {
      icon: "🎉",
    });
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    setIsLoggedIn(!isLoggedIn);
  };

  const handleLogOut = () => {
    toast(`Goodbye ${user.username}`, {
      icon: "💩",
    });
    localStorage.removeItem("user");
    setIsLoggedIn(!isLoggedIn);
    setUser(undefined);
    window.location.href = "/chore-bucks";
  };

  return (
    <UserContext.Provider value={{user, isLoggedIn: user !== undefined, login, handleLogOut}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
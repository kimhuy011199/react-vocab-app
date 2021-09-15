import React, { useState } from "react";

const AuthContext = React.createContext({
  token: null,
  isLoggedIn: false,
  email: "",
  login: (token, email) => {},
  logout: () => {},
});

export default AuthContext;

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const isLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    setEmail("");
  };

  const loginHandler = (token, email) => {
    setToken(token);
    setEmail(email);
  };

  const contextValue = {
    token,
    isLoggedIn,
    email,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

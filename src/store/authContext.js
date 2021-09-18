import React, { useState } from "react";

const AuthContext = React.createContext({
  token: null,
  isLoggedIn: false,
  email: null,
  id: null,
  login: (token, email) => {},
  logout: () => {},
});

export default AuthContext;

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [id, setId] = useState(localStorage.getItem("id"));
  const isLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    setEmail(null);
    setId(null);

    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("id");
  };

  const loginHandler = (token, email, id) => {
    setToken(token);
    setEmail(email);
    setId(id);

    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    localStorage.setItem("id", id);
  };

  const contextValue = {
    token,
    isLoggedIn,
    email,
    id,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

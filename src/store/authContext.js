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
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);
  const [id, setId] = useState(null);
  const isLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    setEmail(null);
    setId(null);
  };

  const loginHandler = (token, email, id) => {
    setToken(token);
    setEmail(email);
    setId(id);
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

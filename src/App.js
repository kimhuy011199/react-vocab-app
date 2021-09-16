import { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Homepage from "./pages/Homepage/Homepage";
import Categories from "./pages/Categories/Categories";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import AuthContext from "./store/authContext";
import Learning from "./pages/Learning/Learning";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          {!authCtx.isLoggedIn && <Homepage />}
          {authCtx.isLoggedIn && <Categories />}
        </Route>
        <Route path="/register">
          {!authCtx.isLoggedIn && <Register />}
          {authCtx.isLoggedIn && <Redirect to="/" />}
        </Route>
        <Route path="/login">
          {!authCtx.isLoggedIn && <Login />}
          {authCtx.isLoggedIn && <Redirect to="/" />}
        </Route>
        <Route path="/profile">
          {!authCtx.isLoggedIn && <Redirect to="/" />}
          {authCtx.isLoggedIn && <Profile />}
        </Route>
        <Route path="/learning/:slug">
          {!authCtx.isLoggedIn && <Redirect to="/" />}
          {authCtx.isLoggedIn && <Learning />}
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

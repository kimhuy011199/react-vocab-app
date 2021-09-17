import { useContext, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Homepage from "./pages/Homepage/Homepage";
import Categories from "./pages/Categories/Categories";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AuthContext from "./store/authContext";
import Learning from "./pages/Learning/Learning";
import Examination from "./pages/Examination/Examination";
import NotFound from "./pages/NotFound/NotFound";
import MyLearning from "./pages/MyLearning/MyLearning";
import MyVocabs from "./pages/MyVocabs/MyVocabs";

import { useDispatch } from "react-redux";
import { fetchVocabs } from "./store/vocabs-action";
import { fetchLearning } from "./store/learning-action";

function App() {
  const authCtx = useContext(AuthContext);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authCtx.isLoggedIn) {
      dispatch(fetchVocabs(authCtx.id));
      dispatch(fetchLearning(authCtx.id));
    }
  }, [authCtx.isLoggedIn, authCtx.id, dispatch]);

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
        <Route path="/learning/:slug">
          {!authCtx.isLoggedIn && <Redirect to="/" />}
          {authCtx.isLoggedIn && <Learning />}
        </Route>
        <Route path="/examination/:slug">
          {!authCtx.isLoggedIn && <Redirect to="/" />}
          {authCtx.isLoggedIn && <Examination />}
        </Route>
        <Route path="/mylearning">
          {!authCtx.isLoggedIn && <Redirect to="/" />}
          {authCtx.isLoggedIn && <MyLearning />}
        </Route>
        <Route path="/myvocabs">
          {!authCtx.isLoggedIn && <Redirect to="/" />}
          {authCtx.isLoggedIn && <MyVocabs />}
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

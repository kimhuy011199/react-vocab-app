import { useContext, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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
import LearningMyVocabs from "./pages/LearningMyVocabs/LearningMyVocabs";
import ExaminationMyVocabs from "./pages/ExaminationMyVocabs/ExaminationMyVocabs";

import { updateVocabs } from "./store/vocabs-action";
import { updateLearning } from "./store/learning-action";
import { fetchVocabs } from "./store/vocabs-action";
import { fetchLearning } from "./store/learning-action";

function App() {
  const authCtx = useContext(AuthContext);
  const dispatch = useDispatch();
  const vocabularies = useSelector((state) => state.vocabs.vocabularies);
  const vocabsID = useSelector((state) => state.vocabs.vocabsID);
  const categories = useSelector((state) => state.learning.categories);
  const learningID = useSelector((state) => state.learning.learningID);

  // Fetch MyVocabs and MyLearning when user login
  useEffect(() => {
    if (authCtx.isLoggedIn) {
      dispatch(fetchVocabs(authCtx.id));
      dispatch(fetchLearning(authCtx.id));
    }
  }, [authCtx.isLoggedIn, authCtx.id, dispatch]);

  // Update MyVocabs when vocabularies change
  useEffect(() => {
    if (authCtx.isLoggedIn && vocabsID) {
      dispatch(
        updateVocabs(
          {
            userID: authCtx.id,
            vocabularies: vocabularies,
          },
          vocabsID
        )
      );
    }
  }, [authCtx.isLoggedIn, authCtx.id, dispatch, vocabularies, vocabsID]);

  // Update MyLearning when categories change
  useEffect(() => {
    if (authCtx.isLoggedIn && learningID) {
      dispatch(
        updateLearning(
          {
            userID: authCtx.id,
            categories: categories,
          },
          learningID
        )
      );
    }
  }, [authCtx.isLoggedIn, authCtx.id, dispatch, categories, learningID]);

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
        <Route path="/myvocabs" exact>
          {!authCtx.isLoggedIn && <Redirect to="/" />}
          {authCtx.isLoggedIn && <MyVocabs />}
        </Route>
        <Route path="/myvocabs/learning" exact>
          {!authCtx.isLoggedIn && <Redirect to="/" />}
          {authCtx.isLoggedIn && <LearningMyVocabs />}
        </Route>
        <Route path="/myvocabs/examination" exact>
          {!authCtx.isLoggedIn && <Redirect to="/" />}
          {authCtx.isLoggedIn && <ExaminationMyVocabs />}
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

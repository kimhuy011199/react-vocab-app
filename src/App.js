import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Homepage from "./pages/Homepage/Homepage";
import Register from "./pages/Register/Register";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login"></Route>
      </Switch>
    </Layout>
  );
}

export default App;

import { Switch, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Desserts from "./pages/Desserts";
import Drink from "./pages/Drink";
import Food from "./pages/Food";
import Home from "./pages/Home";
import Order from "./pages/Order";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/food">
          <Food />
        </Route>
        <Route path="/drink">
          <Drink />
        </Route>
        <Route path="/desserts">
          <Desserts />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

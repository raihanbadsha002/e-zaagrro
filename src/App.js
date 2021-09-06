import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Bill from "./pages/Bill/Bill";
import Payment from "./pages/Payment/Payment";
import Shipping from "./pages/Shipping/Shipping";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Shipping />
        </Route>
        <Route path="/bill">
          <Bill />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

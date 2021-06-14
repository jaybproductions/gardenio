import logo from "./logo.svg";
import "./css/App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import User from "./components/User"
import Department from "./components/Department";
import List from "./components/List"
import Login from "./pages/Login";
function App() {
 

  return (
    <Switch>
      <Route path="/login">
       <Login/>
      </Route>
 
      <PrivateRoute path="/">
        <Home />
      </PrivateRoute>
    </Switch>
  );
}

export default App;
